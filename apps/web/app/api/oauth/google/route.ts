import {google} from "@/lib/lucia-auth/oauth";
import {cookies} from "next/headers";
import {NextRequest, NextResponse} from "next/server";
import {db} from "@/lib/db";
import {GoogleUserInfo} from "@/lib/interfaces";
import {lucia} from "@/lib/lucia-auth/auth";
import {User} from "database/orms";
import {OAuth2RequestError} from "arctic";

export async function GET(req: NextRequest) {
  const url = req.nextUrl;
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  let user: User;

  if (!code || !state)
    return NextResponse.json({error: "Invalid request"}, {status: 400});

  const codeVerifier = cookies().get("codeVerifier")?.value;
  const savedState = cookies().get("state")?.value;

  if (!codeVerifier || !savedState)
    return NextResponse.json({error: "Invalid verifier or state"}, {status: 400});

  if (savedState !== state)
    return NextResponse.json({error: "State doesn't exists"}, {status: 400});

  try {
    const {accessToken, refreshToken, accessTokenExpiresAt} =
      await google.validateAuthorizationCode(code, codeVerifier);

    const googleRes = await fetch("https://www.googleapis.com/oauth2/v1/userinfo", {
      headers: {Authorization: `Bearer ${accessToken}`},
      method: "GET",
    });

    const payload = (await googleRes.json()) as GoogleUserInfo;

    await db.$transaction(async (trx) => {
      user = await trx.user.upsert({
        where: {email: payload.email},
        create: {
          email: payload.email,
          name: payload.name ?? payload.given_name,
          emailVerified: payload.verified_email,
          givenName: payload.given_name ?? payload.name,
        },
        update: {
          email: payload.email,
          name: payload.name ?? payload.given_name,
          emailVerified: payload.verified_email,
          givenName: payload.given_name ?? payload.name,
        },
      });

      await trx.account.upsert({
        where: {providerUserId: payload.id},
        update: {
          access_token: accessToken,
          refresh_token: refreshToken,
          expires_at: accessTokenExpiresAt,
        },
        create: {
          providerId: "google",
          providerUserId: payload.id,
          refresh_token: refreshToken,
          access_token: accessToken,
          expires_at: accessTokenExpiresAt,
          userId: user.id,
        },
      });
    });

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return NextResponse.redirect(
      new URL("/dashboard", process.env.NEXT_PUBLIC_APP_URL),
      {status: 302},
    );
  } catch (error: any) {
    if (error instanceof OAuth2RequestError) {
      // invalid code
      return NextResponse.json({error: error?.message}, {status: 400});
    }
    return NextResponse.json(
      {error: error?.message ?? "Authentication error"},
      {status: 500},
    );
  }
}

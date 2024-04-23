"use server";
import {z} from "zod";
import {emailSignInSchema} from "@/lib/schemas/auth.schema";
import {google} from "@/lib/lucia-auth/oauth";
import {generateCodeVerifier, generateState} from "arctic";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {lucia} from "@/lib/lucia-auth/auth";

export async function emailSignIn(values: z.infer<typeof emailSignInSchema>) {
  try {
  } catch (error) {}
}

export async function createFacebookAuthURL() {
  try {
  } catch (error: any) {
    return {error: error?.message ?? "An error occurred"};
  }
}

export async function createGoogleAuthURL() {
  try {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();

    cookies().set("codeVerifier", codeVerifier, {
      // path: "/",
      httpOnly: true,
      // expires: 60 * 10,
      // sameSite: "strict",
      // secure: process.env.NODE_ENV === "production",
    });
    cookies().set("state", state, {
      // path: "/",
      httpOnly: true,
      // expires: 60 * 10,
      // sameSite: "strict",
      // secure: process.env.NODE_ENV === "production",
    });

    const authorizationURL = await google.createAuthorizationURL(
      state,
      codeVerifier,
      {
        scopes: ["email", "profile"],
      },
    );

    return {success: true, data: authorizationURL};
  } catch (error: any) {
    return {error: error?.message ?? "An error occurred"};
  }
}

// export async function logout() {
//   let session = '';
//   if (@session) return { error: "Unauthorized" }
//   await lucia.invalidateSession(session)

//   const sessionCookie = lucia.createBlankSessionCookie();
//   cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
//   return redirect("/sign-in")
// }

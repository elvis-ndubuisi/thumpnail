"use server";

import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {generateCodeVerifier, generateState} from "arctic";

// import {z} from "zod";

// import {emailSignInSchema} from "@/lib/schemas/auth.schema";
import {lucia, validateRequest} from "../lib/lucia/auth";
import {google} from "../lib/lucia/oauth";

// export async function emailSignIn(values: z.infer<typeof emailSignInSchema>) {
//   try {
//   } catch (error) {}
// }

export async function createFacebookAuthURL() {
  try {
    console.log("okay");
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

    const authorizationURL = await google.createAuthorizationURL(state, codeVerifier, {
      scopes: ["email", "profile"],
    });

    return {success: true, data: authorizationURL};
  } catch (error: any) {
    return {error: error?.message ?? "An error occurred"};
  }
}

export async function signOut() {
  const result = await validateRequest();
  if (!result.session) return {error: "Unauthorized"};

  await lucia.invalidateSession(result.session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect("/sign-in");
}

// export async function logout() {
//   let session = '';
//   if (@session) return { error: "Unauthorized" }
//   await lucia.invalidateSession(session)

//   const sessionCookie = lucia.createBlankSessionCookie();
//   cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
//   return redirect("/sign-in")
// }

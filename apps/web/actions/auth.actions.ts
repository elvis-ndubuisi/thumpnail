"use server";
import {z} from "zod";
import {emailSignInSchema} from "@/lib/schemas/auth.schema";
import {google} from "@/lib/lucia-auth/oauth";
import {generateCodeVerifier, generateState} from "arctic";
import {cookies} from "next/headers";

export async function emailSignIn(values: z.infer<typeof emailSignInSchema>) {
  try {
  } catch (error) {}
}

export async function facebookSignup() {}

export async function createGoogleAuthURL() {
  try {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();

    cookies().set("codeVerifier", codeVerifier, {
      path: "/",
      httpOnly: true,
      // expires: 60 * 10,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    const authourizationURL = await google.createAuthorizationURL(
      state,
      codeVerifier,
      // {
      //   scopes: [],
      // },
    );

    return {success: true, data: authourizationURL};
  } catch (error: any) {
    return {error: error?.message ?? "An error occurred"};
  }
}

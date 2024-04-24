import {Facebook, Google} from "arctic";

export const google = new Google(
  process.env.GOOGLE_CLIENT_ID!,
  process.env.GOOGLE_CLIENT_SECRET!,
  process.env.NEXT_PUBLIC_APP_URL! + "/api/oauth/google",
);

// export const facebook = new Facebook(env.FACEBOOK_CLIENT_ID, env.FACEBOOK_CLIENT_SECRET, "")

// const state = generateState();
// const code
// const authourizationURL = await google.createAuthorizationURL(state);
// // const tokens = await google.validateAuthorizationCode(code);

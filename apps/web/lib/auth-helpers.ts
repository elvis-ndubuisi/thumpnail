import {createGoogleAuthURL} from "@/actions/auth.action";

export async function handleGoogleAuth() {
  const resp = await createGoogleAuthURL();
  if (resp.error) {
    console.error(resp.error);
  } else if (resp.success) {
    window.location.href = resp.data.toString();
  }
}

export async function handleFacebookAuth() {}

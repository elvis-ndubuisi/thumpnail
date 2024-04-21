import {Lucia} from "lucia";

const adapter = "";

export const lucia = new Lucia(adapter, {
  sessionCookie: {expires: false, attributes: {secure: false}},
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
  }
}

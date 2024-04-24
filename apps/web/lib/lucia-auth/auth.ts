import {PrismaAdapter} from "@lucia-auth/adapter-prisma";
import {Lucia} from "lucia";

import {db} from "../db";

const adapter = new PrismaAdapter(db.session, db.user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {expires: false, attributes: {secure: false}},
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
  }
}

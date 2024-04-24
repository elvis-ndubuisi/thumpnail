import {cache} from "react";
import {cookies} from "next/headers";
import {PrismaAdapter} from "@lucia-auth/adapter-prisma";
import {Lucia, Session, User} from "lucia";

import {db} from "../db";

const adapter = new PrismaAdapter(db.session, db.user);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {secure: process.env.NODE_ENV === "production"},
  },
  getUserAttributes(databaseUserAttributes) {
    return databaseUserAttributes;
  },
});

export const validateRequest = cache(
  async (): Promise<
    {user: User; session: Session} | {user: null; session: null}
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    console.error(sessionId);

    if (!sessionId) return {user: null, session: null};

    const result = await lucia.validateSession(sessionId);
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }

      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }
    } catch (error) {
      console.error(error);
    }
    return result;
  },
);

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
  }
}

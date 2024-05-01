import {sql} from "drizzle-orm";
import {integer, sqliteTable, text} from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").unique().notNull(),
});

// Connect Drizzle with libSQL
// import { drizzle } from "drizzle-orm/libsql";
// import { createClient } from "@libsql/client";

// const turso = createClient({
//   url: process.env.TURSO_DATABASE_URL!,
//   authToken: process.env.TURSO_AUTH_TOKEN,
// });

// export const db = drizzle(turso);

// Query
// import { db } from "./db";

// const result = await db.select().from(foo).all();

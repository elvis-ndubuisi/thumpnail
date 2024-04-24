"use server";

import {revalidatePath} from "next/cache";
import argon2 from "argon2";
import {z} from "zod";

import {db} from "@/lib/db";
import {generateKeys} from "@/lib/key";
import {validateRequest} from "@/lib/lucia-auth/auth";
import {createProjectSchema} from "@/lib/schemas/project.schema";

export async function createProject(data: z.infer<typeof createProjectSchema>) {
  try {
    const {user} = await validateRequest();
    if (!user) return {error: "Invalid request"};
    //   Generate a public and private key
    const {ID, PK} = generateKeys();
    const token = await argon2.hash(PK as string);
    // Send keys to hono
    const title = data.name.replace(" ", "_").trim().toLowerCase();
    // Send keys to worker database
    await db.project.create({
      data: {title, userId: user.id, key: ID as string, token},
    });

    return {ID, PK};
  } catch (error: any) {
    return {error: error?.message ?? error};
  }
  revalidatePath("/projects");
}

export async function deleteProject(id: string) {
  // Mark a proejct for deletion
  // Remove key from main database
  // Remove key from worker database
  // Send status
  try {
  } catch (error: any) {
    return {error: error?.message ?? error};
  }
  // Revalidate project
}

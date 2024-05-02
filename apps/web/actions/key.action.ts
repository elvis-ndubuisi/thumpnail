"use server";

import {revalidatePath} from "next/cache";
import generateApiKey from "generate-api-key";
import * as z from "zod";

import {db} from "@/lib/db";
import {validateRequest} from "@/lib/lucia/auth";
import {createProjectSchema} from "@/lib/schemas/project.schema";

export async function createApiKey(data: z.infer<typeof createProjectSchema>) {
  try {
    const key = generateApiKey({method: "uuidv4", prefix: "beta_app"});
    const {user} = await validateRequest();
    if (!user) return {error: "Access denied"};
    await db.project.create({
      data: {
        key: key as string,
        title: data.title.trim(),
        userId: user.id,
      },
    });
  } catch (error: any) {
    return {error: error?.message ?? error};
  }
  revalidatePath("/dashboard");
}

export async function deleteApiKey(keyId: string) {
  try {
    const {user} = await validateRequest();
    if (!user) return {error: "Access denied"};
    await db.project.delete({where: {id: keyId, userId: user.id}});
  } catch (error: any) {
    return {error: error?.message ?? error};
  }
  revalidatePath("/dashboard");
}

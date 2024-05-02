"use server";

import {revalidatePath} from "next/cache";

import {db} from "@/lib/db";
import {validateRequest} from "@/lib/lucia/auth";

export async function createApiKey() {
  const {user} = await validateRequest();
  if (!user) return {status: "error", message: "Access denied"};

  await db.project.create({
    data: {
      key: "",
      title: "",
      userId: user.id,
    },
  });
  revalidatePath("/dashbaord");
}

export async function deleteApiKey(keyId: string) {
  console.log(keyId);
}

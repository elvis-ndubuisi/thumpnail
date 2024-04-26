import {db} from "@/lib/db";

export async function storeKey(name: string, hashedKey: string, userId: string) {
  try {
    await db.project.create({
      data: {title: name, key: hashedKey, userId: userId, token: ""},
    });
  } catch (error: any) {
    return {error};
  }
}

"use server";

import {db} from "@/lib/db";

export async function createProject(data: FormData) {
  try {
    //   Generate a public and private key
    // Save keys to database along side other information
  } catch (error: any) {
    return {error: error?.message ?? error};
  }
}

export async function deleteProject(id: string) {
  // Mark a proejct for deletion
  try {
  } catch (error: any) {
    return {error: error?.message ?? error};
  }
}

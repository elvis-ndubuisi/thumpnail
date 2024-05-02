import * as z from "zod";

export const createProjectSchema = z.object({
  title: z
    .string({required_error: "Title is missing"})
    .min(8, "API Key title must exceed 8 characters")
    .max(80, "Key title must not exceed 80 characters")
    .trim(),
  // plan: z.string().trim().toLowerCase(),
});

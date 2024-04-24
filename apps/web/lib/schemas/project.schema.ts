import * as z from "zod";

export const createProjectSchema = z.object({
  name: z
    .string({required_error: "Name is missing"})
    .min(8, "Project name must exceed 8 characters")
    .trim(),
});

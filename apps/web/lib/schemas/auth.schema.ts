import * as z from "zod";

export const emailSignInSchema = z.object({
  email: z.string().email("A valid email is required"),
});

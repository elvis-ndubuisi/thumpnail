import * as z from "zod";

export const emailSignInSchema = z.object({
  email: z.string().email("A valid email is required"),
});
export type EmailSignInType = z.infer<typeof emailSignInSchema>;

export const emailSignUpSchema = z.object({
  name: z.string().min(3, "Name length is small"),
  email: z.string().email("A valid email is required"),
});
export type EmailSignUpType = z.infer<typeof emailSignUpSchema>;

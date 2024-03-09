import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: 'Email is required.' }),
    password: z.string().min(8, { message: 'Password should at least 8 chars.' }).max(50),
    remember: z.boolean().default(false).optional()
});

export const forgotPasswordSchema = z.object({
    email: z.string().email({message: 'Email address is required.'})
});

export const resetPasswordSchema = z.object({
    email: z.string().email({ message: 'Email is required.' }),
    password: z.string().min(8, { message: 'Password should at least 8 chars.' }).max(50),
    confirmPassword: z.string().min(8, { message: 'Confirm password should at least 8 chars.' }).max(50)
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
});

export type LoginFormSchemaType = z.infer<typeof loginSchema>;
export type ForgotPasswordFormSchemaType = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordFormSchemaType = z.infer<typeof resetPasswordSchema>
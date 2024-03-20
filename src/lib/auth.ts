import { z } from "zod";

// Sign in 
export const loginSchema = z.object({
    email: z.string().email({ message: 'Email is required.' }),
    password: z.string().min(8, { message: 'Password should at least 8 chars.' }).max(50),
    remember: z.boolean().default(false).optional()
});

// Forgot password
export const forgotPasswordSchema = z.object({
    email: z.string().email({message: 'Email address is required.'})
});

// Reset password
export const resetPasswordSchema = z.object({
    email: z.string().email({ message: 'Email is required.' }),
    password: z.string().min(8, { message: 'Password should at least 8 chars.' }).max(50),
    confirmPassword: z.string().min(8, { message: 'Confirm password should at least 8 chars.' }).max(50)
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
});

// Change password
export const changePasswordSchema = z.object({
    password: z.string().min(8, { message: 'Old password should at least 8 chars.' }).max(50),
    newPassword: z.string().min(8, { message: 'New password should at least 8 chars.' }).max(50),
    confirmPassword: z.string().min(8, { message: 'Confirm password should at least 8 chars.' }).max(50)
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
})

// My account
export const myAccountSchema = z.object({
    firstName: z.string().min(2, { message: 'First name should at least 2 chars.' }).max(20),
    lastName: z.string().min(2, { message: 'Last name should at least 2 chars.' }).max(20),
    displayName: z.string().min(3, { message: 'Display name should at least 8 chars.' }).max(20),
    mobileNumber: z.string().min(11, { message: 'Mobile number should at least 11 chars.' }).max(15),
    email: z.string().email({ message: 'Email is required.' }),
    dob: z.date({required_error: "A date of birth is required."})
})

export type LoginFormSchemaType = z.infer<typeof loginSchema>;
export type ForgotPasswordFormSchemaType = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordFormSchemaType = z.infer<typeof resetPasswordSchema>
export type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>
export type MyAccountSchemaType = z.infer<typeof myAccountSchema>
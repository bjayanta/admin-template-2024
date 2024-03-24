'use server';

import { forgotPasswordSchema, ForgotPasswordFormSchemaType } from "@/lib/schemas/auth";

export const forgotPasswordAction = async (values: ForgotPasswordFormSchemaType) => {
    const result = forgotPasswordSchema.safeParse(values);

    if (!result.success) return { success: false, error: 'Invalid fields.' }

    const { email } = result.data;

    try {
        // API request

        return { success: true, message: 'We have emailed your password reset link!' };
    } catch (error: unknown) {
        if (error instanceof Error) {
            return { message: error?.message };
        } else {
            return { message: 'Something went wrong.' };
        }
    }
}
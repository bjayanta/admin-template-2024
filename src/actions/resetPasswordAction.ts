'use server';

import { resetPasswordSchema, ResetPasswordFormSchemaType } from "@/lib/auth";

export const resetPasswordAction = async (values: ResetPasswordFormSchemaType) => {
    const result = resetPasswordSchema.safeParse(values);

    if (!result.success) return { success: false, error: 'Invalid fields.' }

    const { email } = result.data;

    try {
        // API request

        return { success: true, message: 'Password has been restored!' };
    } catch (error: unknown) {
        if (error instanceof Error) {
            return { message: error?.message };
        } else {
            return { message: 'Something went wrong.' };
        }
    }
}
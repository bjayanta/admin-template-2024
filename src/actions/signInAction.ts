'use server';

import { LoginFormSchemaType, loginSchema } from "@/lib/auth";

export const signInAction = async (values: LoginFormSchemaType) => {
    const result = loginSchema.safeParse(values);

    if (!result.success) return { success: false, error: 'Invalid fields.' }

    const { email, password } = result.data;

    try {
        // await signIn('credentials', {
        //     email,
        //     password,
        //     redirect: false,
        // });

        return { success: true, message: 'Sign in successfully.' };
    } catch (error: unknown) {
        // if (error instanceof AuthError) {
        //     switch (error.type) {
        //         case 'CredentialsSignin':
        //             return { error: 'Invalid credentials.' };
        //         default:
        //             return { error: 'Something went wrong..' };
        //     }
        // }

        if (error instanceof Error) {
            return { message: error?.message };
        } else {
            return { message: 'Something went wrong.' };
        }
    }
}
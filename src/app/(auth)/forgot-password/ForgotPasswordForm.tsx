'use client';

import { forgotPasswordAction } from '@/actions/forgotPasswordAction';
import { Button, buttonVariants } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { ForgotPasswordFormSchemaType, forgotPasswordSchema } from '@/lib/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link';
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

export default function ForgotPasswordForm() {
    const [isError, setIsError] = useState<string|undefined>('');
    const [isSuccess, setIsSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const form = useForm<ForgotPasswordFormSchemaType>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: ''
        },
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit = async (values: ForgotPasswordFormSchemaType) => {
        console.log(values);

        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            ),
        })

        try {
            startTransition(async () => {
                const res = await forgotPasswordAction(values);

                setIsError(res?.error);
      
                if (res.success) {
                    setIsSuccess(res?.message);
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <article className="mt-4 mb-10">
                <h2 className='font-semibold mb-2'>Forgot your password?</h2>
                <p>No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>
            </article>

            {/* Error */}
            {isError && <p className="text-red-500 my-2">{isError}</p>}

            {/* Success */}
            {isSuccess && (<p className="text-green-500 my-2">{isSuccess}</p>)}

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email address <span className='text-red-600'>*</span></FormLabel>
                                    <FormControl>
                                        <Input type='email' placeholder="awesome@company.com" { ...field } />
                                    </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col gap-4 py-2">
                        <Button type="submit" disabled={isSubmitting || isPending}>
                            {isSubmitting ? 'Submitting ...' : 'Submit'}
                        </Button>

                        <span className='text-center'>
                            Remember your account?
                            <Link
                                href="/signin"
                                className="ms-1 text-indigo-600 transition hover:underline"
                            >
                                Sign-in
                            </Link>
                        </span>
                    </div>
                </form>
            </Form>
        </div>
    )
}

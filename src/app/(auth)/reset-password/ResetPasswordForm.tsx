'use client';

import { resetPasswordAction } from '@/actions/resetPasswordAction';
import { Button, buttonVariants } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { ResetPasswordFormSchemaType, resetPasswordSchema } from '@/lib/schemas/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'

export default function ResetPasswordForm() {
    const router = useRouter();

    const [isError, setIsError] = useState<string|undefined>('');
    const [isSuccess, setIsSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);

    const form = useForm<ResetPasswordFormSchemaType>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit = async (values: ResetPasswordFormSchemaType) => {
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
                const res = await resetPasswordAction(values);

                setIsError(res?.error);
      
                if (res.success) {
                    setIsSuccess(res?.message);
                    // router.push('/signin');
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <article className="mt-4 mb-10">
                <h2 className='font-semibold mb-2'>Reset Password</h2>
                <p>Input your email to register reset new password.</p>
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

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password <span className='text-red-600'>*</span></FormLabel>
                                    <FormControl>
                                        <div className='relative'>
                                            {passwordIsVisible ? (
                                                <EyeIcon
                                                    role="button"
                                                    onClick={() => setPasswordIsVisible(false)}
                                                    className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-500 right-3"
                                                />
                                            ) : (
                                                <EyeOffIcon
                                                    role="button"
                                                    onClick={() => setPasswordIsVisible(true)}
                                                    className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-500 right-3"
                                                />
                                            )}

                                            <Input type={passwordIsVisible ? 'text' : 'password'} placeholder="********" { ...field } />
                                        </div>
                                    </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password <span className='text-red-600'>*</span></FormLabel>
                                    <FormControl>
                                        <Input type={passwordIsVisible ? 'text' : 'password'} placeholder="********" { ...field } />
                                    </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col gap-4 py-2">
                        <Button type="submit" disabled={isSubmitting || isPending}>
                            {isSubmitting ? 'Submitting ...' : 'Reset Password'}
                        </Button>

                        <span className='text-center'>
                            Already have an account?
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

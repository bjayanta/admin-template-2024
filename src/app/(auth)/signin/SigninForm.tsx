'use client';

import React, { useState, useTransition } from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginFormSchemaType, loginSchema } from '@/lib/auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { signInAction } from '@/actions/signInAction';
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from '@/components/ui/use-toast';


export default function SigninForm() {
    const router = useRouter();

    const [passwordIsVisible, setPasswordIsVisible] = useState(false);
    const [isError, setIsError] = useState<string|undefined>('');
    const [isSuccess, setIsSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const form = useForm<LoginFormSchemaType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            remember: false
        },
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit = async (values: LoginFormSchemaType) => {
        console.log(values);
        
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            ),
        })
        
        // try {
        //     startTransition(async () => {
        //         const res = await signInAction(values);
        //         setIsError(res?.error);
      
        //         if (res.success) {
        //             setIsSuccess(res?.message);
        //             router.push('/dashboard');
        //         }
        //     });
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <div>
            <article className="mt-4 mb-10">
                <h2 className='font-semibold'>Sign in your account.</h2>
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
                                <FormLabel>Email <span className='text-red-600'>*</span></FormLabel>
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
                        name="remember"
                        render={({ field }) => (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>

                                <FormLabel>Remember me</FormLabel>
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-col gap-4 py-2">
                        <Button type="submit" disabled={isSubmitting || isPending} className='w-full'>
                            {isSubmitting ? 'Signing in...' : 'Sign in'}
                        </Button>

                        <Link
                            href="/forgot-password"
                            className="ms-1 text-indigo-600 text-center transition hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>

                </form>
            </Form>
        </div>
    )
}

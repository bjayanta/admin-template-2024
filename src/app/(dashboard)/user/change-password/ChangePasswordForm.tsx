'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { ChangePasswordSchemaType, changePasswordSchema } from '@/lib/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form';

export default function ChangePasswordForm() {
    const [isError, setIsError] = useState<string|undefined>('');
    const [isSuccess, setIsSuccess] = useState<string | undefined>('');
    const [passwordIsVisible, setPasswordIsVisible] = useState(false);
    const [isPending, startTransition] = useTransition();

    const form = useForm<ChangePasswordSchemaType>({
        resolver: zodResolver(changePasswordSchema),
        defaultValues: {
            password: '',
            newPassword: '',
            confirmPassword: '',
        },
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit = async (values: ChangePasswordSchemaType) => {
        console.log(values);
        
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
        <Card className='col-span-2'>
            <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>
                    You have to submit old passkey and astatic marked fields are required.
                </CardDescription>
            </CardHeader>

            <CardContent>
                {/* Error */}
                {isError && <p className="text-red-500 my-2">{isError}</p>}

                {/* Success */}
                {isSuccess && (<p className="text-green-500 my-2">{isSuccess}</p>)}

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Old Password <span className='text-red-600'>*</span></FormLabel>

                                    <FormControl>
                                        <Input type='password' placeholder="********" { ...field } />
                                    </FormControl>

                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="newPassword"
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

                        <div className="flex flex-col justify-end gap-4 py-2 md:flex-row">
                            <Button type="reset" variant='outline' onClick={() => form.reset()}>Reset</Button>

                            <Button type="submit" disabled={isSubmitting || isPending}>
                                {isSubmitting ? 'Submitting ...' : 'Save changes'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

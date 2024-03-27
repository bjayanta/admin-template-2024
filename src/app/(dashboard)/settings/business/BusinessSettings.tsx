'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { BusinessFormSchemaType, businessSchema } from '@/lib/schemas/settings';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form';

export default function BusinessSettings() {
    const [isError, setIsError] = useState<string|undefined>('');
    const [isSuccess, setIsSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const form = useForm<BusinessFormSchemaType>({
        resolver: zodResolver(businessSchema),
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit = async (values: BusinessFormSchemaType) => {
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
        <Card>
            <CardHeader>
                <CardTitle>Business Settings</CardTitle>
                <CardDescription>
                    Astatic marked fields are required.
                </CardDescription>
            </CardHeader>

            <CardContent>
                {/* Error */}
                {isError && <p className="text-red-500 my-2">{isError}</p>}

                {/* Success */}
                {isSuccess && (<p className="text-green-500 my-2">{isSuccess}</p>)}

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            {/* Business name */}
                            <FormField
                                control={form.control}
                                name="businessName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Business name <span className='text-red-600'>*</span></FormLabel>

                                        <FormControl>
                                            <Input placeholder="CodeRill" { ...field } />
                                        </FormControl>

                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            {/* Owner name */}
                            <FormField
                                control={form.control}
                                name="ownerName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Owner{"'"}s name <span className='text-red-600'>*</span></FormLabel>

                                        <FormControl>
                                            <Input placeholder="Jayanta Biswas" { ...field } />
                                        </FormControl>

                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            {/* Tag line */}
                            <FormField
                                control={form.control}
                                name="tagLine"
                                render={({ field }) => (
                                    <FormItem className='col-span-2'>
                                        <FormLabel>Tag line</FormLabel>

                                        <FormControl>
                                            <Input placeholder="Maximum 50 chars." { ...field } />
                                        </FormControl>

                                        <FormDescription>
                                            Company motto, something motivational.
                                        </FormDescription>

                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            
                            {/* Email address */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email address <span className='text-red-600'>*</span></FormLabel>

                                        <FormControl>
                                            <Input type='email' placeholder="purpose@company.com" { ...field } />
                                        </FormControl>

                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            {/* Phone number */}
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone number <span className='text-red-600'>*</span></FormLabel>

                                        <FormControl>
                                            <Input placeholder="purpose@company.com" { ...field } />
                                        </FormControl>

                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            {/* Address */}
                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem className='col-span-2'>
                                        <FormLabel>Address <span className='text-red-600'>*</span></FormLabel>

                                        <FormControl>
                                            <Textarea placeholder="Full address" className="resize-none" { ...field }></Textarea>
                                        </FormControl>

                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Buttons */}
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

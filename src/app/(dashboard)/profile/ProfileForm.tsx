'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from '@/components/ui/use-toast';
import { MyAccountSchemaType, myAccountSchema } from '@/lib/schemas/auth';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarIcon } from 'lucide-react';
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form';
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"


export default function ProfileForm() {
    const fromYear = 1990;
    const toYear = format(new Date(), 'yyyy');

    const [isError, setIsError] = useState<string|undefined>('');
    const [isSuccess, setIsSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const form = useForm<MyAccountSchemaType>({
        resolver: zodResolver(myAccountSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            displayName: '',
            mobileNumber: '',
            email: '',
            // dob: new Date(),
            dob: undefined
        },
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit = async (values: MyAccountSchemaType) => {
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
                        <div className='grid grid-cols-2 gap-6'>
                            {/* First name */}
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First name <span className='text-red-600'>*</span></FormLabel>

                                        <FormControl>
                                            <Input placeholder="Jayanta" { ...field } />
                                        </FormControl>

                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            {/* Last name */}
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last name <span className='text-red-600'>*</span></FormLabel>

                                        <FormControl>
                                            <Input placeholder="Biswas" { ...field } />
                                        </FormControl>

                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            {/* Display name */}
                            <div className='col-span-2'>
                                <FormField
                                    control={form.control}
                                    name="displayName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Display name <span className='text-red-600'>*</span></FormLabel>

                                            <FormControl>
                                                <Input placeholder="Neo" { ...field } />
                                            </FormControl>

                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Mobile number */}
                            <FormField
                                control={form.control}
                                name="mobileNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Mobile number <span className='text-red-600'>*</span></FormLabel>

                                        <FormControl>
                                            <Input placeholder="+88 XXX XXXXXX" { ...field } />
                                        </FormControl>

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
                                            <Input placeholder="jayanta@gmail.com" { ...field } />
                                        </FormControl>

                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />

                            {/* Date of birth */}
                            <FormField
                                control={form.control}
                                name="dob"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date of birth <span className='text-red-600'>*</span></FormLabel>

                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                                                    >
                                                        {field.value ? (format(field.value, "PPP")) : (<span>Pick a date</span>)}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>

                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    initialFocus
                                                    mode="single"
                                                    captionLayout="dropdown-buttons" // Also: dropdown | buttons
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date: any) => date > new Date() || date < new Date("1900-01-01")}
                                                    fromYear={fromYear}
                                                    toYear={Number(toYear)}
                                                />
                                            </PopoverContent>
                                        </Popover>

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

'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { InvoiceFormSchemaType, invoiceSchema } from '@/lib/schemas/settings';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form';

export default function InvoiceSettings() {
    const [isError, setIsError] = useState<string|undefined>('');
    const [isSuccess, setIsSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const form = useForm<InvoiceFormSchemaType>({
        resolver: zodResolver(invoiceSchema),
        defaultValues: {
            vat: 0,
            hasThermalPrinter: "0",
            willSmsSendAutomatically: "1",
            isDueAcceptable: "1",
            note: ""
        }
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit = async (values: InvoiceFormSchemaType) => {
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
                <CardTitle>Invoice Settings</CardTitle>
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
                            {/* VAT */}
                            <FormField
                                control={form.control}
                                name="vat"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Value-added tax (VAT) <span className='text-red-600'>*</span></FormLabel>

                                        <FormControl>
                                            <Input 
                                                type='number' 
                                                placeholder="0.00 %" 
                                                { ...field } 
                                                onChange={event => field.onChange(+event.target.value)}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className='col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                                {/* Has Thermal Printer */}
                                <FormField
                                    control={form.control}
                                    name="hasThermalPrinter"
                                    render={({ field } : { field: any }) => (
                                        <FormItem>
                                            <FormLabel>Has thermal printer? <span className='text-red-600'>*</span></FormLabel>

                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="1" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">YES</FormLabel>
                                                    </FormItem>

                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="0" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">NO</FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Will sms send automatically? */}
                                <FormField
                                    control={form.control}
                                    name="willSmsSendAutomatically"
                                    render={({ field } : { field: any }) => (
                                        <FormItem>
                                            <FormLabel>Will SMS send automatically? <span className='text-red-600'>*</span></FormLabel>

                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="1" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">YES</FormLabel>
                                                    </FormItem>

                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="0" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">NO</FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Is due acceptable? */}
                                <FormField
                                    control={form.control}
                                    name="isDueAcceptable"
                                    render={({ field } : { field: any }) => (
                                        <FormItem>
                                            <FormLabel>Is due acceptable? <span className='text-red-600'>*</span></FormLabel>

                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex flex-col space-y-1"
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="1" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">YES</FormLabel>
                                                    </FormItem>

                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="0" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">NO</FormLabel>
                                                    </FormItem>
                                                </RadioGroup>
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Note */}
                            <FormField
                                control={form.control}
                                name="note"
                                render={({ field }) => (
                                    <FormItem className='col-span-2'>
                                        <FormLabel>Policy note</FormLabel>

                                        <FormControl>
                                            <Textarea placeholder="Maximum 200 chars." className="resize-none" { ...field }></Textarea>
                                        </FormControl>

                                        <FormDescription>
                                            You can add greeting, some rules and return policy note also.
                                        </FormDescription>

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

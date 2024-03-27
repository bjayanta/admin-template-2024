'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { BasicFormSchemaType, basicSchema } from '@/lib/schemas/settings';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown, Languages } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import Link from 'next/link';


const languages = [
    { label: "English", value: "en" },
    { label: "Bangla", value: "bd" }
] as const

const currencies = [
    {code: "USD", name: "United State Dollar", symbol: "$"},
    {code: "BDT", name: "Bangladeshi Taka", symbol: "৳"}
] as const

export default function BasicSettings({ countries } : {countries: any}) {
    const [isError, setIsError] = useState<string|undefined>('');
    const [isSuccess, setIsSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const form = useForm<BasicFormSchemaType>({
        resolver: zodResolver(basicSchema),
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit = async (values: BasicFormSchemaType) => {
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
                <CardTitle>Basic Settings</CardTitle>
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
                        {/* Country */}
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Country <span className='text-red-600'>*</span></FormLabel>

                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "w-full justify-between",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value
                                                    ? countries.find(
                                                        (country: any) => country.name === field.value
                                                    )?.name
                                                    : "Select Country"}

                                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>

                                        <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                                            <Command>
                                                <CommandInput placeholder="Search language..." />

                                                <CommandList>
                                                    <CommandEmpty>No country found.</CommandEmpty>

                                                    <CommandGroup>
                                                        {countries && countries.map((country: any, index: number) => (
                                                            <CommandItem
                                                                value={country.name}
                                                                key={index}
                                                                onSelect={() => {
                                                                    form.setValue("country", country.name)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4", 
                                                                        country.name === field.value ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />

                                                                {country.name}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                            {/* Language */}
                            <FormField
                                control={form.control}
                                name="language"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Language <span className='text-red-600'>*</span></FormLabel>

                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a language" />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                {languages.map((language: any, index: number) => (
                                                    <SelectItem value={language.value} key={index}>{ language.label }</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>

                                        <FormDescription>
                                            You can manage email addresses in your{" "}
                                            <Link href="/home">email settings</Link>.
                                        </FormDescription>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Currencies */}
                            <FormField
                                control={form.control}
                                name="currency"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Currency <span className='text-red-600'>*</span></FormLabel>

                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a currency" />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                {currencies.map((currency: any, index: number) => (
                                                    <SelectItem value={currency.code} key={index}>
                                                        { currency.name } {' '}
                                                        (<span className='text-primary font-semibold'>{ currency.symbol }</span>)
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* SMS API */}
                            <FormField
                                control={form.control}
                                name="defaultSmsApi"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>SMS API <span className='text-red-600'>*</span></FormLabel>

                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select SMS API" />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                <SelectItem value='1'>SMS API 1</SelectItem>
                                                <SelectItem value='2'>SMS API 2</SelectItem>
                                                <SelectItem value='3'>SMS API 3</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Email address */}
                            <FormField
                                control={form.control}
                                name="defaultEmail"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Email address <span className='text-red-600'>*</span></FormLabel>

                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select email address" />
                                                </SelectTrigger>
                                            </FormControl>

                                            <SelectContent>
                                                <SelectItem value='sales@business.com'>sales@business.com</SelectItem>
                                                <SelectItem value='no-reply@business.com'>no-reply@business.com</SelectItem>
                                                <SelectItem value='query@business.com'>query@business.com</SelectItem>
                                                <SelectItem value='hello@business.com'>hello@business.com</SelectItem>
                                                <SelectItem value='career@business.com'>career@business.com</SelectItem>
                                            </SelectContent>
                                        </Select>

                                        <FormMessage />
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

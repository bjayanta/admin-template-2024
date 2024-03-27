'use client'

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from '@/components/ui/use-toast';
import { PrivacyPolicyFormSchemaType, privacyPolicySchema } from '@/lib/schemas/settings';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Popover } from '@radix-ui/react-popover';
import { Check, ChevronsUpDown } from 'lucide-react';
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from '@/components/ui/checkbox';


const roles = [
    { id: "1", label: "Administrator", slug: "administrator" },
    { id: "2", label: "Manager", slug: "manager" },
    { id: "3", label: "Salesman", slug: "salesman" },
    { id: "4", label: "Agent", slug: "agent" },
    { id: "5", label: "Operator", slug: "operator" },
] as const

const permissions = [
    {
        group: "User",
        menu: [
            {id: "1", label: "Create",},
            {id: "2", label: "View all",},
            {id: "3", label: "Details",},
            {id: "4", label: "Update",},
            {id: "5", label: "Delete",},
        ]
    },
    {
        group: "Role",
        menu: [
            {id: "6", label: "Create",},
            {id: "7", label: "View all",},
            {id: "8", label: "Details",},
            {id: "9", label: "Update",},
            {id: "10", label: "Delete",},
        ]
    },
] as const

export default function PolicySettings() {
    const [isError, setIsError] = useState<string|undefined>('');
    const [isSuccess, setIsSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();

    const form = useForm<PrivacyPolicyFormSchemaType>({
        resolver: zodResolver(privacyPolicySchema),
        defaultValues: {
            permissions: []
        }
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit = async (values: PrivacyPolicyFormSchemaType) => {
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
                <CardTitle>Privacy Policy Settings</CardTitle>
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
                        {/* Role */}
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Select Role <span className='text-red-600'>*</span></FormLabel>

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
                                                    ? roles.find(
                                                        (role: any) => role.slug === field.value
                                                    )?.label
                                                    : "Select Role"}

                                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>

                                        <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                                            <Command>
                                                <CommandInput placeholder="Search role..." />

                                                <CommandList>
                                                    <CommandEmpty>No role found.</CommandEmpty>

                                                    <CommandGroup>
                                                        {roles && roles.map((role: any, index: number) => (
                                                            <CommandItem
                                                                value={role.slug}
                                                                key={index}
                                                                onSelect={() => {
                                                                    form.setValue("role", role.slug)
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4", 
                                                                        role.slug === field.value ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />

                                                                {role.label}
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

                        {/* Permissions */}
                        <div>
                            <h2>Include Permissions <span className='text-red-600'>*</span></h2>

                            <Table>
                                <TableCaption>A list of permissions.</TableCaption>

                                <TableHeader>
                                    <TableRow>
                                        <TableHead className='w-48'>Group</TableHead>
                                        <TableHead>Permissions</TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {permissions && permissions.map((permission: any, index: number) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{ permission.group }</TableCell>
                                            <TableCell>
                                                <FormField
                                                    control={form.control}
                                                    name="permissions"
                                                    render={() => (
                                                        <FormItem className='flex items-center space-x-6'>
                                                            {permission && permission.menu.map((menu: any, key: number) => (
                                                                <FormField
                                                                    key={menu.id}
                                                                    control={form.control}
                                                                    name="permissions"
                                                                    render={({ field }) => (
                                                                        <FormItem
                                                                            key={menu.id}
                                                                            className="flex flex-row items-center space-x-2 space-y-0"
                                                                        >
                                                                            <FormControl>
                                                                                <Checkbox
                                                                                    checked={field.value?.includes(menu.id)}
                                                                                    onCheckedChange={(checked) => {
                                                                                    return checked
                                                                                        ? field.onChange([...field.value, menu.id])
                                                                                        : field.onChange(
                                                                                            field.value?.filter((value) => value !== menu.id)
                                                                                        )
                                                                                    }}
                                                                                />
                                                                            </FormControl>

                                                                            <FormLabel className="font-normal">
                                                                                { menu.label }
                                                                            </FormLabel>
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                            ))}

                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
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

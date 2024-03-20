'use client'

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { ImageUploadSchemaType, imageUploadSchemaType } from '@/lib/picture';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function UploadAvatar() {
    const [selectedImage, setSelectedImage] = useState<any>();

    const form = useForm<ImageUploadSchemaType>({
        resolver: zodResolver(imageUploadSchemaType),
    });

    const {
        formState: { isSubmitting },
    } = form;

    const pictureRef = form.register("picture");

    const onSubmit = async (values: ImageUploadSchemaType) => {
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
                <CardTitle>Upload new avatar</CardTitle>
                <CardDescription>
                    Only *.jpg, *.jpeg, *.png and *.webp formats are supported.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)} 
                        className='flex items-start justify-between'
                    >
                        <div>
                            <FormField
                                control={form.control}
                                name="picture"
                                render={({ field }) => {
                                    return (
                                    <FormItem>
                                        <FormLabel>Select Image <span className='text-red-600'>*</span></FormLabel>
                                        <FormControl>
                                            <Input 
                                                type="file" 
                                                { ...pictureRef } 
                                                onChange={(e: any) => {
                                                    pictureRef.onChange(e);
                                                    setSelectedImage(e.target.files[0])
                                                }} 
                                            />
                                        </FormControl>

                                        <FormDescription>If you do not select a photo one will be generated.</FormDescription>

                                        <FormMessage />
                                    </FormItem>
                                    );
                                }}
                            />

                            <Button type="submit" className='mt-6'>Submit</Button>
                        </div>
                        
                        <figure>
                            {selectedImage ? (
                                <Image 
                                    src={URL.createObjectURL(selectedImage)} 
                                    width={128} 
                                    height={128} 
                                    alt="Selected picture" 
                                    className='rounded'
                                />
                            ) : (
                                <ImageIcon size={128} strokeWidth={0.5} className='text-slate-400 rounded' />
                            )}
                        </figure>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}

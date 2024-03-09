import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'
import SigninForm from '@/app/(auth)/signin/SigninForm';
import AuthCarousel from '@/app/(auth)/_components/AuthCarousel';

export const metadata: Metadata = {
    title: "Signin"
};

export default function page() {
    return (
        <section>
            <div className="grid grid-flow-row lg:grid-cols-12">
                <div className='bg-white flex justify-center items-center h-screen lg:col-span-5 border'>
                    <div className='w-full px-16 lg:px-0 lg:w-1/2'>
                        {/* Image */}
                        <figure>
                            <Image src='/logo.svg' width={256} height={48} alt='Company Logo' />
                            <figcaption></figcaption>
                        </figure>

                        {/* Form */}
                        <SigninForm />
                    </div>
                </div>

                <div className='hidden lg:block lg:col-span-7'>
                    <AuthCarousel />
                </div>
            </div>
        </section>
    )
}

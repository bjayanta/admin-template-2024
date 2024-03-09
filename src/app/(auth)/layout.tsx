import { Metadata } from 'next';
import React from "react";

export const metadata: Metadata = {
    title: {
        template: '%s | Auth',
        default: 'Auth',
    }
};

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="min-h-screen">
            {children}
        </div>
    )
}

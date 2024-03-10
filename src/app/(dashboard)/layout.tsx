import Sidebar from '@/components/common/Sidebar';
import Wrapper from '@/components/common/Wrapper';
import { Metadata } from 'next';
import React from "react";

export const metadata: Metadata = {
    title: {
        template: '%s | Admin Panel',
        default: 'Admin Panel',
    }
};

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div className="flex bg-slate-100 min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main container */}
            <Wrapper>{ children }</Wrapper>
        </div>
    )
}

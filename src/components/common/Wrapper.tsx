'use client'

import { cn } from '@/lib/utils';
import React from 'react'
import { AppDispatch, useAppSelector } from '@/lib/store';
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/lib/features/settings/settingsSlice";
import Header from '@/components/common/Header';
import { CommandDialogBar } from '@/components/common/CommandDialogBar';

export default function Wrapper({children}: Readonly<{children: React.ReactNode}>) {
    const dispatch = useDispatch<AppDispatch>()
    const sidebarIsOpen = useAppSelector((state) => state.settingsReduser.values.isSidebarOpen);

    return (
        <main className={cn('flex-1 ml-6 relative', sidebarIsOpen ? 'lg:ml-72' : 'ml-6')}>
            {/* Header */}
            <Header />
            
            { children }

            {/* Overlay */}
            {sidebarIsOpen ? (
                <div 
                    className='w-full h-screen fixed top-0 left-0 bg-white/30 backdrop-blur lg:w-0 lg:h-0'
                    onClick={() => dispatch(toggleSidebar())}
                ></div>
            ) : ''}

            <CommandDialogBar />
        </main>
    )
}

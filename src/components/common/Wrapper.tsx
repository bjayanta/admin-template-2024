'use client'

import { cn } from '@/lib/utils';
import React from 'react'
import { useAppSelector } from '@/lib/store';

export default function Wrapper({children}: Readonly<{children: React.ReactNode}>) {
    const sidebarIsOpen = useAppSelector((state) => state.settingsReduser.values.isSidebarOpen);

    return (
        <main className={cn('flex-1', sidebarIsOpen ? 'ml-72' : 'ml-8')}>
            { children }
        </main>
    )
}

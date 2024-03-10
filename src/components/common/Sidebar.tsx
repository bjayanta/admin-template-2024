'use client'

import React from 'react'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { toggleSidebar } from "@/lib/features/settings/settingsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from '@/lib/store';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link';
  

export default function Sidebar() {
    const dispatch = useDispatch<AppDispatch>()
    const sidebarIsOpen = useAppSelector((state) => state.settingsReduser.values.isSidebarOpen);

    return (
        <aside className={cn(
            'w-72 bg-white h-screen fixed top-0 left-0 z-20 px-6 pb-10 transition transform',
            sidebarIsOpen ? 'translate-x-0' : '-translate-x-64'
        )}>
            <Button
                size="icon"
                className='rounded-full absolute -right-5 top-20'
                onClick={() => dispatch(toggleSidebar())}
            >
                {sidebarIsOpen ? <ChevronLeft /> : <ChevronRight /> }
            </Button>

            {/* Brand */}
            <header className="mb-4">
                <h2 className="text-lg font-medium py-2">Company name</h2>
            </header>

            <Accordion type="single" collapsible>
                <Link href='/' className='block'>Menu 1</Link>

                <AccordionItem value="item-1" className='border-0'>
                    <AccordionTrigger className='py-2 hover:no-underline hover:text-primary'>
                        Menu 2
                    </AccordionTrigger>

                    <AccordionContent className='px-2 space-y-2'>
                        <Link href='/' className='block'>Submenu 1</Link>
                        <Link href='/' className='block'>Submenu 2</Link>
                        <Link href='/' className='block'>Submenu 3</Link>
                        <Link href='/' className='block'>Submenu 4</Link>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className='border-0'>
                    <AccordionTrigger className='p-0'>Menu 3</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <h2>Sidebar</h2>
        </aside>
    )
}

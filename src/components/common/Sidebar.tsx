'use client'

import React from 'react'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { toggleSidebar } from "@/lib/features/settings/settingsSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from '@/lib/store';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from 'next/link';
import { 
    Bomb, 
    BookOpenCheck, 
    Camera, 
    ChevronLeft, 
    ChevronRight, 
    Component, 
    FileEdit, 
    Fingerprint, 
    GaugeCircle, 
    LayoutList, 
    MessageCircle, 
    Newspaper, 
    Settings, 
    ShoppingBag, 
    Table, 
    Users 
} from 'lucide-react';
  

export default function Sidebar() {
    const dispatch = useDispatch<AppDispatch>()
    const sidebarIsOpen = useAppSelector((state) => state.settingsReduser.values.isSidebarOpen);

    return (
        <aside className={cn(
            'w-72 bg-white h-screen fixed top-0 left-0 z-20 bg-scroll transition transform border-r',
            sidebarIsOpen ? 'translate-x-0' : '-translate-x-64 -ms-2'
        )}>
            <Button
                size="icon"
                className='rounded-full absolute -right-5 bottom-36 z-50'
                onClick={() => dispatch(toggleSidebar())}
            >
                {sidebarIsOpen ? <ChevronLeft /> : <ChevronRight /> }
            </Button>

            {/* Brand */}
            <header className="px-6 mb-4">
                <h2 className="text-xl font-bold uppercase text-gray-800 py-2">Company name</h2>
            </header>

            <div className='px-6 max-h-[calc(100vh-100px)] overflow-y-auto scrollbar'>
                {/* General */}
                <nav className='mb-6'>
                    <h2 className='text-xs font-semibold uppercase tracking-wider mb-4'>General</h2>

                    <div className='flex flex-col space-y-2 text-gray-800'>
                        <Link href='/home' className='flex items-center space-x-2 hover:text-primary'>
                            <GaugeCircle size={20} />
                            <span>Dashboard</span>
                        </Link>

                        <Link href='/home' className='flex items-center space-x-2 hover:text-primary'>
                            <Camera size={20} />
                            <span>Media</span>
                        </Link>
                    </div>
                </nav>

                {/* Apps */}
                <nav className='mb-6'>
                    <h2 className='text-xs font-semibold uppercase tracking-wider mb-4'>Apps</h2>

                    <div className='flex flex-col space-y-2 text-gray-800'>
                        <Link href='/home' className='flex items-center space-x-2 hover:text-primary'>
                            <LayoutList size={20} />
                            <span>Todo Manager</span>
                        </Link>

                        <Link href='/home' className='flex items-center space-x-2 hover:text-primary'>
                            <MessageCircle size={20} />
                            <span>SMS Manager</span>
                        </Link>

                        <Link href='/home' className='flex items-center space-x-2 hover:text-primary'>
                            <Newspaper size={20} />
                            <span>CMS</span>
                        </Link>

                        <Link href='/home' className='flex items-center space-x-2 hover:text-primary'>
                            <ShoppingBag size={20} />
                            <span>E-Commerce</span>
                        </Link>
                    </div>
                </nav>

                {/* Examples */}
                <nav className='mb-6'>
                    <h2 className='text-xs font-semibold uppercase tracking-wider mb-4'>Examples</h2>

                    <div className='flex flex-col space-y-2 text-gray-800'>
                        <Link href='/home' className='flex items-center space-x-2 hover:text-primary'>
                            <Table size={20} />
                            <span>Tables</span>
                        </Link>

                        <Link href='/home' className='flex items-center space-x-2 hover:text-primary'>
                            <FileEdit size={20} />
                            <span>Forms</span>
                        </Link>

                        <Accordion type="single" collapsible className='space-y-2'>
                            <AccordionItem value="components" className='border-0'>
                                <AccordionTrigger className='py-0 font-normal hover:no-underline hover:text-primary'>
                                    <span className='flex items-center space-x-2'>
                                        <Component size={18} />
                                        <span>Components</span>
                                    </span>
                                </AccordionTrigger>

                                <AccordionContent className='flex flex-col px-6 space-y-2'>
                                    <Link href='/home' className='mt-2 hover:text-primary'>Accordion</Link>
                                    <Link href='/home' className='hover:text-primary'>Alert</Link>
                                    <Link href='/home' className='hover:text-primary'>Buttons</Link>
                                    <Link href='/home' className='hover:text-primary'>Cards</Link>
                                    <Link href='/home' className='hover:text-primary'>Dropdown</Link>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="pages" className='border-0'>
                                <AccordionTrigger className='py-0 font-normal hover:no-underline hover:text-primary'>
                                    <span className='flex items-center space-x-2'>
                                        <BookOpenCheck size={18} />
                                        <span>Pages</span>
                                    </span>
                                </AccordionTrigger>

                                <AccordionContent className='flex flex-col px-6 space-y-2'>
                                    <Link href='/home' className='mt-2 hover:text-primary'>Sign-in</Link>
                                    <Link href='/home' className='hover:text-primary'>Sign-up</Link>
                                    <Link href='/home' className='hover:text-primary'>Pricing</Link>
                                    <Link href='/home' className='hover:text-primary'>FAQ</Link>
                                    <Link href='/home' className='hover:text-primary'>Support</Link>
                                    <Link href='/home' className='hover:text-primary'>Change log</Link>
                                    <Link href='/home' className='hover:text-primary'>License</Link>
                                    <Link href='/home' className='hover:text-primary'>Copyright</Link>
                                    <Link href='/home' className='hover:text-primary'>Under construction</Link>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="errors" className='border-0'>
                                <AccordionTrigger className='py-0 font-normal hover:no-underline hover:text-primary'>
                                    <span className='flex items-center space-x-2'>
                                        <Bomb size={18} />
                                        <span>Errors</span>
                                    </span>
                                </AccordionTrigger>

                                <AccordionContent className='flex flex-col px-6 space-y-2'>
                                    <Link href='/home' className='mt-2 hover:text-primary'>404 Not found</Link>
                                    <Link href='/home' className='hover:text-primary'>500 Server error</Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </nav>

                {/* Company */}
                <nav className='mb-6'>
                    <h2 className='text-xs font-semibold uppercase tracking-wider mb-4'>Company</h2>

                    <div className='flex flex-col space-y-2 text-gray-800'>
                        <Link href='/home' className='flex items-center space-x-2 hover:text-primary'>
                            <Users size={20} />
                            <span>Users</span>
                        </Link>

                        <Accordion type="single" collapsible className='space-y-2'>
                            <AccordionItem value="authorizations" className='border-0'>
                                <AccordionTrigger className='py-0 font-normal hover:no-underline hover:text-primary'>
                                    <span className='flex items-center space-x-2'>
                                        <Fingerprint size={18} />
                                        <span>Authorizations</span>
                                    </span>
                                </AccordionTrigger>

                                <AccordionContent className='flex flex-col px-6 space-y-2'>
                                    <Link href='/home' className='mt-2 hover:text-primary'>Permissions</Link>
                                    <Link href='/home' className='hover:text-primary'>Roles</Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Link href='/settings' className='flex items-center space-x-2 hover:text-primary'>
                            <Settings size={20} />
                            <span>Settings & Privacy</span>
                        </Link>
                    </div>
                </nav>
            </div>

        </aside>
    )
}

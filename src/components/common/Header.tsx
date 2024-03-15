'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { 
    Bell, 
    Bolt, 
    BookUser, 
    Fingerprint, 
    HelpCircle, 
    LayoutGrid, 
    LogOut, 
    Menu, 
    MessageSquareShare, 
    Notebook,
    Search,
    UserCircle, 
    UsersRound 
} from 'lucide-react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from '@/lib/utils'

export default function Header() {
    const [isMenubarOpen, setIsMenubarOpen] = useState<boolean>(false)

    const [notifications, setNotifications] = useState<any>([
        {text: "This is a notification.", date: "02-01-2015", read: true},
        {text: "This is another notification.", date: "02-01-2015", read: false},
        {text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", date: "02-01-2015", read: false}
    ]);

    return (
        <nav className='sticky top-0 border-b'>
            <div className='flex justify-between gap-2 px-4 py-3 bg-slate-100'>
                <div className='max-w-2xl w-full'>
                    <form className='relative'>
                        <Search className='absolute top-0 bottom-0 left-3 my-auto text-gray-500' size={20} />
                        <Input className='rounded-lg ps-10' placeholder='Type a command or search ...' />
                    </form>
                </div>

                {/* Account */}
                <div>
                    <Button 
                        variant='outline' 
                        size='icon' 
                        className={cn('hover:text-primary md:hidden', isMenubarOpen ? 'text-primary': '')}
                        onClick={() => setIsMenubarOpen(!isMenubarOpen)}
                    >
                        <Menu size={20} />
                    </Button>

                    <div className='hidden md:flex items-center gap-2'>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant='outline' size='icon'>
                                    <LayoutGrid size={20} />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align='end'>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant='outline' size='icon' className='relative'>
                                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${notifications.find((x: any) => x.read === false) ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
                                    <Bell size={20} />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent align='end' className='max-w-80'>
                                {notifications.map((notification: any, key: number) => (
                                    <DropdownMenuItem key={key} className='px-3 py-2 flex items-start gap-2'>
                                        <div className={`w-3 h-3 rounded-full my-1 ${!notification.read ? 'bg-green-500' : 'bg-neutral-200'}`}></div>
                                        <div>
                                            <p>{notification.text}</p>
                                            <p>{notification.date}</p>
                                        </div>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant='outline' size='icon'>
                                    <UserCircle size={20} />
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className='w-64' align='end'>
                                <DropdownMenuLabel>
                                    <div className='flex gap-2'>
                                        <figure>
                                            <Image src="/avatar.jpg" alt="Avatar" width={48} height={48} className='rounded' />
                                        </figure>
                                        
                                        <div>
                                            <h2>Jayanta Biswas</h2>
                                            <p className='font-normal text-primary'>Administrator</p>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <Link href='/home' className='flex items-center space-x-2'>
                                        <BookUser size={20} />
                                        <span>My Account</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Link href='/' className='flex items-center space-x-2'>
                                        <Fingerprint size={20} />
                                        <span>Chage Password</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Link href='/' className='flex items-center space-x-2'>
                                        <UsersRound size={20} />
                                        <span>User Manager</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Link href='/signin' className='flex items-center space-x-2'>
                                        <LogOut size={20} />
                                        <span>Sign Out</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <Link href='/' className='flex items-center space-x-2'>
                                        <Bolt size={20} />
                                        <span>Settings & Privacy</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem>
                                    <Link href='/' className='flex items-center space-x-2'>
                                        <Notebook size={20} />
                                        <span>About</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Link href='/' className='flex items-center space-x-2'>
                                        <HelpCircle size={20} />
                                        <span>Help</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Link href='/' className='flex items-center space-x-2'>
                                        <MessageSquareShare size={20} />
                                        <span>Send Feedback</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>

            <div 
                className={cn(
                    'fixed left-6 right-0 border-b transition transform -z-50 md:hidden', 
                    isMenubarOpen ? 'translate-y-0' : '-mt-12 -translate-y-full'
                )}
            >
                <div className='bg-slate-100 px-4 pb-4'>
                    <Accordion type="single" collapsible className='w-full space-y-1'>
                        <AccordionItem value="services" className='px-4 bg-white rounded-lg'>
                            <AccordionTrigger className='py-3 hover:no-underline hover:text-primary'>
                                <span className='flex items-center space-x-2'>
                                    <LayoutGrid size={20} />
                                    <span>Services</span>
                                </span>
                            </AccordionTrigger>

                            <AccordionContent className='flex flex-col gap-3 pt-2 px-8'>
                                <Link href='/home' className='hover:text-primary'>My Account</Link>
                                <Link href='/home' className='hover:text-primary'>Profile</Link>
                                <Link href='/home' className='hover:text-primary'>Billing</Link>
                                <Link href='/home' className='hover:text-primary'>Team</Link>
                                <Link href='/home' className='hover:text-primary'>Subscription</Link>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="notifications" className='px-4 bg-white rounded-lg'>
                            <AccordionTrigger className='py-3 hover:no-underline hover:text-primary'>
                                <span className='flex items-center space-x-2'>
                                    <Bell size={20} />
                                    <span>Notifications</span>
                                </span>
                            </AccordionTrigger>

                            <AccordionContent>
                                {notifications.map((notification: any, key: number) => (
                                    <Link 
                                        href='/home' 
                                        key={key} 
                                        className='px-6 py-2 flex items-start gap-2 hover:bg-neutral-100'
                                    >
                                        <div 
                                            className={`w-3 h-3 rounded-full my-1 
                                            ${!notification.read ? 'bg-green-500' : 'bg-neutral-200'}`}
                                        ></div>

                                        <div>
                                            <p>{notification.text}</p>
                                            <p>{notification.date}</p>
                                        </div>
                                    </Link>
                                ))}
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="account" className='px-4 bg-white rounded-lg'>
                            <AccordionTrigger className='py-3 hover:no-underline hover:text-primary'>
                                <span className='flex items-center space-x-2'>
                                    <UserCircle size={20} />
                                    <span>Jayanta Biswas</span>
                                </span>
                            </AccordionTrigger>

                            <AccordionContent className='flex flex-col gap-3 pt-2 px-8'>
                                <Link href='/home' className='hover:text-primary'>My Account</Link>
                                <Link href='/home' className='hover:text-primary'>Chage Password</Link>
                                <Link href='/home' className='hover:text-primary'>User Manager</Link>
                                <Link href='/home' className='hover:text-primary'>Sign Out</Link>
                                <hr className="border-t bg-neutral-200 dark:bg-white/10" />
                                <Link href='/home' className='hover:text-primary'>Settings & Privacy</Link>
                                <hr className="border-t bg-neutral-200 dark:bg-white/10" />
                                <Link href='/home' className='hover:text-primary'>About</Link>
                                <Link href='/home' className='hover:text-primary'>Help</Link>
                                <Link href='/home' className='hover:text-primary'>Send Feedback</Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Link 
                        href='/signin' 
                        className='inline-flex items-center w-full px-4 py-3 font-medium bg-white rounded-lg mt-1 space-x-2 hover:text-primary'
                    >
                        <LogOut size={20} />
                        <span>Sign Out</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

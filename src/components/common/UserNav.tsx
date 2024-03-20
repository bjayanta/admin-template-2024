import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Bell, BookUser, Box, Fingerprint, ImageUp, Layers, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function UserNav({ thePage }: {thePage: string}) {
    return (
        <Card>
            <CardHeader>
                <div className='flex items-start gap-4'>
                    <figure>
                        <Image src="/avatar.jpg" alt="Avatar" width={56} height={56} className='rounded' />
                    </figure>

                    <div>
                        <CardTitle>Jayanta biswas</CardTitle>
                        <CardDescription>Administrator</CardDescription>
                    </div>
                </div>
            </CardHeader>

            <CardContent className='flex flex-col space-y-2'>
                <Link 
                    href='/user' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'my-account' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <BookUser size={20} />
                    <span>My Account</span>
                </Link>

                <Link 
                    href='/user/change-password' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'change-password' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <Fingerprint size={20} />
                    <span>Change Password</span>
                </Link>

                <Link 
                    href='/user/change-avatar' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'change-avatar' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <ImageUp size={20} />
                    <span>Change Avarat</span>
                </Link>

                <Link 
                    href='/user/notifications' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'notifications' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <Bell size={20} />
                    <span>Notificatiobs</span>
                </Link>

                <Link 
                    href='/user/security' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'security' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <Shield size={20} />
                    <span>Security</span>
                </Link>

                <Link 
                    href='/user/apps' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'apps' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <Box size={20} />
                    <span>Apps</span>
                </Link>

                <Link 
                    href='/user/privacy' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'privacy' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <Layers size={20} />
                    <span>Privacy & Data</span>
                </Link>
            </CardContent>
        </Card>
    )
}

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Bolt, Briefcase, ReceiptText, SunMoon, UserCog } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SettingsNav({ thePage }: {thePage: string}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-neutral-800'>Settings & Privacy</CardTitle>
                <CardDescription>All the settings and privacy policy</CardDescription>
            </CardHeader>

            <CardContent className='flex flex-col space-y-2'>
                <Link 
                    href='/settings' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'basic' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <Bolt size={20} />
                    <span>Basic</span>
                </Link>

                <Link 
                    href='/settings/business' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'business' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <Briefcase size={20} />
                    <span>Business</span>
                </Link>

                <Link 
                    href='/settings/invoice' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'invoice' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <ReceiptText size={20} />
                    <span>Invoice</span>
                </Link>

                <Link 
                    href='/settings/appearance' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'appearance' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <SunMoon size={20} />
                    <span>Appearance</span>
                </Link>

                <Link 
                    href='/settings/privacy-policy' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'privacy-policy' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <UserCog size={20} />
                    <span>Privacy policy</span>
                </Link>
            </CardContent>
        </Card>
    )
}

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { BookUser, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SettingsNav({ thePage }: {thePage: string}) {
    return (
        <Card>
            <CardHeader>
                <div className='flex items-center gap-4'>
                    <Settings size={64} className='text-neutral-800' />
                    
                    <div>
                        <CardTitle>Settings</CardTitle>
                        <CardDescription>All the settings and policy</CardDescription>
                    </div>
                </div>
            </CardHeader>

            <CardContent className='flex flex-col space-y-2'>
                <Link 
                    href='/settings' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'basic' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <BookUser size={20} />
                    <span>Basic</span>
                </Link>

                <Link 
                    href='/settings/business' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'business' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <BookUser size={20} />
                    <span>Business</span>
                </Link>

                <Link 
                    href='/settings/appearance' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'appearance' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <BookUser size={20} />
                    <span>Appearance</span>
                </Link>

                <Link 
                    href='/settings/policy' 
                    className={cn(
                        'px-4 py-2 flex items-center space-x-2 rounded-lg',
                        thePage === 'policy' ? 'bg-primary text-white' : 'text-slate-500 hover:bg-neutral-100'
                    )}
                >
                    <BookUser size={20} />
                    <span>Policy</span>
                </Link>
            </CardContent>
        </Card>
    )
}
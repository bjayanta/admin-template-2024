import SettingsNav from '@/components/common/SettingsNav'
import React from 'react'

export default function SettingsHOC(
    { children, thePage } : Readonly<{
        children: React.ReactNode,
        thePage: string
    }>) {

    return (
        <div className='grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6 py-4'>
            <div>
                <SettingsNav thePage={thePage} />
            </div>

            <div className='col-span-2'>
                { children }
            </div>
        </div>
    )
}

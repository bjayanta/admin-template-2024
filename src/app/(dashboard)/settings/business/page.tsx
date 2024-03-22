import Breadcrumb from '@/components/common/Breadcrumb'
import SettingsHOC from '@/hoc/SettingsHOC'
import React from 'react'
import BusinessSettings from './BusinessSettings'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Business Settings"
};

export default function page() {
    const breadcrumbs = [
		{title: 'Project name', url : '/home'},
		{title: 'Settings', url : '/settings'},
		{title: 'Business', url : null},
	]

    return (
        <section className='p-4'>
            <Breadcrumb data={breadcrumbs} />

            <SettingsHOC thePage='business'>
                <BusinessSettings />
            </SettingsHOC>
        </section>
    )
}

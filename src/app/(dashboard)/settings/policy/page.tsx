import Breadcrumb from '@/components/common/Breadcrumb'
import SettingsHOC from '@/hoc/SettingsHOC'
import React from 'react'
import PolicySettings from './PolicySettings'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Policy Settings"
};

export default function page() {
    const breadcrumbs = [
		{title: 'Project name', url : '/home'},
		{title: 'Settings', url : '/settings'},
		{title: 'Policy', url : null},
	]

    return (
        <section className='p-4'>
            <Breadcrumb data={breadcrumbs} />

            <SettingsHOC thePage='policy'>
                <PolicySettings />
            </SettingsHOC>
        </section>
    )
}

import Breadcrumb from '@/components/common/Breadcrumb'
import SettingsHOC from '@/hoc/SettingsHOC'
import React from 'react'
import AppearanceSettings from './AppearanceSettings'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Appearance Settings"
};

export default function page() {
    const breadcrumbs = [
		{title: 'Project name', url : '/home'},
		{title: 'Settings', url : '/settings'},
		{title: 'Appearance', url : null},
	]

    return (
        <section className='p-4'>
            <Breadcrumb data={breadcrumbs} />

            <SettingsHOC thePage='appearance'>
                <AppearanceSettings />
            </SettingsHOC>
        </section>
    )
}

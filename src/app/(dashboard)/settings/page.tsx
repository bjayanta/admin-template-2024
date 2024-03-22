import Breadcrumb from '@/components/common/Breadcrumb';
import SettingsHOC from '@/hoc/SettingsHOC';
import { Metadata } from 'next';
import React from 'react'
import BasicSettings from './BasicSettings';


export const metadata: Metadata = {
    title: "Basic Settings"
};

export default function page() {
    const breadcrumbs = [
		{title: 'Project name', url : '/home'},
		{title: 'Settings', url : null},
	]

    return (
        <section className='p-4'>
            <Breadcrumb data={breadcrumbs} />

            <SettingsHOC thePage='basic'>
                <BasicSettings />
            </SettingsHOC>
        </section>
    )
}

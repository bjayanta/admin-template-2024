import Breadcrumb from '@/components/common/CustomBreadcrumb'
import SettingsHOC from '@/hoc/SettingsHOC'
import React from 'react'
import InvoiceSettings from './InvoiceSettings'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Business Settings"
};

export default function page() {
    const breadcrumbs = [
		{title: 'Project name', url : '/home'},
		{title: 'Settings', url : '/settings'},
		{title: 'Invoice', url : null},
	]

    return (
        <section className='p-4'>
            <Breadcrumb data={breadcrumbs} />

            <SettingsHOC thePage='invoice'>
                <InvoiceSettings />
            </SettingsHOC>
        </section>
    )
}

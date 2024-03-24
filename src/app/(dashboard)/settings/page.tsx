import Breadcrumb from '@/components/common/Breadcrumb';
import SettingsHOC from '@/hoc/SettingsHOC';
import { Metadata } from 'next';
import React from 'react'
import BasicSettings from './BasicSettings';


export const metadata: Metadata = {
    title: "Basic Settings"
};

interface Country {
    name: number,
    code: string,
    capital: string,
    region: string,
    currency: {
        code: string,
        name: string,
        symbol: string
    },
    language: {
        code: string,
        name: string
    },
    flag: string,
    dialling_code: string,
    isoCode: string,
}

async function getCountries(): Promise<Country[]> {
    const result = await fetch('http://localhost:4000/countries')
  
    // Delay response
    await new Promise((resolve) => setTimeout(resolve, 3000))
  
    return result.json()
}

export default async function page() {
    const countries = await getCountries()

    const breadcrumbs = [
		{title: 'Project name', url : '/home'},
		{title: 'Settings', url : null},
	]

    return (
        <section className='p-4'>
            <Breadcrumb data={breadcrumbs} />

            <SettingsHOC thePage='basic'>
                <BasicSettings countries={countries} />
            </SettingsHOC>
        </section>
    )
}

import Breadcrumb from '@/components/common/Breadcrumb'
import UserNav from '@/components/common/UserNav';
import { Metadata } from 'next';
import React from 'react'
import ProfileForm from '@/app/(dashboard)/user/ProfileForm';


export const metadata: Metadata = {
    title: "My Account"
};

export default function User() {
    const breadcrumbs = [
		{title: 'User', url : '/user'},
		{title: 'My Account', url : null},
	]

    const thePage: string = 'my-account'

    return (
        <section className='p-4'>
            <Breadcrumb data={breadcrumbs} />

            <div className='grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6 py-4'>
                <UserNav thePage={thePage} />

                <div className='col-span-2'>
				    <ProfileForm />
                </div>
			</div>
        </section>
    )
}

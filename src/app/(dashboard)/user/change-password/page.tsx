import Breadcrumb from '@/components/common/Breadcrumb'
import React from 'react'
import ChangePasswordForm from '@/app/(dashboard)/user/change-password/ChangePasswordForm'
import UserNav from '@/components/common/UserNav'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Change password"
};

export default function ChangePasswordPage() {
    const breadcrumbs = [
		{title: 'User', url : '/user'},
		{title: 'Change Password', url : null},
	]

    const thePage: string = 'change-password'

    return (
        <section className='p-4'>
            <Breadcrumb data={breadcrumbs} />

            <div className='grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6 py-4'>
                <UserNav thePage={thePage} />

                <div className='col-span-2'>
				    <ChangePasswordForm />
                </div>
			</div>
        </section>
    )
}

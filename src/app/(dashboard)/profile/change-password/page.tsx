import Breadcrumb from '@/components/common/CustomBreadcrumb'
import React from 'react'
import ChangePasswordForm from '@/app/(dashboard)/profile/change-password/ChangePasswordForm'
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

            <div className='grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-6 py-4'>
                <div className='col-span-3'>
                    <UserNav thePage={thePage} />
                </div>

                <div className='col-span-9'>
				    <ChangePasswordForm />
                </div>
			</div>
        </section>
    )
}

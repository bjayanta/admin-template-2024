import Breadcrumb from '@/components/common/CustomBreadcrumb'
import UserNav from '@/components/common/UserNav';
import { Metadata } from 'next';
import React from 'react'
import UploadAvatar from '@/app/(dashboard)/user/change-avatar/UploadAvatar';


export const metadata: Metadata = {
    title: "Change Avatar"
};

export default function User() {
    const breadcrumbs = [
		{title: 'User', url : '/user'},
		{title: 'Change avatar', url : null},
	]

    const thePage: string = 'change-avatar'

    return (
        <section className='p-4'>
            <Breadcrumb data={breadcrumbs} />

            <div className='grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-6 py-4'>
                <div className='col-span-3'>
                    <UserNav thePage={thePage} />
                </div>

                <div className='col-span-9'>
				    <UploadAvatar />
                </div>
			</div>
        </section>
    )
}

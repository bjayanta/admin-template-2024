import CustomBreadcrumb from '@/components/common/CustomBreadcrumb';
import { Metadata } from 'next';
import React from 'react'
import { User, columns } from './columns';
import { DataTable } from './data-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


export const metadata: Metadata = {
    title: "User Manager"
};

async function getData(): Promise<User[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            name: "Jayanta biswas",
            email: "m@example.com",
            role: "Admin",
            isStudent: false,
            balance: 250.50,
            status: "pending",
        },
        {
            id: "m5gr84i9",
            name: "Sagor biswas",
            email: "ken99@yahoo.com",
            role: "Salesman",
            isStudent: true,
            balance: 70.50,
            status: "success",
        },
        {
            id: "3u1reuv4",
            name: "Dadde Sorker",
            email: "Abe45@gmail.com",
            role: "Manager",
            isStudent: false,
            balance: 587.87,
            status: "success",
        },
        {
            id: "derv1ws0",
            name: "Rubel bhai",
            email: "Silas22@gmail.com",
            role: "Operator",
            isStudent: true,
            balance: 25.00,
            status: "success",
        },
        {
            id: "bhqecj4p",
            name: "Sourov Ahmed",
            email: "carmella@hotmail.com",
            role: "Operator",
            isStudent: false,
            balance: 100.00,
            status: "failed",
        },
        {
            id: "728ed52f",
            name: "Jayanta biswas",
            email: "m@example.com",
            role: "Admin",
            isStudent: false,
            balance: 250.50,
            status: "pending",
        },
        {
            id: "m5gr84i9",
            name: "Sagor biswas",
            email: "ken99@yahoo.com",
            role: "Salesman",
            isStudent: true,
            balance: 70.50,
            status: "success",
        },
        {
            id: "3u1reuv4",
            name: "Dadde Sorker",
            email: "Abe45@gmail.com",
            role: "Manager",
            isStudent: false,
            balance: 587.87,
            status: "success",
        },
        {
            id: "derv1ws0",
            name: "Rubel bhai",
            email: "Silas22@gmail.com",
            role: "Operator",
            isStudent: true,
            balance: 25.00,
            status: "success",
        },
        {
            id: "bhqecj4p",
            name: "Sourov Ahmed",
            email: "carmella@hotmail.com",
            role: "Operator",
            isStudent: false,
            balance: 100.00,
            status: "failed",
        },
    ]
}

export default async function page() {
    const data = await getData()

    const breadcrumbs = [
		{title: 'Project name', url : '/home'},
		{title: 'User manager', url : null},
	]

    return (
        <section className='p-4'>
            <CustomBreadcrumb data={breadcrumbs} />
            
            <Card className='my-10'>
                <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>
                        You have to submit old passkey and astatic marked fields are required.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <DataTable columns={columns} data={data} />
                </CardContent>
            </Card>
        </section>
    )
}

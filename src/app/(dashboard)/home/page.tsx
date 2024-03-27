import { Metadata } from 'next';
import React from 'react'
import { badgeVariants } from "@/components/ui/badge"
import Link from 'next/link';
import { ArrowDown, ArrowUp, ArrowUpRightFromSquare, Coins, DollarSign, ShoppingBag, TrendingDown, TrendingUp } from 'lucide-react';
import VisitorChart from '@/components/charts/VisitorChart';
import BarChartComponent from '@/components/charts/BarChartComponent';
import { Button } from '@/components/ui/button';
import Breadcrumb from '@/components/common/CustomBreadcrumb';


export const metadata: Metadata = {
    title: "Dashboard"
};

export default function page() {
	const data = [
		{ "name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400 },
		{ "name": "Page B", "uv": 3000, "pv": 1398, "amt": 2210 },
		{ "name": "Page C", "uv": 2000, "pv": 9800, "amt": 2290 },
		{ "name": "Page D", "uv": 2780, "pv": 3908, "amt": 2000 },
		{ "name": "Page E", "uv": 1890, "pv": 4800, "amt": 2181 },
		{ "name": "Page F", "uv": 2390, "pv": 3800, "amt": 2500 },
		{ "name": "Page G", "uv": 3490, "pv": 4300, "amt": 2100 }
	]

	const breadcrumbs = [
		{title: 'Project name', url : '/home'},
		{title: 'Dashboard', url : null},
	]

	return (
		<section className='p-4'>
			<Breadcrumb data={breadcrumbs} />

			<h2 className='font-semibold py-4 text-neutral-800'>Workspace Overview</h2>

			<div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
				<div className='border bg-white rounded-lg overflow-hidden'>
					<div className='flex items-start justify-between p-4'>
						<div>
							<strong className='text-neutral-500 font-medium'>Visitors</strong>
							<h2 className='font-bold text-4xl text-neutral-800'>45K</h2>
						</div>

						<div>
							<Link 
								href='/home' 
								className={`space-x-1 bg-green-100 text-green-600 border-0 ${badgeVariants({ variant: "outline" })}`}
							>
								<TrendingUp size={20} />
								<span>46%</span>
							</Link>
						</div>
					</div>
					
					<div className='h-44'>
						<VisitorChart data={data} />
					</div>
				</div>

				<div className='border bg-white rounded-lg overflow-hidden'>
					<div className='flex items-start justify-between p-4'>
						<div>
							<strong className='text-neutral-500 font-medium'>Members</strong>
							<h2 className='font-bold text-4xl text-neutral-800'>12K</h2>
						</div>

						<div>
							<Link 
								href='/home' 
								className={`space-x-1 bg-red-100 text-red-600 border-0 ${badgeVariants({ variant: "outline" })}`}
							>
								<TrendingDown size={20} />
								<span>16%</span>
							</Link>
						</div>
					</div>
					
					<div className='h-44'>
						<BarChartComponent />
					</div>
				</div>

				<div className='grid grid-cols-2 gap-4 md:col-span-2 lg:col-auto'>
					<div className='p-4 border bg-white rounded-lg relative'>
						<h2 className='text-neutral-500 font-medium'>Purchase</h2>

						<div className='text-neutral-800 font-semibold mt-2'>
							<span className='text-2xl'>$35</span>
							<span>.3k</span>
						</div>

						<div className='inline-flex items-center space-x-2 text-green-600 text-sm'>
							<ArrowUp size={18} />
							<span>4.3%</span>
						</div>
						
						<Button variant="outline" size="icon" className='bg-primary text-white hover:bg-white hover:text-primary absolute top-4 right-4'>
							<ShoppingBag />
						</Button>
					</div>

					<div className='p-4 border bg-white rounded-lg relative'>
						<h2 className='text-neutral-500 font-medium'>Sale</h2>

						<div className='text-neutral-800 font-semibold mt-2'>
							<span className='text-2xl'>$7</span>
							<span>.14k</span>
						</div>

						<div className='inline-flex items-center space-x-2 text-red-600 text-sm'>
							<ArrowDown size={18} />
							<span>1.59%</span>
						</div>

						<Button 
							variant="outline" 
							size="icon" 
							className='bg-amber-600 text-white hover:bg-white hover:text-amber-600 absolute top-4 right-4'
						>
							<DollarSign />
						</Button>
					</div>

					<div className='p-4 border bg-white rounded-lg relative'>
						<h2 className='text-neutral-500 font-medium'>Expense</h2>

						<div className='text-neutral-800 font-semibold mt-2'>
							<span className='text-2xl'>$15</span>
							<span>.03k</span>
						</div>

						<div className='inline-flex items-center space-x-2 text-red-600 text-sm'>
							<ArrowUp size={18} />
							<span>8.03%</span>
						</div>

						<Button 
							variant="outline" 
							size="icon" 
							className='bg-pink-600 text-white hover:bg-white hover:text-pink-600 absolute top-4 right-4'
						>
							<ArrowUpRightFromSquare/>
						</Button>
					</div>

					<div className='p-4 border bg-white rounded-lg relative'>
						<h2 className='text-neutral-500 font-medium'>Cash</h2>

						<div className='text-neutral-800 font-semibold mt-2'>
							<span className='text-2xl'>$8</span>
							<span>.26k</span>
						</div>

						<div className='inline-flex items-center space-x-2 text-green-600 text-sm'>
							<ArrowUp size={18} />
							<span>15.03%</span>
						</div>

						<Button 
							variant="outline" 
							size="icon" 
							className='bg-emerald-600 text-white hover:bg-white hover:text-emerald-600 absolute top-4 right-4'
						>
							<Coins />
						</Button>
					</div>
				</div>
			</div>

			<div className='w-full h-screen bg-red-100'>
				<div className='max-w-80 w-full h-28 border bg-yellow-600'></div>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint hic mollitia! Commodi porro voluptatibus vero alias architecto numquam ab mollitia soluta, repellat recusandae sit totam repudiandae eligendi quaerat minima?</p>
			</div>

			<div className='w-full h-screen bg-green-100'>
				<div className="flex justify-between">
					<div className='border'>1</div>
					<div className='border'>2</div>
				</div>
			</div>

			<div className='w-full h-screen bg-blue-100'>DIV 3</div>
		</section>
	)
}

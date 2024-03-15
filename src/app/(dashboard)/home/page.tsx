import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Dashboard"
};

export default function page() {
	return (
		<section className='px-4'>
			<h2>This is dashboard page.</h2>

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

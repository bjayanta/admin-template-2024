import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Dashboard"
};

export default function page() {
	return (
		<section className='px-4 bg-red-100'>
			<h2>This is dashboard page.</h2>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint hic mollitia! Commodi porro voluptatibus vero alias architecto numquam ab mollitia soluta, repellat recusandae sit totam repudiandae eligendi quaerat minima?</p>
		</section>
	)
}

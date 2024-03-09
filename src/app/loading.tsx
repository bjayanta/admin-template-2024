import SkeletonCard from '@/components/SkeletonCard'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
    return (
		<main className='container py-24'>
			<Skeleton className='w-96 h-8 mb-16'/>
			
			<div className='grid grid-cols-3 gap-8'>
				{"abcdefghi".split('').map(i => (
					<SkeletonCard key={i} />
				))}
			</div>
		</main>
    )
}

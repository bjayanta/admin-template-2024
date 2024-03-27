'use client'

import { useParams } from 'next/navigation'
import React from 'react'

export default function Show() {
    const params = useParams();
    
    return (
        <div>User ID: {params.id}</div>
    )
}

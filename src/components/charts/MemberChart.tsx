'use client'

import { AreaChart, Area, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";
import React from 'react'

export default function MemberChart({ data }: { data: any }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
                width={500} 
                height={400} 
                data={data}
                margin={{top: 0, right: 0, left: 0, bottom: 0,}}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#fa2ba1" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#fa2ba1" stopOpacity={0}/>
                    </linearGradient>
                </defs>

                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <Tooltip />

                <Area type="monotone" dataKey="uv" stroke="#fa2ba1" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>

        </ResponsiveContainer>
    )
}

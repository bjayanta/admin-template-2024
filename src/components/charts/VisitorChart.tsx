'use client'

import { AreaChart, Area, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";
import React from 'react'

export default function VisitorChart({ data }: { data: any }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart 
                data={data}
                margin={{top: 0, right: 0, left: 0, bottom: 0,}}
            >
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>

                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <Tooltip />

                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

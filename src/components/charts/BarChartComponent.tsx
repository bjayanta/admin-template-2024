'use client'

import React from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'


const data = [
    { "name": "Page A", "uv": 4000, "pv": 2400, "amt": 2400 },
    { "name": "Page B", "uv": 3000, "pv": 1398, "amt": 2210 },
    { "name": "Page C", "uv": 2000, "pv": 9800, "amt": 2290 },
    { "name": "Page D", "uv": 2780, "pv": 3908, "amt": 2000 },
    { "name": "Page E", "uv": 1890, "pv": 4800, "amt": 2181 },
    { "name": "Page F", "uv": 2390, "pv": 3800, "amt": 2500 },
    { "name": "Page G", "uv": 3490, "pv": 4300, "amt": 2100 }
]

export default function BarChartComponent() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data} 
                margin={{top: 0, right: 0, left: 0, bottom: 0,}}
                barSize={10}
            >
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <Tooltip />

                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
                <Bar dataKey="amt" fill="#fa2ba1" />
            </BarChart>
        </ResponsiveContainer>
    )
}

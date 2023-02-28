import React from 'react'
import { MdOutlineExpandMore } from "react-icons/md";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
  } from "recharts";
import {userActivity} from "../Data"


function UserActivity() {
  return (
    <div className='m-2 bg-white rounded-lg md:w-1/3'>
        <div className='flex justify-between  p-2'>
            <h3 className='font-medium'>User Activity</h3>
            <div className='flex items-center'> 
                <span className='ml-1 text-slate-500 text-sm cursor-pointer'>Weekly</span>
                <MdOutlineExpandMore/>
            </div>
        </div>
        
        <div className='m-3'>
            <p className='text-xs text-slate-500'>This Month</p>
            <div className='flex'>
                <h1 className='font-semibold text-lg'>16,543</h1>
            </div>
        </div>

        <div className='w-[90%] h-56'>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={userActivity}
                    margin={{ top: 10 }}>
                    <defs>
                        <linearGradient id="colorcurrent" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#0f9ddf" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorprevious" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f7829bcf" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#e11d48" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Legend
                        iconSize={8}
                        align="right"
                        iconType="circle"
                        verticalAlign="top"
                        height={30}
                    />
                    <XAxis dataKey="name" />
                    <YAxis tickCount={6} type="number" domain={[0, 100]}/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="current" stroke="#0f9ddf" fillOpacity={1} fill="url(#colorcurrent)" />
                    <Area type="monotone" dataKey="previous" stroke="#e11d48" fillOpacity={1} fill="url(#colorprevious)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default UserActivity

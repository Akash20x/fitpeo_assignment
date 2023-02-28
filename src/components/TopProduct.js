import React from 'react'
import { MdOutlineExpandMore } from 'react-icons/md'
import {topProduct} from "../Data"

function TopProduct() {
  return (
    <div className='m-2 bg-white rounded-lg md:w-1/3'>
        <div className='flex justify-between p-2'>
            <h3 className='font-medium'>Top Product</h3>
            <div className='flex items-center'> 
                <span className='ml-1 text-slate-500 text-sm cursor-pointer'>Monthly</span>
                <MdOutlineExpandMore/>
            </div>
        </div>

        <div>
            {topProduct.map((item)=>{
                return (
                <div className='flex justify-between mx-2 my-8 text-sm'>
                    <div>
                        <div className='flex'>
                            <span className='px-2  h-6 rounded-lg bg-blue-500 text-white font-semibold mr-3'>{item.id}</span>
                            <div>
                                <p className='text-gray-500'>{item.name}</p>
                                <p className='font-semibold'>{item.price}</p>
                            </div>
                        </div>
                    </div>
                    <div className='ml-auto h-6 font-semibold px-3 py-1 text-xs bg-gray-200 rounded-xl'>{item.monthly}</div>
                    </div>
            )
            })}    
        </div>
    </div>
  )
}

export default TopProduct

import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display:false
          },
    },
  };

const data = {
    labels: ['Completed', 'Pending', 'Cancel'],
      datasets: [
        {
          data: [60,30,10],
          backgroundColor: [
            'rgb(59 130 246)',
            'rgb(229 231 235)',
            'rgb(225 29 72)',
          ],
        },
      ],
}

function OrderStats() {
  return (
    <div className='m-2  bg-white rounded-lg p-2 md:w-1/3'>
        <div className='flex justify-between '>
            <h3 className='font-medium'>Order Stats</h3>
            <div className='flex items-center cursor-pointer'> 
                <BsThreeDots/>
            </div>
        </div>
        <div className='my-6 flex justify-center w-[98%] h-52'>
            <Doughnut options={options} data={data}/>
        </div>
        <div class="h-3 border-b-[1px] border-neutral-300 text-xl text-center w-11/12 m-auto"></div>
            <div className="flex justify-around text-xs mt-3 text-gray-500">
                <div>Completed</div>
                <div>Pending</div>
                <div>Cancel</div>
            </div>
        </div>
     )
}

export default OrderStats

import React from 'react'
import {RevOrderCustomerData} from "../Data"
import { MdOutlineExpandMore } from "react-icons/md";
import { Bar } from 'react-chartjs-2';
import {RevenueChartData} from "../Data"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

  const options = {
    responsive: true,
    plugins: {
        legend: {
            display:false
          },
          tooltip:{
            callbacks:{
                label: function(value){
                    return  `${value.dataset.label}: ${value.parsed.y}K`
                },
            }
        },
    },
    scales: {
        y:
          {
            min: 0,
            max: 40,
            ticks: {
                stepSize: 10,
                callback: function(value) {
                    return value + "K";
              },
              },
          },
        }
  };

  const ChartData = {
    labels:RevenueChartData.map((item)=>item.month),
    datasets: [
      {
        label: "Previous Revenue",
        data: RevenueChartData.map((item)=>item.previous),
        backgroundColor: 'rgb(229 231 235)',
      },
      {
        label: "Current Revenue",
        data: RevenueChartData.map((item)=>item.current),
        backgroundColor: ' rgb(14 165 233)',
      },
    ],
  };

function Overview() {
  return (
    <>
    <div className=' flex justify-between flex-col md:flex-row gap-2'>
      {RevOrderCustomerData.map((item)=>{
        return (
            <div className='flex bg-white p-3 rounded-lg my-1 mx-3 md:w-1/3 '>
                <div className='bg-blue-400 rounded-lg w-10 h-10 p-2'>
                    <item.icon className='w-6 h-6'/>
                </div>
                <div className='flex flex-col w-full'>
                    <p className='text-xs mx-3 text-slate-500 font-bold'>{item.name}</p>
                    <div className='flex justify-between '>
                        <h3 className='mx-3 font-semibold'>{item.value}</h3>
                        <h5 className={`text-xs ${item.profit? 
                            "bg-green-100 text-lime-500": 
                            "bg-red-100 text-red-600"} px-1 h-4 rounded-full mt-1`}>{item.progress}</h5>
                     </div>
                 </div>
            </div>
                )
      })}
    </div>

    <div className='w-[95%] md:w-[98%] bg-white m-auto md:m-2 p-3 mt-2 '>
        <div className='flex  p-2 rounded-lg justify-between'>
            <h3 className='font-semibold'>Overview</h3>
            <div className='flex items-center'> 
                <p className='font-bold text-sm text-slate-600'>Sort By:</p>
                <span className='ml-1 text-slate-500 text-sm cursor-pointer'>Yearly</span>
                <MdOutlineExpandMore/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row'>
            <div className='m-3'>
                <p className='text-xs text-slate-500'>This Month</p>
                <div className='flex'>
                    <h1 className='font-bold text-xl'>$24,568</h1>
                    <h5 className='text-xs bg-green-100 text-lime-500 ml-3  px-1 h-4 rounded-full w-12'>+2.65%</h5>
                </div>
                <div className='py-3 flex justify-center'>
                    <table>
                      <tbody>
                        <tr>
                          <td className='border-b-2 border-r-2 h-16 w-24'>
                            <div className='text-xs'>Orders</div>
                            <div className='font-semibold text-black'>5,643</div>
                          </td>
                          <td className='border-b-2 h-16 w-24'>
                            <div className='text-xs ml-3'>Sales</div>
                            <div className='font-semibold text-black ml-3'>16,273</div>
                          </td>
                        </tr>
                        <tr>
                          <td className='border-b-2 border-r-2  h-16 w-24'>
                            <div className='text-xs'>Order Value</div>
                            <div className='font-semibold text-black'>12.03%</div>
                          </td>
                          <td className='border-b-2  h-16 w-24'>
                            <div className='text-xs ml-3'>Customers</div>
                            <div className='font-semibold text-black ml-3'>21,456</div>
                          </td>
                        </tr>
                        <tr>
                          <td className='border-r-2  h-16 w-24'>
                            <div className='text-xs'>Income</div>
                            <div className='font-semibold text-black'>$35,652</div>
                          </td>
                          <td className='  h-16 w-24'>
                            <div className='text-xs ml-3'>Expenses</div>
                            <div className='font-semibold text-black ml-3'>$12,248</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                </div>
            </div>
            <div className='md:w-5/6 md:h-[18rem] h-[10rem] w-[90%] flex justify-center m-auto'>
                <Bar options={options} data={ChartData}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Overview

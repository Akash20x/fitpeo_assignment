import React from 'react'
import profileImage from "../assets/profile_image.jpg"
import coverImage from "../assets/cover.jpg"
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function Profile() {
  return (
    <div className='bg-white rounded-xl md:mt-1 md:m-2 w-[90%] m-auto md:w-[40%] my-3 md:my-0'>
        <img className='h-24 w-full rounded-xl' src={coverImage} alt="" />
        <img className='h-16 mx-auto rounded-full mt-[-2rem]' src={profileImage} alt="" />
        <div className='text-center font-bold'>Akash Jain</div>
            <div className='text-center text-xs font-semibold text-slate-500'>Frontend Developer</div>
            <div className="flex justify-around text-center my-5">
                <div>
                    <p className='text-sm font-semibold'>1,269</p>
                    <p className='text-xs'>Products</p>
                </div>

                <div className='border-r-2'></div>
                <div>
                    <p className='text-sm font-semibold'>5.2k</p>
                    <p className='text-xs'>Followers</p>
                </div>
            </div>
            <div className='mx-2 text-center'>
                <div className='border-b-2'></div>
                    <div className="flex justify-between my-4">
                        <h5 className='text-md font-semibold'>Earning</h5>
                        <AiOutlineInfoCircle />
                    </div>

                    <div className='flex justify-center relative w-[40%] md:w-[45%] m-auto mb-[-3rem] '>
                        <CircularProgressbar
                            strokeWidth={6}
                            circleRatio={0.5}
                            className="font-medium"
                            value={76}
                            maxValue={100}
                            text={`76%`}
                            styles={buildStyles({
                                rotation: 0.75,
                                pathColor: "#2388FA",
                                textColor: "black",
                                textSize: "16px",
                            })}
                        />
                    </div>
        
                    <p className='font-semibold text-lg mb-1'>$26,256</p>
                    <p className='text-sm text-gray-500 font-semibold my-1'>Earning this Month</p>
                    
                    <div className="my-3">
                        <span className='text-sm bg-green-100 text-lime-500 font-semibold rounded-full px-1'>+2.65%</span>
                        <span className='text-sm text-gray-500 font-semibold ml-2'>From previous periods</span>
                    </div>

                    <div className='border-b-2'></div>
                    <p className='text-left text-md font-semibold mb-4 mt-3'>Recent Activity</p>

                    <div className='flex mb-3 mx-3'>
                        <div className='flex flex-col py-1 px-4 font-semibold rounded-xl bg-gray-200'>
                            <span>12</span>
                            <span>Sep</span>
                        </div>
                        <p className='mx-3 mt-2 text-sm text-left text-gray-500 font-semibold'>Responded to need "Volunteer Activities"</p>
                    </div>

                    <div className='flex mb-3 mx-3'>
                        <div className='flex flex-col  px-4  font-semibold rounded-xl bg-gray-200 h-[3.5rem]'>
                            <span>11</span>
                            <span>Sep</span>
                        </div>
                        <p className='mx-3 mt-2 text-sm text-left text-gray-500 font-semibold'>Everyone realizes would be disiarable...<div className='text-blue-600 text-left font-semibold cursor-pointer'>Read more</div></p>
                    </div>

                    <div className='flex mb-3 mx-3'>
                        <div className='flex flex-col  px-4 font-semibold rounded-xl bg-gray-200 h-[3.5rem]'>
                            <span>10</span>
                            <span>Sep</span>
                        </div>
                        <p className='mx-3 mt-2 text-sm text-left text-gray-500 font-semibold'>Joined the group "Boardsmanship Forum"</p>
                    </div>
            </div>
        </div>
  )
}

export default Profile

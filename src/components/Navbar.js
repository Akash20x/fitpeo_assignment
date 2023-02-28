import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import flag from "../assets/flag.png"
import { MdGridView } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import profileImage from "../assets/profile_image.jpg"


function Navbar() {
  return (
    <div className='flex justify-between mx-5 my-5 h-3'>
        <h1 className='font-bold'>Dashboard</h1>
        <div className='flex justify-evenly w-28 md:w-64 items-center'>
            <AiOutlineSearch className='w-6 h-6'/>
            <img src={flag} alt='' className='h-4 hidden md:block'/>
            <MdGridView className='w-6 h-6 hidden md:block'/>
            <div className='relative'>
                <MdOutlineNotificationsNone className='w-6 h-6 '/>
                <div className='rounded-full w-3 h-3 bg-orange-600 text-[11px] absolute top-0 right-[1px]'>
                    <span className='text-white absolute left-[3px] top-[-2px]'>4</span>
                </div>
            </div>
            <FiSettings className='w-5 h-5 '/>
            <img className='w-7 h-7 rounded-full' src={profileImage} alt=''/>
        </div>
    </div>
  )
}

export default Navbar

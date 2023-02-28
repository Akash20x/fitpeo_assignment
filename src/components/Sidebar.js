import React, { useState } from 'react'
import { AiOutlineAlignLeft } from "react-icons/ai";
import { MdGridView } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdInventory2 } from "react-icons/md";
import { MdArchive } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdReceipt } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import { MdViewInAr } from "react-icons/md";
import { MdGrid4X4 } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";


function Sidebar() {

    const { innerWidth } = window;
    const [menu,setMenu] = useState(innerWidth>768? false: true)
    const [optionMenu,setOptionMenu] = useState(false)

  return (
    <>
    {menu? <div className='bg-[#000424] w-[3rem] text-slate-400 md:h-auto'>
                <div className='text-2xl font-bold px-2 py-4 cursor-pointer'>
                    <AiOutlineAlignLeft onClick={() => setMenu(!menu)} />
                </div>
            </div>
        : 
            <div className='bg-[#000424] w-60 flex flex-col p-3 text-slate-400 fixed h-screen overflow-auto md:static md:h-auto'>
                <div className='flex justify-between py-2'>
                    <h2 className='font-bold text-lg'>Fitpeo</h2>
                    <div className='text-2xl font-bold cursor-pointer'>
                        <AiOutlineAlignLeft  onClick={() => setMenu(!menu)} />
                    </div>
                </div>
                <div className='text-[0.7rem] font-bold my-3'>MENU</div>
                <div>
                    <div className={`flex gap-3 items-center cursor-pointer	hover:text-white
                        ${optionMenu ? "text-white":"text-slate-400" }`} 
                        onClick={()=> setOptionMenu(!optionMenu)}>
                        <MdGridView className='w-6 h-6'/>
                        <div className='flex justify-between w-full my-2'>
                            <h3>Dashboards</h3>
                            {optionMenu ? <MdOutlineExpandLess/> : <MdOutlineExpandMore/>}
                        </div>
                    </div>
                    <ul className={`ml-7 ${optionMenu ? "block" : "hidden"}`}>
                        <li className='my-1 hover:text-white'>Ecommerce</li>
                        <li className='my-1 hover:text-white'>Saas</li>
                        <li className='my-1 hover:text-white'>Crypto</li>
                    </ul>
                </div>
                <div className='text-[0.7rem] font-bold my-3'>APPLICATIONS</div>
                    <div className='flex gap-3 items-center my-2'>
                        <FaCalendarAlt className='w-5 h-5'/>
                        <h3>Calendar</h3>
                    </div>
                    <div className='flex gap-3 items-center my-2'>
                        <BsFillChatDotsFill className='w-5 h-5'/>
                        <div className='flex justify-between w-full my-1'>
                            <h3>Chat</h3>
                            <span className='text-[0.8rem] text-red-500	mr-3'>Hot</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center  my-2'>
                        <MdInventory2 className='w-5 h-5'/>
                        <h3>File Manager</h3>
                    </div>
                    <div className='flex gap-3 items-center  my-2'>
                        <MdArchive className='w-5 h-5'/>
                        <div className='flex justify-between w-full my-1'>
                            <h3>Ecommerce</h3>
                            <MdOutlineExpandMore/>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center  my-2'>
                        <MdEmail className='w-5 h-5'/>
                            <div className='flex justify-between w-full my-1'>
                            <h3>Email</h3>
                            <MdOutlineExpandMore/>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center  my-2'>
                        <MdReceipt className='w-5 h-5'/>
                            <div className='flex justify-between w-full my-1'>
                            <h3>Invoices</h3>
                            <MdOutlineExpandMore/>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center  my-2'>
                        <MdWorkOutline className='w-5 h-5'/>
                        <div className='flex justify-between w-full my-1'>
                            <h3>Projects</h3>
                            <MdOutlineExpandMore/>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center  my-2'>
                        <FaWifi className='w-5 h-5'/>
                        <div className='flex justify-between w-full my-1'>
                            <h3>Contacts</h3>
                            <MdOutlineExpandMore/>
                        </div>
                    </div>
                <div className='text-[0.7rem] font-bold my-3'>LAYOUTS</div>
                <div className='text-[0.7rem] font-bold my-3'>PAGES</div>
                    <div className='flex gap-3 items-center  my-2'>
                        <FaUserPlus className='w-5 h-5'/>
                            <div className='flex justify-between w-full my-1'>
                            <h3>Authentication</h3>
                            <span className='text-[0.8rem] mr-1 text-white bg-sky-300 rounded-full px-[0.50rem] py-0.5'>8</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center  my-2'>
                        <MdViewInAr className='w-5 h-5'/>
                        <div className='flex justify-between w-full my-1'>
                            <h3>Utility</h3>
                            <MdOutlineExpandMore/>
                        </div>
                    </div>
                <div className='text-[0.7rem] font-bold my-3'>COMPONENTS</div>
                <div className='flex gap-3 items-center my-2'>
                    <MdGrid4X4 className='w-5 h-5'/>
                    <div className='flex justify-between w-full my-1'>
                        <h3>UI Elements</h3>
                        <MdOutlineExpandMore/>
                    </div>
                </div>
                <div className='flex gap-3 items-center  my-2'>
                    <MdOutlineDriveFileRenameOutline className='w-5 h-5'/>
                    <div className='flex justify-between w-full my-1'>
                        <h3>Forms</h3>
                        <MdOutlineExpandMore/>
                    </div>
                </div>
            </div>
    }</> 
  )
}

export default Sidebar

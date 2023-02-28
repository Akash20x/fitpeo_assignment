import React from 'react'
import Navbar from './Navbar'
import OrderStats from './OrderStats'
import Overview from './Overview'
import Profile from './Profile'
import TopProduct from './TopProduct'
import UserActivity from './UserActivity'

function Dashboard() {
  return (
    <div className='w-full'>
        <Navbar/>
        <div className='flex flex-col md:flex-row'>
            <div className='w-full'>
                <Overview/>
                <div className='flex flex-col md:flex-row justify-between gap-1'>
                    <UserActivity/>
                    <OrderStats/>
                    <TopProduct/>
                </div>
            </div>
            <Profile/>
        </div>
    </div>
  )
}

export default Dashboard

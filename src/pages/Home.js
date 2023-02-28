import React from 'react'
import Dashboard from '../components/Dashboard'
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div className='flex bg-slate-100 '>
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default Home

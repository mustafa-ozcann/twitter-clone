import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='min-h-screen bg-black flex'>
      {/* Sidebar - Sol taraf */}
      <div className='w-1/4 h-screen bg-black'>
        <Sidebar />
      </div>
      
      {/* Main Content - Sağ taraf */}
        <div className='w-3/4 h-screen bg-black'>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout


import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftBar from './LeftBar'




const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
 <LeftBar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout
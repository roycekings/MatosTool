import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import bga from './bga.jpg' 

const AdminRoute = () => {

    const {user,token} = useSelector((state)=>state.auth)
    
  return (
    <div className='text-white  min-h-screen h-auto' style={{
      backgroundImage:`url(${bga})`,
      backgroundSize: "cover"

      }}>
    {
       token && <Outlet />
    }
    </div>
  )
}

export default AdminRoute
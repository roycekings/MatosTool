import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import FormLogin from '../components/FormLogin';
import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {

    const {token,user} = useSelector((state)=>state.auth)
    
  return (
    <>
    {token  ? <Outlet/> : <FormLogin />}
    </>
  )
}

export default PrivateRoute
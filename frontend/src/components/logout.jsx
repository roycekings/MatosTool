import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/slices/authSlice'

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = async () =>{
    dispatch(logout())
    navigate('/')
    
    
  }



  return (
    <div>
      <button onClick={handleLogout}>se deconnecter</button>
    </div>
  )
}

export default Logout
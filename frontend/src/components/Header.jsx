import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RiProfileLine } from "react-icons/ri";
import { LuLogOut } from "react-icons/lu";
const Header = () => {

  let navLink
  let logo


const {token,user} = useSelector((state)=>state.auth)

  if(user){
    if(token && user.role == 'admin'){
      navLink = (
        <Link to = {`/admin/profil/${user._id}`} className='hover:text-blue-900 text-blue-700 flex gap-2 items-center'>
        <span className='text-black font-bold'>{user.role} :</span> 
        <br/><p className=' font-semibold capitalize'>{user.nom} {user.prenom} </p>
        <RiProfileLine className=' w-6 h-6' /> 
    </Link>
      )
    } else if(token && (user.role == "client"||user.role == "employe")) {
      navLink = (
        <Link to = {`/user/profil/${user._id}`} className='hover:text-blue-900 text-blue-700 flex gap-2 items-center'>
        <p className=' font-semibold capitalize'>{user.nom} {user.prenom} </p>
        <RiProfileLine className=' w-6 h-6' />
    </Link>
      )
    } 
  
    if(user.role == 'admin'){
      logo = (
      <Link to='/admin' className=' cursor-pointer text-2xl font-extrabold italic'><span className=''>Media</span><span className=' text-blue-500'>Tool</span><span className='text-orange-500'>.</span></Link>
  
      ) 
    } else{
      logo = (
        <Link to='/home' className=' cursor-pointer text-2xl font-extrabold italic'><span className=''>Media</span><span className=' text-blue-500'>Tool</span><span className='text-orange-500'>.</span></Link>
        )
    }
  } else {
    logo = (
      <Link to='/home' className=' cursor-pointer text-2xl font-extrabold italic'><span className=''>Media</span><span className=' text-blue-500'>Tool</span><span className='text-orange-500'>.</span></Link>
      )
    navLink= (
      <div className=' flex gap-3 items-center'>
        <Link to='/inscription' className=' transition duration-1000 text-md hover:text-black  hover:bg-blue-200 font-semibold px-2 py-2 rounded-md  bg-blue-700 text-white'>S'incrire</Link>
        <Link to='/login' className='transition duration-1000 text-md hover:text-black  hover:bg-blue-200 font-semibold px-2 py-2 rounded-md  bg-blue-700 text-white'>Se connecter</Link>  
       </div>
    )
  }






  return (
    <div className='w-full border h-auto justify-between items-center flex bg-transparent bg-gray-100 py-3 px-9 shadow-md' >
      {
        logo
      }
      {
        token && user.role !=='admin' && <div className=' font-bold flex gap-4'>
        <Link to='/home' className=' border p-2 px-3 rounded hover:text-white hover:bg-black transition duration-700 shadow-md'>Accueil</Link>
        <Link to='/panier' className=' border p-2 px-3 rounded hover:text-white hover:bg-black transition duration-700 shadow-md' >Panier de matériel </Link>
      </div>
      }
    {
      navLink
    }

     
    </div>
  )
}

export default Header
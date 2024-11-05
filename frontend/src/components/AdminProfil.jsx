

import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Input,SubmitButton} from "./Input"
import {Link,useNavigate, useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {update,logout} from '../redux/slices/authSlice'
import { LuLogOut } from "react-icons/lu";
import { MdDeleteForever } from "react-icons/md";


import { FaHistory } from "react-icons/fa";

const AdminProfil = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const {token,user} = useSelector((state)=>state.auth)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numTelRegex = /^6\d{8}$/
    const [data,setData] = useState({
        nom:'',
        prenom:'',
        email:'',
        numTel:null
    })

    const navigate = useNavigate()
    const [err,setErr] = useState('')
  
    const handleData = (e)=>{
        const {name,value } = e.target

        setData({
            ...data,
            [name]:value
        })

    }

    const getUSer = async ()=>{
        
        try {
        const reponse = await axios.get(`http://localhost:3001/api/profil/update/${id}`,{
            headers:{
                authorization: token
            }
        })
        setData(reponse.data)
            
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        getUSer()
    },[])
    console.log(data);
    
    const hanleSubmit = async (e)=>{
        e.preventDefault()
        
        try {
            if(data.nom.length < 3 ) {
                
                
                setErr("le nom doit contenir au moins 3 caracteres")
                return
            }

            if(data.prenom.length < 3 ) {
                setErr("le prenom doit contenir au moins 3 caracteres")
                return
            }
            if(! numTelRegex.test(data.numTel) ) {
                setErr(" le format du numero de telephne n est pas respecté n'est pas respecter")
                return
            }

            if(! emailRegex.test(data.email) ) {
                setErr(" le format de l adresse mail n est pas respecter")
                return
            }


            setErr("")

            
            const response = await axios.put(`http://localhost:3001/api/profil/update/${id}`,data,{
                headers:{
                    authorization: token
                }
            })

            getUSer()
            dispatch(update(response.data))
            
          
                    
        } catch (error) {
            console.error(error.message);
            
        }
    }


 

    const handleLogout = async () =>{
      dispatch(logout())
      navigate('/')
      
      
    }


  return (
   <div>

    <div className='  grid grid-cols-6 border p-3 shadow-md my-3 h-auto '>
        {/* <Link  className='py-2 px-2 border rounded-md text-white bg-blue-600 shadow-md flex gap-2 items-center'><p className='mx-auto'>Demande  d'emprunt en attente</p></Link>
        <Link className='py-2 px-2 border rounded-md text-white bg-gray-600 shadow-md flex  gap-2 justify-center items-center'><p>Historique  d'emprunt</p><FaHistory className='w-4 h-4' /></Link> */}
        <Link onClick={handleLogout} className='py-2 px-2 border rounded-md text-white bg-orange-600 shadow-md flex gap-2 items-center justify-center'><p>Déconnexion</p> <LuLogOut /></Link>
       
             
    </div>

         <form action=""
            className=' mt-10 mx-auto w-2/5 border px-4 shadow-emerald-100 shadow-lg'
            >
        <h1 className=' font-bold text-2xl text-blue-400 text-center py-4' >
            Profil
        </h1>
    <div>
    <Input name="nom" type="text" value={data.nom} onChange={handleData} label='Nom' placeholder=' Entrez votre nom' />
    <Input name="prenom" type="text" value={data.prenom} onChange={handleData} label='Prenom' placeholder='Entrez votre prenom' />
    <Input name="email" type="text" value={data.email} onChange={handleData} label='Email' placeholder='Entrez votre adresse mail' />
    <Input name="numTel" type="number" value={data.numTel} onChange={handleData} label='Numero de telephone' placeholder='Entrez votre numero de telephone' />
    
    {err && <p className=' text-red-500'>{err}</p>}
    
    </div>

    <div className=' my-4 flex  justify-around flex-col '>
        <SubmitButton onClick={hanleSubmit} value='Modifier profil' />     
    </div>        

    </form>    
   </div>
  )
}

export default AdminProfil
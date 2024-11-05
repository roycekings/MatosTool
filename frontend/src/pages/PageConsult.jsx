import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import {Select} from '../components/Input'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'

const PageConsult = () => {
    const navigate = useNavigate()
    const {token} = useSelector((state)=>state.auth)
    const [role,setRole] = useState('')
    const [user,setUser] = useState({})
    const tab = ['','employe','admin','client']
    const id= useParams()
    console.log(role);
    const getOneUser = async ()=>{
        try {
         const response = await axios.get(`http://localhost:3001/api/profil/update/${id.id}`,{
            headers: {
                Authorization: token
            }
         })   
         setUser(response.data)
         
        } catch (error) {
            console.error(error.message);
            
        }
    }

    useEffect(()=>{
        getOneUser()
    },[])
    
   const handleRole = async ()=>{
    try {
        if(role == 'admin') {
            const response = await axios.put(`http://localhost:3001/api/admin/setrole/${id.id}`,{role:role},{
                headers: {
                    Authorization: token
                }
             })
             navigate('/admin/gestionuser')
             
        } else if(role == 'employe'){
            const response = await axios.put(`http://localhost:3001/api/admin/setrole/${id.id}`,{role:role},{
                headers: {
                    Authorization: token
                }
             })
             navigate('/admin/gestionuser')
             
        }else if(role == 'client'){
            const response = await axios.put(`http://localhost:3001/api/admin/setrole/${id.id}`,{role:role},{
                headers: {
                    Authorization: token
                }
             })
             navigate('/admin/gestionuser')
             
        } else {
            return
        }
    } catch (error) {
        console.error(error.message);
        
    }
    
   
    
    
   }

   const handleDelete = async()=>{  
  
    
    try {
        const response = await axios.put(`http://localhost:3001/api/profil/delete/${id.id}`,{isDeleted: true},{
            headers: {
                authorization: token
            }
        })
        navigate('/admin/gestionuser')
         
         
    } catch (error) {
        console.error(error);
        
    }
   }
   
    
  return (
    <div>
        <h1 className=' text-center text-3xl text-blue-600 capitalize font-bold py-3'> consultation de profil</h1>
       <div className='px-5 py-4 rounded-lg shadow-slate-500 shadow  w-1/2 mx-auto  h-auto flex flex-col gap-4'>
            <div className=' flex flex-col gap-3'>
                <p className=''><span className=' capitalize text-xl font-bold '>nom:   </span> <span className=' italic text-lg'>{user.nom}</span></p>
                <p className=''><span className=' capitalize text-xl font-bold '>Email:</span> <span className=' italic text-lg'>{user.email}</span></p>
                <p className=''><span className=' capitalize text-xl font-bold '>numero de telephone:</span> <span className=' italic text-lg'>{user.numTel}</span></p>
                <p className=''><span className=' capitalize text-xl font-bold '>Role:</span> <span className=' italic text-lg'>{user.role}</span></p>
            </div>
            <div>
                <div className=' grid grid-cols-2 gap-3 items-end'>
                    <div className=' flex-col flex gap-2'>
                        <Select value={role} onChange={(e)=>setRole(e.target.value)}  label= 'choisir un role' tab={tab}/>
                        <button onClick={handleRole} className='text-white bg-blue-500 py-5 rounded-lg'>Changer le role</button>
                    </div>

                    <button onClick={handleDelete} className=' px-4 bg-red-500 h-1/2 rounded-lg text-white'>Supprimer cet utilisateur</button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default PageConsult
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const GestionUser = () => {
 
const {token} = useSelector((state)=>state.auth) 

 const [users,setUsers] = useState([])
    const getAllUsers = async ()=>{
        try {
            const users = await axios.get('http://localhost:3001/api/admin/getall',{
                headers: {
                    authorization: token
                }
            })
            setUsers(users.data.returnList)
        } catch (error) {
            console.log(error);        
        }
    }

    useEffect(()=>{
        getAllUsers()
    },[])


    
    return (
    <div>
        <h1 className=' text-2xl text-center capitalize mt-4 text-blue-600 font-bold'> gestion des utilisateurs</h1>
        <table className=' mt-6 mx-auto w-2/3'>
            <thead>
                <tr className=' border bg-blue-600 text-white capitalize font-semibold text-lg '>
                    <th>nom</th>
                    <th>email</th>
                    <th>numero de telephone</th>
                    <th>role</th>
                    <th>consultations</th>

                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>(
                        <tr key={index}>
                        <td className=' capitalize text-center border py-2'>{user.nom}</td>
                        <td className=' text-center border py-2'>{user.email}</td>
                        <td className=' text-center border py-2'>{user.numTel}</td>
                        <td className=' capitalize text-center border py-2 pr-2'>{user.role}</td>
                        <td className=' rounded-lg capitalize text-center border py-2 hover:bg-green-900  bg-green-600 text-white'><Link to ={`/admin/gestionuser/consultation/${user._id}`}>consulter le profil</Link></td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default GestionUser
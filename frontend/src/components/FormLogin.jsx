import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Input,SubmitButton} from "./Input"
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios"
import {signIn} from "../redux/slices/authSlice"



const FormLogin = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [data,setData] = useState({
  
    email:'',
    mdp:''
    

})

const [err,setErr] = useState('')
const dispatch  = useDispatch()
const navigate =useNavigate()
const handleData = (e)=>{
    const {name,value } = e.target

    setData({
        ...data,
        [name]:value
    })

}

const hanleSubmit = async (e)=>{
  e.preventDefault()

  try {
      if(! emailRegex.test(data.email) ) {
        setErr(" le format de l adresse mail n est pas respecter")
        return
    }

    if(data.mdp.length < 6 ) {
        setErr("le mot de passe doit contenir au moins 6 caracteres")   
        return
    }


    const response = await axios.post("http://localhost:3001/api/auth/signin",data)
    dispatch(signIn(response.data))
    
    console.log(response.data);
    
    if(response.data.responseEmploye.role == 'admin'){
      navigate("/admin")
    } else{
      navigate("/home")
    }

  } catch (error) {
    console.error(error);
    setErr(error.response.data)
  }
}



  return (
    <form action=""
    className=' mt-10 mx-auto w-1/3 border px-4 shadow-emerald-100 shadow-lg'
    >
        <h1 className=' font-bold text-2xl text-blue-400 text-center py-4' >
            Formulaire de connexion
        </h1>
    <div>
    
    <Input name="email" type="text" value={data.email} onChange={handleData} label='Email' placeholder='Entrez votre adresse mail' />
    <Input name="mdp" type="password" value={data.mdp} onChange={handleData} label='Mot de passe' placeholder='Entrez votre mot de passe' />
    {err && <p className=' text-red-500'>{err}</p>}
    </div>

    <div className=' my-4 flex  justify-around flex-col '>
    <Link to = '/inscription' className=' text-right  float-right font-thin hover:underline hover:text-blue-500 text-sm'>pas de compte? Inscription</Link>        
    <Link className=' text-right  float-right font-thin hover:underline hover:text-blue-500 text-sm'>mot de passe oublie?</Link>        

        <SubmitButton onClick={hanleSubmit} value='Connexion' />     
    </div>        

    </form>
  )
}

export default FormLogin
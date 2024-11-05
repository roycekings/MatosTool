import React, { useState } from 'react'
import axios from "axios"
import {Input,SubmitButton} from "./Input"
import {Link,useNavigate} from 'react-router-dom'




const FormInscrption = () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numTelRegex = /^6\d{8}$/
    const [data,setData] = useState({
        nom:'',
        prenom:'',
        email:'',
        numTel:null,
        mdp:'',
        cmdp:''

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

            if(! emailRegex.test(data.email) ) {
                setErr(" le format de l adresse mail n est pas respecter")
                return
            }

            if(! numTelRegex.test(data.numTel) ) {
                setErr(" le format du numero de telephne n est pas respecté n'est pas respecter")
                return
            }


            if(data.mdp.length < 6 ) {
                setErr("le mot de passe doit contenir au moins 6 caracteres")   
                return
            }
            
            if(data.mdp != data.cmdp){
                setErr("les mot de passe ne correspondent pas")
                return
            }

            setErr("")

            const {cmdp,...sendData} = data
            
            
            
            const response = await axios.post("http://localhost:3001/api/auth/signup",sendData)
 

            console.log(response.data);
                navigate("/login")
            setData({
                nom:'',
                prenom:'',
                email:'',
                numTel,
                mdp:'',
                cmdp:''
            })
                    
        } catch (error) {
            console.error(error.message);
            
        }
    }


  return (
    <form action=""
    className=' mt-10 mx-auto w-2/5 border px-4 shadow-emerald-100 shadow-lg'
    >
        <h1 className=' font-bold text-2xl text-blue-400 text-center py-4' >
            Formulaire d'inscription
        </h1>
    <div>
    <Input name="nom" type="text" value={data.nom} onChange={handleData} label='Nom' placeholder=' Entrez votre nom' />
    <Input name="prenom" type="text" value={data.prenom} onChange={handleData} label='Prenom' placeholder='Entrez votre prenom' />
    <Input name="email" type="text" value={data.email} onChange={handleData} label='Email' placeholder='Entrez votre adresse mail' />
    <Input name="numTel" type="number" value={data.numTel} onChange={handleData} label='Numero de telephone' placeholder='Entrez votre numero' />
    <Input name="mdp" type="password" value={data.mdp} onChange={handleData} label='Mot de passe' placeholder='Entrez votre mot de passe' />
    <Input name="cmdp" type="password" value={data.cmdp} onChange={handleData} label='confirmation de mot de passe' placeholder='Confirmer votre mot de passe' />
    {err && <p className=' text-red-500'>{err}</p>}
    
    </div>

    <div className=' my-4 flex  justify-around flex-col '>
    <Link to= '/login'className=' text-sm text-right  float-right font-thin underline hover:text-blue-500'>deja un compte? connexion</Link>        

        <SubmitButton onClick={hanleSubmit} value='Inscription' />     
    </div>        

    </form>
  )
}

export default FormInscrption
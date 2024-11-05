import React, { useState } from 'react'

import {Input,SubmitButton} from "./Input"
import {Link} from 'react-router-dom'




const FormEmploye = () => {

    const [data,setData] = useState({
        nom:'',
        prenom:'',
        email:'',
        numTel:'',
        
        

    })

    const [err,setErr] = useState(null)
    
    
    const handleData = (e)=>{
        const {name,value } = e.target

        setData({
            ...data,
            [name]:value
        })

    }

    const hanleSubmit = (e)=>{
        e.preventDefault()
    }
console.log(data);


  return (
    <form action=""
    className=' mt-10 mx-auto w-2/5 border px-4 shadow-emerald-100 shadow-lg'
    >
        <h1 className=' font-bold text-2xl text-blue-400 text-center py-4' >
            Enregistrement des employes
        </h1>
    <div>
    <Input name="nom" type="text" value={data.nom} onChange={handleData} label='Nom' placeholder=' Entrez votre nom' />
    <Input name="prenom" type="text" value={data.prenom} onChange={handleData} label='Prenom' placeholder='Entrez votre prenom' />
    <Input name="email" type="text" value={data.email} onChange={handleData} label='Email' placeholder='Entrez votre adresse mail' />
    <Input name="numTel" type="number" value={data.numTel} onChange={handleData} label='Numero de telephone' placeholder='Entrez votre numero de telephone 656367895' />
    
    
    </div>

    <div className=' my-4 flex  justify-around flex-col '>
    
        <SubmitButton onClick={hanleSubmit} value='Enregistrer' />     
    </div>        

    </form>
  )
}

export default FormEmploye
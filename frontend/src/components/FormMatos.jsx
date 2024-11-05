import React, { useState } from 'react'
import axios from "axios"
import {Input,SubmitButton,Select, Textaria} from "./Input"
import {Link,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'




const FormMatos = () => {
  const navigate = useNavigate()
  const {token} = useSelector((state)=>state.auth)

  const cath = ["","informatique","bureautique",'montage video']
  const typesDeConnectique = [
    '',
    'USB-A',
    'USB-C',
    'HDMI',
    'DisplayPort',
    'VGA',
    'DVI',
    'Ethernet (RJ45)',
    '3.5mm Jack',
    'Optique Toslink',
    'Lightning',
    'Thunderbolt',
    'SATA',
    'M.2',
    'Mini DisplayPort',
    'FireWire'
  ]

  const [data,setData] = useState({
      nom:'',
      marque:'',
      modele:'',
      poids:null,
      quantite:null,
      description:'',   
      typeConnectique:'',
      categorie:'',

  })

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

    for (const [key, value] of Object.entries(data)) {
      if (key !== 'poids' && key !== 'quantite') { 
        if (!value) {
          setErr(`${key} ne peut pas être vide`) 
          return
        }
      
        
      } else if (value === null || value === '') { 
        setErr(`${key} ne peut pas être vide`) 
        return
        
      }
      
    }
    setErr('')


    try {
      const response = await axios.post(' http://localhost:3001/api/materiel/add',data,{
        headers: { authorization: token }
      })

      navigate('/admin/gestionmatos')
      
    } catch (error) {
      console.log(error);
      
    }
    
    
  }


  return (
    <form 
    className=' my-3 flex flex-col gap-4 shadow-lg w-1/2 border px-4 mx-auto mt-12'
    >   
            <h1 className=' font-bold text-2xl text-blue-400 text-center py-4' > Enregistrement de materiel </h1>
                 
        {err && <p className='text-red-500'>{err}</p>}
        <Input name="nom" type="text" value={data.nom} onChange={handleData} label='Nom' placeholder='Entrez le libelle du materiel' />
        <Input name="marque" type="text" value={data.marque} onChange={handleData} label='Marque' placeholder=' entrez la marque du materiel' />
        <Input name="modele" type="text" value={data.modele} onChange={handleData} label='Modele' placeholder=' entrez le modele du materiel' />
        <div className='flex justify-between items-center gap-6'>
          <Input name="quantite" type="number" value={data.quantite} onChange={handleData} label='Quantite' placeholder=' entrez la quntite de materiel en stock' />
          <Input name="poids" type="number" value={data.poids} onChange={handleData} label='Poids' placeholder=' entrez le poids du materiel' />
        </div>

        <div className=' flex justify-between gap-6'>
          <Select name='categorie' value={data.categorie} onChange={handleData} tab={cath} label="categorie" />
          <Select value={data.typeConnectique} onChange={handleData} name='typeConnectique' tab={typesDeConnectique} label="type de connectique" />
        </div>
        <Textaria name='description' label="Description" value={data.description} onChange={handleData} placeholder = " entrez la descrition du materiel" />
        
        <div className=' mb-4 flex'>
                <SubmitButton onClick={hanleSubmit} value='Enregistrer' />    
        </div> 
    
   
    </form>
  )
}

export default FormMatos
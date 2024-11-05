import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ItemSend from './Items/itemSend'
import {Select} from "./Input"
import { IoMdSend } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';



const Panier = () => {

const {user,token} = useSelector((state)=>state.auth)
const tab = ['',"1h","3h","5h","8h","24h","2 jours","3 jours","4 jours","5 jours","6 jours","7 jours"]


const [data,setData] = useState(null)
const [adminRes,setAdminRes] = useState(null)
const[qte,setQte] = useState(null)
const [ok,setOk] = useState(0)
const [hour,setHour] = useState(null)
var panier = JSON.parse(localStorage.getItem('panier')) 

if(!Array.isArray(panier)) return;


const qteFunction = (qte)=>{
  let b = []
  let i
  for(i =1; i<=qte; i++ ) {
    b.push(i)
  }

  return b
}


const handleSup = (id)=>{
 
  
    panier = panier.filter(i=> i._id!==id)

    localStorage.setItem('panier',JSON.stringify(panier))
    setOk((i)=>i+1)
 }

 const clearPanier = () =>{
  localStorage.removeItem('panier')
  setOk((i)=>i+1)
 } 

const {nom,prenom,_id} = user

const sendData = {nom,prenom,_id,hour,panier}

//

const handleSoumettre = async ()=>{
  try {
    const response = await axios.post('http://localhost:3001/api/admin/demandeemprunt',sendData,{
      headers: {
        authorization: token
      }
    })

  

    localStorage.removeItem('panier')
    setOk((i)=>i+1)
    

  } catch (error) {
    console.log(error.message);
    
  }
}


 


  return (
<div   >
  <div className=' flex items-center justify-center px-5 py-5' > 
  <Select value={hour}  onChange={(e)=>setHour(e.target.value)} label={`choisisez la duree de l'emprunt`} className='w-1/4' tab={tab}/> 
    <div className=' w-1/2 flex justify-between'>
        <button onClick={handleSoumettre} className=' my-2 gap-2 flex justify-center items-center font-medium  text-md border px-3 py-1 rounded-md bg-blue-600 text-white'><p>soumettre la demande</p> <IoMdSend /></button>
        <button onClick={clearPanier} className='my-2 gap-2 flex justify-center items-center font-medium text-md border px-3 py-2 rounded-md bg-red-600 text-white' ><p>vider le panier</p><MdDelete /></button>  
    </div> 
  </div>

  <div>
      {
        panier.map((item,index)=>(
          <ItemSend key={index} qte={qteFunction(item.quantite)} qhandleChange={(e)=>setQte(e.target.value)}  qvalue={qte} nom={item.nom} marque={item.marque} modele={item.modele} categorie={item.categorie} typeConnectique={item.typeConnectique} poids={item.poids} handleSup={()=>handleSup(item._id)}/>
        ))
      }
  </div>   
</div>
  )
}

export default Panier
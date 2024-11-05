import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import ItemsAddPanier from '../components/Items/ItemsAddPanier'
import axios from 'axios'
import { useSelector } from 'react-redux'
 
const Home = () => {

  const {user} = useSelector((state)=>state.auth)
  const [lMatos,setLMatos] = useState([])
  let tab = []
  const [search, setSearch] = useState('')
  const panier = []

  const getMatos = async ()=>{
    try {
      const response = await axios.get('http://localhost:3001/api/materiel/getall')
      setLMatos(response.data)
    } catch (error) {
      console.error(error);
      
    }
  } 

  useEffect(()=>{
    getMatos()
  },[])

  tab = tab.concat(lMatos)
  
  const handleAdd = (id)=>{
      const addpanier = tab.find((mato)=>mato._id == id )
      
      if(addpanier && !panier.find((matos)=>matos._id==id) ){
        const newPanier = panier.push(addpanier) 
        localStorage.setItem("panier",JSON.stringify(panier))
      }
 
  }




    tab = tab.filter(t=> t.nom.toLowerCase().includes(search.toLowerCase()))

  
  //console.log(search);
  
  
  
  return (
    <div>
        {
          user.role !== "admin" && <div className='flex flex-col gap-4  border mx-4 pt-5 px-3 h-auto'>
      
          <SearchBar value={search} onChange={(e)=>setSearch(e.target.value)} />
          <div>
            {tab.map((ma,index)=>(
              <ItemsAddPanier handleAdd={()=>handleAdd(ma._id)} key={index} qte={ma.quantite} nom={ma.nom} modele={ma.modele} marque={ma.marque} typeConnectique={ma.typeConnectique} poids={ma.poids} categorie={ma.categorie}  />
            ))}
          </div>
            
        </div>
        }
    </div>
  )
}

export default Home
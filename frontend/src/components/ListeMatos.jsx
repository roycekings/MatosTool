import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import ItemsModSup from './Items/ItemsModSup';

const ListeMatos = () => {
    const {token} = useSelector((state)=>state.auth) 
    const[listeMatos,setListeMatos] = useState([])

    const getListeMatos = async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/materiel/getall', {
            headers: {
              authorization: token,
            },
          });

          await setListeMatos(response.data);
          console.log(response.data);
          
          
      } catch (error) {
          console.error('Erreur lors de la récupération des matériels :', error);
        }
      };





    const handleDelete = async (id) => {
        try {
            const response  = await axios.put(`http://localhost:3001/api/materiel/delete/${id}`)
            getListeMatos()
        } catch (error) {
            console.error(error);
            
        }
   
    }
console.log(listeMatos.length);


    useEffect(() => {
        
        getListeMatos();
      }, []);

    
      

  return (
    <div>
     {listeMatos.map((matos,index)=>(
        <ItemsModSup  key={index} nom={matos.nom} marque={matos.marque} typeConnect={matos.typeConnectique} modele={matos.modele} handleDelete={()=>handleDelete(matos._id)} link={`/materiel/update/${matos._id}`} />
     ))}
    </div>
  )
}

export default ListeMatos
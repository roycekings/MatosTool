import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import FormMatos from '../components/FormMatos';
const GestMatos = () => {

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
    <div className=' py-8'>
        <h2 className=' text-2xl font-bold text-blue-600 italic py-2 text-center'>Gestion du materiel</h2>

        <FormMatos/>
        <table className='  w-full border mt-3 py-2'>
            <thead className='  capitalize font-semibold text-lg text-white'>
                <tr  className=' bg-blue-600' >
                    <th className=' py-1' >nom</th>
                    <th>marque</th>
                    <th>modele</th>
                    <th>type de connectique</th>
                    <th>poids</th>
                    <th>quantite</th>
                    <th>quantite disponible</th>
                    <th>categorie</th>
                    <th>description</th>
                    <th className=' text-green-500 bg-green-50'>modifier</th>
                    <th className=' text-red-500 bg-red-50'>supprimer</th>
                </tr>
            </thead>
            <tbody>
               {
                listeMatos.map((m,index)=>(
                    <tr>
                       <td className='border text-center text-sm p-2' >{m.nom}</td>
                       <td className=' text-center border  text-sm p-2'>{m.marque}</td>
                       <td className=' text-center border text-sm p-2'>{m.modele}</td>
                       <td className=' text-center border text-sm p-2'>{m.typeConnectique}</td>
                       <td className=' text-center border text-sm p-2'>{m.poids}</td>
                       <td className=' text-center border text-sm p-2'>{m.quantite}</td>
                       <td className=' text-center border text-sm p-2'>{m.quantiteDisponible}</td>
                       <td className=' text-center border text-sm p-2'>{m.categorie}</td>
                       <td className=' text-center border text-sm p-2'>{m.description}</td>
                       <td className='cursor-pointer text-white bg-green-500  text-center border text-sm p-2'><Link to={`/materiel/update/${m._id}`} >Modifier</Link></td>       
                       <td onClick={()=>handleDelete(m._id)} className=' cursor-pointer text-white bg-red-500  text-center border text-sm p-2'>Supprimer</td>
                       
                      
                     
                    </tr>
                ))
               }
            </tbody>
        </table>
    </div>
  )
}

export default GestMatos
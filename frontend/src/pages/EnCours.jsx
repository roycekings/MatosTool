import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import ItemAdminE from '../components/Items/ItemAdminE'

const EnCours = () => {


    const {token} = useSelector((state)=>state.auth)
  const [data,setData] = useState([])
  const getEnCours = async ()=>{
      try {
          const response = await axios.get('http://localhost:3001/api/admin/getencour',{
              headers: {
                  authorization: token
              }
          })
          setData(response.data) 
          return response.data
      } catch (error) {
          console.log(error.message);
      }
  }

  useEffect(()=>{
    getEnCours()
      
  },[])

  const handleRemettre = async(id)=>{
    try {
      const response = await axios.put(`http://localhost:3001/api/admin/demandeemprunt/remettre/${id}`,{status: 'expire'},{
          headers: {
              authorization: token
          }
      })   
      console.log(response.data);
      
      getEnCours()
      
  } catch (error) {
      console.error(error.message);
     
  }
  }



  return (
    <div className=' px-2 flex flex-col gap-2 text-white '>
        <h1 className=' font-bold text-3xl text-center py-3'>
           Liste des emprunts en cours
        </h1>
       {
        data.map((d,index)=>(
          
          <div key={index} className=' mb-10 py-1 my-1 border shadow px-2 rounded'>
          <div className=' flex justify-between'>
              <p>Id de l'emprunt: {d._id}</p>
              <p>Info utilisateur: {d.data.nom} {d.data.nom}</p>
              <p>Status: {d.status}</p>
              <p>Duree: {d.data.hour}</p>
          </div>
          
            <table className=' w-full'>
                <thead >
                    <tr className=' text-white capitalize border rounded bg-blue-500' >
                      <th>idMateriel</th>
                      <th className='  py-2'>nom</th>
                      <th>marque</th>
                      <th>modele</th>
                      <th>type connectique</th>
                      <th>categorie</th>

                    </tr>
                </thead>

                <tbody>
                  {
                    d.data.panier.map((i,ii)=>(
                      <tr key={ii} className=' border text-center'>
                      <td> {i._id} </td>
                      <td className=' px-1 py-2'>{i.nom}</td>
                      <td>{i.marque}</td>
                      <td>{i.modele}</td>
                      <td>{i.typeConnectique}</td>
                      <td>{i.categorie}</td>
                    </tr>
                    ))
                  }
                </tbody>

            </table>
            <button onClick={()=>handleRemettre(d._id)} className=' my-2 float-right px-2 py-1 rounded shadow bg-green-500 text-white '>Marquer comme rendu</button>
        </div>
        ))
       }
    </div>
  )
}

export default EnCours
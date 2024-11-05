import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import ItemAdmin from '../components/Items/ItemAdminH'
const Historique = () => {

    
  const {token} = useSelector((state)=>state.auth)
  const [ok,setOk] = useState(0)
  const [data,setData] = useState([])
  const getHistorique = async ()=>{
      try {
          const response = await axios.get('http://localhost:3001/api/admin/gethistorique',{
              headers: {
                  authorization: token
              }
          })
          console.log(response.data);
          setData(response.data)
          return response.data
      } catch (error) {
          console.log(error.message);
      }
  }

  useEffect(()=>{
    getHistorique()
      
  },[])

  return (
    <div>
        <h1 className=' font-bold text-3xl text-blue-500 text-center py-3'>
          Historique des emprunt
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
            
        </div>
        ))
       }
    </div>
  )
}

export default Historique
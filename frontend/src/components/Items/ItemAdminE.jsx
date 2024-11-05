import React from 'react'

const ItemAdminE = ({nomUser,prenomUser,status,_id,hour,handleR, nom,marque,modele,poids,categorie,typeConnectique}) => {
  return (
    <div>
        <div className=' font-semibold ml-4'>
            Info utilisateur : {nomUser} {prenomUser}
        </div>
<div className='w-full border h-auto justify-between items-center flex bg-transparent  py-3 px-9 shadow-md' >
    
    <div className=' w-4/5  grid grid-cols-6'>

      <div className=' flex flex-col items-center gap-6 '>
        <p className=' capitalize text-xl font-bold text-blue-600'>nom</p> 
        <p className=' font-semibold'>{nom}</p>
      </div>

      <div className=' flex flex-col items-center gap-6 '>
        <p className=' capitalize text-xl font-bold text-blue-600'>Marque</p> 
        <p className=' font-semibold'>{marque}</p>
      </div>

      <div className=' flex flex-col items-center gap-6 '>
        <p className=' capitalize text-xl font-bold text-blue-600'>modele</p> 
        <p className=' font-semibold'>{modele}</p>
      </div>

      <div className=' flex flex-col items-center gap-6 '>
        <p className=' capitalize text-xl font-bold text-blue-600'>poids</p> 
        <p className=' font-semibold'>{poids}kg</p>
      </div>

      <div className=' flex flex-col items-center gap-6 '>
        <p className=' capitalize text-xl font-bold text-center text-blue-600'>connectique</p> 
        <p className=' font-semibold'>{typeConnectique}</p>
      </div>

      <div className=' flex flex-col items-center gap-6 '>
        <p className=' capitalize text-xl font-bold text-blue-600'>categorie</p> 
        <p className=' font-semibold'>{categorie}</p>
      </div>

   


    </div>

      <div className=' flex flex-col gap-2'>
      <p className='border px-3 py-2 bg-slate-700 text-sky-50 rounded shadow-md font-semibold'><span className='font-normal'>id:</span> {_id}</p>
      <p className='border px-3 py-2 bg-slate-700 text-sky-50 rounded shadow-md font-semibold'><span className='font-normal'>Durée:</span> {hour}</p>
      <p className='border px-3 py-2 bg-slate-700 text-sky-50 rounded shadow-md font-semibold'><span className='font-normal'>Status:</span> {status}</p>
        
      </div>
  </div>
  <div className=' float-right mr-4 py-1'>
    <button onClick={handleR} className=' border px-3 py-1 bg-green-500  text-white rounded  '>Marquer comme rendu</button>
    
  </div>

    </div>
  )
}

export default ItemAdminE
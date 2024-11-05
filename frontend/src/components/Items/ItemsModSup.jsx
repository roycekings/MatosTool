import React from 'react'
import {Link} from 'react-router-dom'
const ItemsModSup = ({nom,marque,modele,typeConnect,handleDelete,link}) => {
    return (
        <div className='w-full h-auto  p-2 border rounded-md m-2 shadow-md flex justify-between'>
          <div className=' flex  w-3/4 justify-around'>
         
          
            <p className=' text-center' ><span className=' uppercase font-bold text-blue-500'>nom:</span> {nom}</p>
            
          
         
          <p className=' text-center' ><span className=' capitalize font-bold text-blue-500'>marque:</span> {marque}</p>
            
      
            <p className=' text-center' ><span className=' capitalize font-bold text-blue-500'>modele:</span> {modele}</p>
            
          
            <p className=' text-center' ><span className=' capitalize font-bold text-blue-500'>type de connectique:</span> {typeConnect}</p>
            
          
            
          </div>
         <div className='flex gap-2 items-center pr-2'>
            <Link to={link} className=' h-9  px-3 py-1 bg-green-500 text-white font-medium rounded-md hover:bg-green-800'>modifier</Link>
            <button onClick={handleDelete} className=' h-9  px-3 py-1 bg-red-500 text-white font-medium rounded-md hover:bg-red-600' >supprimer</button>
         </div>
        </div>
      )
}

export default ItemsModSup
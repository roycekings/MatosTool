import React from 'react'
import { MdHardware } from "react-icons/md"; 
import { FaUser } from "react-icons/fa";
import { CiFolderOff } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { Link } from 'react-router-dom';

const HomeAdmin = () => {
  return (
    <div >
        <div className='h-auto w-2/3 mx-auto  pt-28 bg-transparent   shadow-md p-3 rounded grid grid-cols-3 gap-4'>
           
            <Link to = '/admin/gestionuser'  className=' hover:bg-green-700 transition duration-700 flex items-center gap-2 justify-center font-semibold text-lg text-white shadow-xl rounded border h-44 bg-blue-600 '>
                <p>Gerer les utilisateurs</p>
                <FaUser />
            </Link>

            <Link to = '/admin/gestionmatos' className=' hover:bg-green-700 transition duration-700 flex items-center gap-2 justify-center font-semibold text-lg text-white shadow-xl rounded border h-44 bg-blue-600 '>
                <p>Gerer le materiel</p>
                <MdHardware />
            </Link>

            <Link to = '/admin/gestionemprunt' className=' hover:bg-green-700 transition duration-700 flex items-center gap-2 justify-center font-semibold text-lg text-white shadow-xl rounded border h-44 bg-blue-600 '>
                <p>Gerer les demande d'emprunt</p>
                <CiFolderOn />
            </Link>

            <Link to = '/admin/gestionencours' className=' hover:bg-green-700 transition duration-700 flex items-center gap-2 justify-center font-semibold text-lg text-white shadow-xl rounded border h-44 bg-blue-600 '>
                <p>Gerer les emprunt en cours</p>
            </Link>

            <Link to = 'historique' className=' hover:bg-green-700 transition duration-700 flex items-center gap-2 justify-center font-semibold text-lg text-white shadow-xl rounded border h-44 bg-blue-600 '>
                <p>Historique</p>
                <CiFolderOff />
            </Link>
           
        </div>
    </div>
  )
}

export default HomeAdmin
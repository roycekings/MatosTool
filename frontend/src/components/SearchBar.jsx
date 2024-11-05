import React from 'react'

import { FaSearch } from "react-icons/fa";

const SearchBar = ({value,onChange,handleSearch}) => {

  return (
    <div className='flex gap-2 w-full  justify-center'  >
      <input value={value} onChange={onChange} type="search" className='w-1/3 outline-none border px-2 py-2 rounded-md' placeholder='recherche ...' />
      <button onClick={handleSearch} className=' border px-3 rounded-md text-white bg-blue-600 py-2 flex items-center gap-2 justify-center'><p>Recherche</p> <FaSearch /></button>
      
     
    </div>
  )
}

export default SearchBar
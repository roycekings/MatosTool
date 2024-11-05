import React from 'react'
import bg  from './bg.jpg'
const Test1 = () => {

  return (
    <>
    <div className=' bg-transparent h-screen w-full mt-2 flex flex-col justify-between' style={{
      backgroundImage:`url(${bg})`,
      backgroundSize: "cover"

      }}>
     
     <div className=' pl-4 mt-36'>
        <h1 className='text-white text-5xl font-bold'>Bienvenue sur <span className=' text-blue-400 italic'>MediaTool</span> votre</h1>
        <p className=' text-white text-2xl'>veuillez vous inscrire ou vous connecter pour commencer </p>
     </div>
     
    </div>
    <div className=' text-center py-2'>
    copyrigth (c) 2024
   </div>
    </>
  )
}

export default Test1
import React, { Children } from 'react'

export const Input = ({label,name,type,value,onChange,placeholder}) => {
  return (
    <div className='flex w-full flex-col justify-center'>
        <label
         htmlFor=""
         className='text-lg font-medium'
         >
            
            {label}

        </label>

        <input
        className=' shadow-blue-100 shadow w-full rounded-lg  bg-transparent outline-blue-400 px-3 py-2 border ' 
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        
        />
    </div>
  )
}


export const SubmitButton = ({value,onClick})=>{

    return(
        <input
        className=' transition duration-1000 mx-auto bg-blue-500 text-white px-3 py-2  border rounded-lg hover:bg-slate-900 '  
        type="submit" 
        value={value}
        onClick={onClick}
        />
    )

}



export const Select = ({ value, onChange, label, tab = [],name,className }) => {
  return (
    <div className='flex w-full flex-col'>
      <label className='font-semibold text-lg' htmlFor="">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className={`text-md font-semibold text-blue-900 outline-none border rounded-lg px-2 py-1 ${className}`}
        name={name}
      >
        {tab.map((data, index) => (
          <option key={index} value={data}>
            {data}
          </option>
        ))}
      </select>
    </div>
  );
}



export const Textaria = ({placeholder,value,onChange,label,name})=>{
  
  
  return(
    <div className=' flex flex-col gap-2'>
      <label htmlFor="" className=' font-semibold text-lg'>{label}</label>
      <textarea
      name={name} 
      className='w-full font-medium border outline-none px-2 bg-transparent' 
      rows={4} 
      value={value}
      onChange={onChange}
    placeholder={placeholder}
      id=""></textarea>
    </div>
  )
}

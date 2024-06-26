import React from 'react'

const Input = ({type="text", label, ...props}) => {

  return (
    <>
    {label && <label className='block mt-3 mb-1'>{label}</label>}
    <input {...props} type={type} className='px-2 py-2 rounded-md bg-white border border-gray-500  outline-none'/>
    </>
  )
}

export default Input
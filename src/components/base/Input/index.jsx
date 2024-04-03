import React from 'react'

const Input = ({label, type = 'text', value, name, onChange, nomor }) => {
  return (
    <div className='flex flex-col mb-4'>
      { label && <label className='text-gray-700 text-sm'>{label}</label> }
      <input type={type} value={value} name={name} onChange={onChange} className='border border-gray-600 rounded-sm bg-white px-4 py-2' />
    </div>
  )
}
// Input.defaultProps = {
//   label: 'test'
// }
export default Input
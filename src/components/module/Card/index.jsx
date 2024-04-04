import React from 'react'

const Card = ({title, photo}) => {
  return (
    <div className='w-52 h-72 border border-gray-600 rounded-lg overflow-hidden'>
      <div className='w-full h-36'>
        <img src={photo} alt="photo" className='w-full h-full object-cover' />
      </div>
      <div className='px-4 py-4'>
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default Card
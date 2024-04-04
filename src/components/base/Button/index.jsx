import React from 'react'

const Button = ({children, onClick, className=''}) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-md text-white ${className ? className : 'bg-yellow-500'}`}>{children}</button>
  )
}

export default Button
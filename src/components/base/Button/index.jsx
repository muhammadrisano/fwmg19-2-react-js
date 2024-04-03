import React from 'react'
import './button.css'

const Button = ({submit, children, name}) => {
  const myName = 'risano'


  return (
    <>
    {name === 'risano' ? <h1>helo risano</h1> : <h1>helo bro...</h1>}
    <button className='button' onClick={()=>submit(myName)}>{children}</button>
    </>
  )
}

export default Button
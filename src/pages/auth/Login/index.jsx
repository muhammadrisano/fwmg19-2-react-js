import React, { useState } from 'react'
import {Link, useNavigate, NavLink} from 'react-router-dom'
import Input from '../../../components/Input'

const Login = () => {
  const navigate = useNavigate()
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleLogin = ()=>{
    // cek username dan password apakah benar
    // kalau benar
    // navigasi ke profile
    alert(`email saya = ${form.email} dan password saya = ${form.password}`)
    navigate('/main/profile')

  }
  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className='w-80 mx-auto'>
      <div>
        <h1 className='text-center font-bold text-xl text-black'>page Login</h1>
      </div>
      <div>
        <Input 
        value={form.email} 
        onChange={handleChange} 
        label="Email :"
        name='email'
        nomor={['noding', 'joging']}
        />
        <Input
          type='password'
          value={form.password}
          onChange={handleChange}
          name="password"
          label="password :"
        />
      </div>
      
      <NavLink to="/">kembali ke home</NavLink>  
      <button className='px-3 py-2 rounded bg-red-400 text-white' onClick={handleLogin}>login</button>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import {Link, useNavigate, NavLink} from 'react-router-dom'
import Input from '../../../components/base/Input'
import Button from '../../../components/base/Button'
import api from '../../../configs/api'

const Register = () => {
  const navigate = useNavigate()
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  })

  const handleRegister = ()=>{
    api.post('/workers/register', {
      email: form.email,
      password: form.password,
      name: form.name,
      phone: form.phone
    })
    .then((res)=>{
      alert('selamat berhasil login')
      navigate('/login')    
    })
    .catch((err)=>{
      console.log(err.response);
      alert('anda gagal register')
    })
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
        <h1 className='text-center font-bold text-xl text-black'>page Register</h1>
      </div>
      <div>
        <Input 
        value={form.email} 
        type='email'
        onChange={handleChange} 
        label="Email :"
        name='email'
        placeholder="Email"
        />
        <Input
          type='password'
          value={form.password}
          onChange={handleChange}
          name="password"
          label="password :"
          placeholder="*****"
          test-id="test"
        />
        <Input
          type='text'
          value={form.name}
          name="name"
          label="Nama Lengkap"
          placeholder="Nama Lengkap"
          onChange={handleChange}
        />
         <Input
          type='text'
          value={form.phone}
          name="phone"
          label="Phone number"
          placeholder="Phone number"
          onChange={handleChange}
        />
      </div>
      
    
    <Button onClick={handleRegister} className='bg-red-700 mt-7'>Register</Button>
    </div>
  )
}

export default Register
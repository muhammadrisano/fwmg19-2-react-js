import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/auth/Login'
import Home from './pages/main/Home'
import Product from './pages/main/Product'
import Profile from './pages/main/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>}/>
        <Route path='/main/product' element={<Product/>} />
        <Route path='/main/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
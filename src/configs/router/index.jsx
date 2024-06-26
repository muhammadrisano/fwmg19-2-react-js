import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../pages/auth/Login'
import Register from '../../pages/auth/Register'
import Main from '../../pages/main'
import Home from '../../pages/main/Home'
import Profile from '../../pages/main/Profile'
import Product from '../../pages/main/Product'
import Skill from '../../pages/main/Skill'
import Portfolio from '../../pages/main/Portfolio'
import DetailAlbum from '../../pages/main/DetailAlbum'
import Latihan from '../../pages/Latihan'
import ProtectedRoute from '../../components/module/ProtectedRoute'

const MainRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>}/>
      <Route path='/latihan' element={<Latihan/>}/>
      {/* <Route path='/' element={<Home/>}/>
      <Route path='/main/product' element={<Product/>} />
      <Route path='/main/profile' element={<Profile/>} /> */}
      <Route path="/main" element={ <ProtectedRoute><Main /></ProtectedRoute>}>
        <Route path="home" element={
          <Home />
          }/>
        <Route path="profile" element={
        <Profile />
        } />
        <Route path="product" element={<Product />} />
        <Route path="skill" element={<Skill/>} />
        <Route path="porto" element={<Portfolio/>} />
        <Route path="albums/:albumId" element={<DetailAlbum />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default MainRouter
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../../components/module/Navbar'
import Footer from '../../components/module/Footer'

const Main = () => {
  return (
    <div>
      <Navbar/>
        <Outlet />
      <Footer/>
    </div>

  )
}

export default Main
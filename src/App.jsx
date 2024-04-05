import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Home from "./pages/main/Home";
import Product from "./pages/main/Product";
import Profile from "./pages/main/Profile";
import Main from "./pages/main";
import Register from "./pages/auth/Register";
import Skill from "./pages/main/Skill";
import DetailAlbum from "./pages/main/DetailAlbum";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        {/* <Route path='/' element={<Home/>}/>
        <Route path='/main/product' element={<Product/>} />
        <Route path='/main/profile' element={<Profile/>} /> */}
        <Route path="/main" element={<Main />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="product" element={<Product />} />
          <Route path="skill" element={<Skill/>} />
          <Route path="albums/:albumId" element={<DetailAlbum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

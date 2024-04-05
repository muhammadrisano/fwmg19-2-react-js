import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import api from "../../../configs/api";

const Login = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const handleLogin = (e)=>{
    e.preventDefault()
    api({
      method: 'POST',
      url: `/auth/login`,
      data: {
        email: form.email,
        password: form.password
      }
    })
    .then((res)=>{
      const {token, refreshToken} = res.data.data
      localStorage.setItem('token', token)
      localStorage.setItem('resfreshToken', refreshToken)
      navigate('/main/profile')
    })
    .catch((err)=>{
      console.log(err.response);
    })
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="w-80 mx-auto">
      <div>
        <h1 className="text-center font-bold text-xl text-black">page Login</h1>
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <Input
            value={form.email}
            onChange={handleChange}
            label="Email :"
            name="email"
            placeholder="Email"
          />
          <Input
            type="password"
            value={form.password}
            onChange={handleChange}
            name="password"
            label="password :"
            placeholder="*****"
            test-id="test"
          />
        </div>

        <Button className="bg-red-700">Login</Button>
      </form>
    </div>
  );
};

export default Login;

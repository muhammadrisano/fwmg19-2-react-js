import axios from "axios";
import React, { useState } from "react";
import api from "../../../configs/api";

const Portfolio = () => {
  const [form, setForm] = useState({
    application_name: '',
    link_repository: '',
    application: '',
    image: ''
  })
  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const hanldeAddPorto = ()=>{
    api.post('/portfolio', form )
    // .then
  }

  const handleUploadImage = (e)=>{
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    api.post('/upload', formData)
    .then((res)=>{
      const {file_url} = res.data.data
      setForm({...form, image: file_url})
    })
  }
  return (
    <div>
      <h2>halaman add portfolio</h2>
      <ul>
        <li>
          <input type="text" name="application_name" placeholder="Nama app" value={form.application_name} onChange={handleChange} />
        </li>
        <li>
          <input type="text" name="link_repository" placeholder="Link Repo" value={form.link_repository} onChange={handleChange} />
        </li>
        <li>
          <input type="text" name="application" placeholder="Type App" value={form.application} onChange={handleChange} />
        </li>
        <li>
          {form.image && <img src={form.image} />}
          <input type="file" placeholder="Nama app" onChange={handleUploadImage} />
        </li>
      </ul>
      <button onClick={hanldeAddPorto} className="py-3 px-6 rounded bg-yellow-200 mt-10">
        Add Porto
      </button>
    </div>
  );
};

export default Portfolio;

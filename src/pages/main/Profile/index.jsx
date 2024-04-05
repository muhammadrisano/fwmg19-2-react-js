import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from '../../../components/module/Card'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  const getAlbums = ()=>{
    setLoading(true)
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/photos',
    })
    .then((res)=>{
      const result = res.data
      setLoading(false)
      setAlbums(result)
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false)
    })
  }
  const handleNavigate = (id) =>{
    navigate(`/main/albums/${id}`)
  }
  useEffect(()=>{
    getAlbums()
  },[])
  return (
    <div>
      <h2 className='text-3xl text-center mb-4'>Halamn Profile</h2>
      <p>menampilkan semua albums</p>
      {loading && <p className='text-2xl text-red-800'>Loadingg.....</p>}
      <div className='flex flex-wrap gap-3'>
          {albums.map((item)=>(
            <Card title={item.title} photo={item.thumbnailUrl} onClick={()=>handleNavigate(item.id)}/>
          ))}
      </div>
    </div>
  )
}

export default Profile
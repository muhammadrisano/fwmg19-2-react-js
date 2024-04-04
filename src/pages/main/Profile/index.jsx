import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from '../../../components/module/Card'

const Profile = () => {
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(false)


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
            <Card title={item.title} photo={item.thumbnailUrl}/>
          ))}
      </div>
    </div>
  )
}

export default Profile
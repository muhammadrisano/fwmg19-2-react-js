import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Card from '../../../components/module/Card'
import { useNavigate, useLocation } from 'react-router-dom'
import api from '../../../configs/api'

const Profile = () => {
  const navigate = useNavigate()
  // const {state} = useLocation()
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(false)
  const [params, setParams] = useState({
    limit: 10,
    page: 1,
    search: ''
  })


  const getAlbums = ()=>{
    setLoading(true)
    api.get('/workers', {
      params:{
        limit: params.limit,
        page: params.page,
        ...(params.search ? {search: params.search}: {})
      }
    })
    // axios({
    //   method: 'GET',
    //   url: 'https://jsonplaceholder.typicode.com/test',
    //   params
    // })
    // .then((res)=>{
    //   const result = res.data
    //   setLoading(false)params
    //   setAlbums(result)
    // })
    // .catch((err)=>{
    //   console.log(err);
    //   setLoading(false)
    // })
  }
  const handleNavigate = (id) =>{
    navigate(`/main/albums/${id}`)
  }
  const handlePrev = ()=>{
    setParams({
      ...params,
      page: params.page - 1
    })
  }
  const handleNext = ()=>{
    setParams({
      ...params,
      page: params.page + 1
    })
  }
  useEffect(()=>{
    getAlbums()
  },[params])

  const handleSearch = (e)=>{
    setParams({
      ...params,
      search: e.target.value
    })
  }
  return (
    <div>
      <h2 className='text-3xl text-center mb-4'>Halamn Profile</h2>
      {/* <p>menampilkan semua albums profile = {state.name}</p> */}
      <input type="text" name="search" onChange={handleSearch}/>
      {loading && <p className='text-2xl text-red-800'>Loadingg.....</p>}
      <div className='flex flex-wrap gap-3'>
          {albums.map((item)=>(
            <Card title={item.title} photo={item.thumbnailUrl} onClick={()=>handleNavigate(item.id)}/>
          ))}
      </div>
      <button onClick={handlePrev} className='px-3 py-2 rounded bg-yellow-200 m-2'>Prev</button>
      {params.page}
      <button onClick={handleNext} className='px-3 py-2 rounded bg-yellow-200 m-2'>Next</button>
    </div>
  )
}

export default Profile
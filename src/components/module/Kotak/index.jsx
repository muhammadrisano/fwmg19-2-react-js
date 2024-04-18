import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { changeName } from '../../../configs/redux/action/mainAction'

const Kotak = ({hobi, saveName}) => {

  const dispatch = useDispatch()
  const {name, nilai} = useSelector((state)=>state.main)
  const [text, setText] = useState('')
  const [count, setCount] = useState(0)
  const handleIncement = ()=>{
    setCount(count + 1)
  }
  const hanlde3xIncrement = ()=>{
    setCount((current)=> current + 1)
    setCount((current)=> current + 1)
    setCount((current)=> current + 1)

  }
  const handleSimpanLS = ()=>{
    localStorage.setItem('name', text)
  }

  const handleHapusLS = ()=>{
    localStorage.removeItem('name')
  }

  const handleSaveName= ()=>{
    dispatch(changeName(text))
  } 
    return (
      <div className='container mx-auto border-2 border-gray-800 bg-slate-400 rounded-lg p-4'>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className='border rounded-sm' />
        <button className='px-3 py-1 rounded-md bg-yellow-300' onClick={handleSaveName}>Simpan</button>
        <p>hobi saya {hobi}</p>
        <p className='text-lg font-medium'>Nilai Count: {count}</p>
        <button onClick={handleIncement} className='py-2 px-3 rounded-md bg-red-500 mx-2' >Increment</button>
        <button onClick={hanlde3xIncrement} className='py-2 px-3 rounded-md bg-red-500 mx-2' >3x Increment</button>
      <button onClick={handleSimpanLS} className='px-2 py1 rounded-sm bg-blue-500'>Simpan localstorage</button>
      <button onClick={handleHapusLS} className='px-2 py1 rounded-sm bg-blue-500'>delete localstorage</button>
      <p>name dilocalstorage = {localStorage.getItem('name')}</p>
      <p>isi state globa di child compenent = {name}</p>
      <p>isi nilai state global component = {nilai}</p>
     </div>
    )

}

export default Kotak
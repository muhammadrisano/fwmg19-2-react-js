import React, { useState } from "react";
import Kotak from "../../components/module/Kotak";
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../../configs/redux/action/mainAction'

const Latihan = () => {
  const dispatch = useDispatch()
  const {name:nameGlo, nilai} = useSelector((state)=> state.main)
  const [name, setName] = useState("");
  const biodata = {
    hobi: 'ngoding',
    address: {
      kota: 'padang'
    },
  };

  const saveName = (val) => {
    setName(val);
  };
  const handleIncement = ()=>{
    dispatch(increment())
  }
  const handleDecrement = ()=>{
    dispatch(decrement())
  }
  const hobi = "ngoding";
  return (
    <div>
      <p>isi state global = { nameGlo}</p>
      {/* {name ? <h3>Nama saya adalah : {name}</h3> : <p>maaf name kosong</p>} */}
      {/* {name && <h3>Nama saya adalah : {name}</h3>}
      
      <p>saya berasala dari kota = {biodata?.address?.kota || '-'}</p>
      <p>saya berasala dari kota = {(biodata && biodata.address) ? biodata.address.kota : '-'}</p> */}
      <button className="px-2 py-1 bg-blue-400 rounded-sm" onClick={handleIncement}>Increment</button>
      {/* <p>nilai = {nilai}</p> */}
      <button className="px-2 py-1 bg-blue-400 rounded-sm" onClick={handleDecrement}>Decrement</button>
      <Kotak saveName={saveName} name={name} hobi={hobi} />
    </div>
  );
};

export default Latihan;

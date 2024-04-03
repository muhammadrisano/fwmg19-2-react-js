import { Fragment, useEffect, useState } from "react";
import Button from "./components/Button/index";
import Card from "./components/Card";
import styles from './components/Card/card.module.css'
const App = () => {
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0)


  useEffect(() => {
    alert("selamat data");

    
  }, [total]);

  const handleSubmit = (name) => {
    // alert('helo world')
    setName("budi");
    
  };
  return (
    <>
      <h2 className="text-2xl text-red-600">Nama Saya = {name}</h2>
      <h1>helo world</h1>
      <p>helo bro...</p>
      <Button submit={handleSubmit}>simpan</Button>
      <h3>Total Nilai = {total}</h3>
      <button className="button" onClick={()=>setTotal(total + 1)}>increment</button>
      <button className={styles.btnPrimary} onClick={()=>setTotal(total - 1)}>decrement</button>
      <Card/>
    </>
  );
};

export default App;

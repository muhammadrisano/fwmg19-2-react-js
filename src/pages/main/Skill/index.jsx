import React, { useState, useEffect } from "react";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import api from "../../../configs/api";

const Skill = () => {
  const [skill, setSkill] = useState("");
  const [mySkill, setMySkill] = useState([]);

  const getSkill = ()=>{
    api.get('/skills')
    .then((res)=>{
     const skills = res.data.data
     setMySkill(skills)
    })
  }

  const handleAddSkll = () => {
    api
      .post(
        `/skills`,
        { skill_name: skill }
      )
      .then((res) => {
        alert("berhasil menambahkan skill");
        setSkill("");
        getSkill()
      })
      .catch((err) => {
        console.log(err.response);
      });
  };


  useEffect(()=>{
    getSkill()
  }, [])

  return (
    <div>
      <h3>halaman add skill</h3>
      <Input
        type="text"
        label="Skill Anda: "
        placeholder="Skill"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />
      <Button onClick={handleAddSkll}>Add skill</Button>

      <hr />
      <p>list skill kamu</p>
      <ul>
        {mySkill.map((item)=>(
          <li key={item.id}>{item.skill_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;

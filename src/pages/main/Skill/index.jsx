import React, { useState, useEffect } from "react";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import axios from "axios";

const Skill = () => {
  const [skill, setSkill] = useState("");
  const [mySkill, setMySkill] = useState([]);

  const getSkill = ()=>{
    const token = localStorage.getItem("token");
    axios.get('https://fwm17-be-peword.vercel.app/v1/skills', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then((res)=>{
     const skills = res.data.data
     setMySkill(skills)
    })
  }

  const handleAddSkll = () => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "https://fwm17-be-peword.vercel.app/v1/skills",
        { skill_name: skill },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        alert("berhasil menambahkan skill");
        setSkill("");
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

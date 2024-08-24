"use client"
import axios from "axios";
import { useRouter } from 'next/navigation';
import React from 'react';
import style from "./user.module.css";

const UserProf = () => {
  const router = useRouter();
  const logout = async() =>{
    try {
      await axios.get('./api/users/logout');
      console.log("logout successfull.");
      router.push("http://localhost:3000");
      
    } catch (error:any) {
      console.log(error.message)
    }
  }

  return (
    <>
      <div className={style.userProfileBox}>
      <label>UserName</label>
      <label>email</label>
      <button onClick={logout} className={style.logOutBtn}>Log-Out</button>
      </div>
          </>
  )
}

export default UserProf
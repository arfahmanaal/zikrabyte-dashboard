"use client"
import axios from "axios";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import style from "./user.module.css";

const UserProf = () => {
  const router = useRouter();
  const [data, setData] = useState<{ username: string; email: string }>({
    username: "Loading...",
    email: "Loading...",
  });
  const logout = async() =>{
    try {
      await axios.get('./api/users/logout');
      router.push("http://localhost:3000");
      
    } catch (error:any) {
      console.log(error.message)
    }
  }
  const getUserDetails = async () => {
    try {
      const res = await axios.get('./api/users/user');
      setData({
        username: res.data.data.username,
        email: res.data.data.email,
      });
    } catch (error: any) {
      console.log("Error fetching user details:", error.message);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []); 

  return (    
    <>
      <div className={style.userProfileBox}>
      <label>{data.username}</label>
      <label>{data.email}</label> 
      <button onClick={logout} className={style.logOutBtn}>Log-Out</button>
      </div>
          </>
  )
}

export default UserProf
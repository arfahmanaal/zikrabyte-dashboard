"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';
import style from './login.module.css';
import Axios from 'axios';
import { useRouter } from 'next/navigation';
const Page = () =>{
  const router = useRouter();
  const [user ,setUser] = useState({
    email:"",
    password:""
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {

    const { name, value } = event.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
};

  const onLogin =async(event: FormEvent) =>{
    event.preventDefault();

    try {
      console.log("attempting to log in..")
      const response = await Axios.post("/api/users/login", user);
      console.log("login successfull", response.data);
      router.push("/dashboard"); 
    } catch (error:any){
      console.log("login failed", error.message);
    }
  }
  return (
    <div className={style.loginContainer}>
      <form className={style.inputForm} onSubmit={onLogin}>
        <h2 className={style.topText}>Login to Zikrabyte</h2>
        <input id='email' name='email' type='email' placeholder='Enter Your email' required onChange={handleInputChange} className={style.inputs}/>
        <input id='password' name='password' type='password' placeholder='Enter Password' onChange={handleInputChange} className={style.inputs}/>
        <input type='submit' value={"Submit"} className={style.submitBtn} />
      </form>
    </div>
  );
};

export default Page;
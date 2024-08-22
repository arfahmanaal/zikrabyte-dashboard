"use client"
import React, { useState, FormEvent, ChangeEvent, useContext } from 'react';
import style from './login.module.css';
import Axios from 'axios';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [user, setUserState] = useState({ email: "", password: "" });
  const [alertDiv, setAlertDiv] = useState("alertHider");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAlertDiv("alertHider");
    const { name, value } = event.target;
    setUserState(prevUser => ({ ...prevUser, [name]: value }));
  };

  const onLogin = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await Axios.post("/api/users/login", user);
      router.push("http://localhost:3000");
    } catch (error: any) {
      setAlertDiv("failAlertDiv");
      console.log("Login failed", error.message);
    }
  };

  return (<>
 <div className={`${style} ${style[alertDiv]}`}>
    <h5>correct your Email or password..</h5>
    </div>  
  <div className={style.loginContainer}>
        <form className={style.inputForm} onSubmit={onLogin}>
          <h2 className={style.topText}>Login to Zikrabyte</h2>
          <input id="email" name="email" type="email" placeholder="Enter Your email" required onChange={handleInputChange} className={style.inputs} />
          <input id="password" name="password" type="password" placeholder="Enter Password" onChange={handleInputChange} className={style.inputs} />
          <input type="submit" value={"Submit"} className={style.submitBtn} />
          <a href="/signup">New here! </a>
        </form>
      </div>
      </>
  );
};

export default Page;
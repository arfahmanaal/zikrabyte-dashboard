"use client"
import React, { useState, FormEvent, ChangeEvent, useContext } from 'react';
import style from './login.module.css';
import Axios from 'axios';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [user, setUserState] = useState({ email: "", password: "" });
  const[BtnText, setBtnText] = useState("Sign In");
  const [alertDiv, setAlertDiv] = useState("alertHider");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAlertDiv("alertHider");
    const { name, value } = event.target;
    setUserState(prevUser => ({ ...prevUser, [name]: value }));
  };
  const onLogin = async (event: FormEvent) => {
    event.preventDefault();
    setBtnText("Processing...");
    try {
      const response = await Axios.post("/api/users/login", user);
      router.push("/dashboard");
    } catch (error: any) {
      setBtnText("Login");
      setAlertDiv("failAlertDiv");
    }
  };

  return (<>
 <div className={`${style} ${style[alertDiv]}`}>
    <h5>correct your Email or password..</h5>
    </div>  
  <div className={style.loginContainer}>

    <form className={style.inputForm} onSubmit={onLogin}>
          <h2 className={style.topText}>Login to Zikrabyte</h2>

         <div className={style.inputFieldWrapper}>
         <div className={style.inputField}>
         <label htmlFor='email' className={style.inputLabel} >EMAIL</label>
         <input id="email" name="email" type="email" placeholder="Enter Your email" required onChange={handleInputChange} className={style.inputs} />
          </div>
          <div className={style.inputField}>
         <label htmlFor='password' className={style.inputLabel}>PASSWORD</label>
          <input id="password" name="password" type="password" placeholder="Enter Password" onChange={handleInputChange} className={style.inputs} />
          </div>
          </div>

          <input type="submit" value={BtnText} className={style.submitBtn} />
          <div className={style.bottomDiv}>
          <a href="/signup">Create New Account </a>
          <a href="/signup">Forgot Password! </a>
          </div>
        </form>
      </div>
      </>
  );
};

export default Page;
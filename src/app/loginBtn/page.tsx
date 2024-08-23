"use client"
import { useState } from 'react';
import style from "./logBtn.module.css";
import { useRouter } from 'next/navigation';

const LogSignBtn = () => {

  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if(!isAuthenticated){
      router.push("./signup");
    }
  };
  return (
    <div className={style.parentDiv} >
        <button className={style.logInBtn} onClick={handleLogin}>Log-in</button>
    </div>
  );
};
export default LogSignBtn
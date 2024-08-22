"use client"
import { useState } from 'react';
import style from "./logBtn.module.css";
import { useRouter } from 'next/navigation';

const LogSignBtn = () => {

  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userIcon, setUserIcon] = useState(null);
  const [profileCard, setProfileCard] = useState(true);

  const handleLogin = () => {
    if(!isAuthenticated){
      router.push("./signup");
    }
  };

  const handleUserIconClick = () => {
    setProfileCard(!profileCard);

  };

  return (
    <div className={style.parentDiv} >
{isAuthenticated ? (
        <button className={style.userIcon} onClick={handleUserIconClick}>          
        </button>
      ) : (
        <button className={style.logInBtn} onClick={handleLogin}>Log-in</button>
      )}
      {profileCard? (<div className={style.profileControls}>
        <a href="/dashboard">Dashboard</a>
        <a href="/homepage">Home</a>
        <a href="">services</a>
        <a href="">account</a>
        <a href="">logout</a>
      </div>):(null) }
    </div>
  );
};
export default LogSignBtn
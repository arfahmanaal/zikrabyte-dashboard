'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Home.module.css';
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const [btnText, setBtnText] = useState("Login");
  const router = useRouter();
  const handleLogIn = () =>{
    setBtnText("Processing...")
    router.push("/signup");
  }
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image 
          src="/zikra_logo12.png" 
          alt="Logo" 
          layout="intrinsic" 
          width={150} 
          height={60} 
        />
      </div>
      <button className={styles.loginButton} onClick={handleLogIn}>{btnText}</button>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>FOR AN INCREDIBLE NEXT GEN SOLUTIONS</h1>
        <h2 className={styles.subHeading}>
          We are a web based design team. Combining high-end design with strategic SEO to elevate brands and increase website traffic.
          We’ll use the same methods that helped you find our site, to bring people to yours.
        </h2>
        
          
      </div>
      <div className={styles.imageWrapper}>
        <Image 
          src="/land.png" 
          alt="Land" 
          layout="intrinsic" 
          width={500} 
          height={500} 
        />
      </div>
    </div>
  );
};

export default Home;

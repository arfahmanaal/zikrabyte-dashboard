'use client'
import React from 'react';
import Image from 'next/image';
import styles from './Home.module.css';
import Typical from 'react-typical';

const Home: React.FC = () => {
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
      <button className={styles.loginButton}>Login</button>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>FOR AN INCREDIBLE NEXT GEN SOLUTIONS</h1>
        <h2 className={styles.subHeading}>
          We are a web based design team. Combining high-end design with strategic SEO to elevate brands and increase website traffic.
          We’ll use the same methods that helped you find our site, to bring people to yours.
        </h2>
        
            <strong className="px-1">
            <h4 >We are specialized in 
              <Typical 
                steps={[
                  ' Design',
                  2000,
                  ' Development',
                  2000,
                  ' Content',
                  2000,
                  ' Digital Marketing',
                  2000,
		            ' SEO',
                2000,
                ]}
                wrapper="span"
                loop={Infinity}
              /></h4>
            </strong>

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

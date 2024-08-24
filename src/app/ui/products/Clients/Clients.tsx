import React from 'react';
import Image from 'next/image';
import styles from './Clients.module.css';

const logos = [
  '/cli1.png',
  '/cli2.png',
  '/cli3.png',
  '/cli4.png',
  '/cli5.png',
  '/cli6.png',
  '/cli7.png',
  '/cli8.png',
  '/cli9.png',
  '/cli10.png',
];

const Clients: React.FC = () => {
  return (
    <div className={styles.clientsContainer}>
      <h2 className={styles.title}>CLIENTS</h2>
      <div className={styles.logos}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.logo}>
            <Image
              src={logo}
              alt={`Client logo ${index + 1}`}
              layout="intrinsic"
              width={100} 
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;

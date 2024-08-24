import React from 'react';
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
          <img key={index} src={logo} alt={`Client logo ${index + 1}`} className={styles.logo} />
        ))}
      </div>
    </div>
  );
};

export default Clients;

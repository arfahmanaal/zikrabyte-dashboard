import React from 'react';
import styles from './Specialities.module.css';

const Specialities = () => {
  const specialities = [
    'UI UX Design',
    'App Icon Design',
    'App Design',
    'Brand Guidelines',
    'Branding',
    'Concept Design',
    'Content Management System',
    'Website Design',
    'Web Development',
    'Graphics Design',
    'Iconography',
    'Illustration',
    'Infographics',
    'Marketing Assets',
    'Motion Design',
    'Pitch Decks',
    'Print Material',
    'Product Design Strategy',
  ];

  return (
    <div className={styles.container}>
         <h2 className={styles.title}>SPECIALITIES</h2>
         <div className={styles.line}></div>
      {specialities.map((speciality) => (
        <div key={speciality} className={styles.box}>
          {speciality}
        </div>
      ))}
    </div>
  );
};

export default Specialities;

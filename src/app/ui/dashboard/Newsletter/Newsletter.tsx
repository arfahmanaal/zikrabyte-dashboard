import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter: React.FC = () => {
  return (
    <div className={styles.card}>
      <span className={styles.card__title}>Newsletter</span>
      <p className={styles.card__content}>
        Stay ahead of the tech curve! Get the latest updates, insights, and industry trends delivered straight to your inbox every week. Subscribe now and never miss a byte!
      </p>
      <form className={styles.card__form}>
        <input required type="email" placeholder="email address" />
        <button className={styles.card__button}>Click here</button>
      </form>
    </div>
  );
};

export default Newsletter;

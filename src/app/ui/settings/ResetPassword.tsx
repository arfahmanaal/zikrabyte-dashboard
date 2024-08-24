import React from 'react';
import styles from './AccountSettings.module.css';

const ResetPassword: React.FC = () => {
  return (
    <div className={styles.accountSettings}>
      <h1 className={styles.h1}>Reset Password</h1>
      <div className={styles.section}>
        <h2 className={styles.h2}>Enter Your Email</h2>
        <input type="email" placeholder="Email Address" className={styles.input} />
      </div>
      <div className={styles.section}>
        <h2 className={styles.h2}>New Password</h2>
        <input type="password" placeholder="New Password" className={styles.input} />
        <input type="password" placeholder="Confirm New Password" className={styles.input} />
      </div>
      <button className={styles.saveButton}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;

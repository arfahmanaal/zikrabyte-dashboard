import React from 'react';
import styles from './AccountSettings.module.css';

const AccountSettings: React.FC = () => {
  return (
    <div className={styles.accountSettings}>
      <h1 className={styles.h1}>My Account</h1>
      <button className={styles.saveButton}>SAVE</button>
      <div className={styles.section}>
        <h2 className={styles.h2}>Personal Information</h2>
        <input type="text" placeholder="Username" className={styles.input} />
        <input type="email" placeholder="Email Address" className={styles.input} />
        <input type="text" placeholder="First Name" className={styles.input} />
        <input type="text" placeholder="Last Name" className={styles.input} />
      </div>
      <div className={styles.section}>
        <h2 className={styles.h2}>Contact Information</h2>
        <input type="text" placeholder="Address" className={styles.input} />
        <input type="text" placeholder="City" className={styles.input} />
        <input type="text" placeholder="Country" className={styles.input} />
        <input type="text" placeholder="Postal Code" className={styles.input} />
      </div>
      <div className={styles.section}>
        <h2 className={styles.h2}>About Me</h2>
        <textarea placeholder="Tell us about yourself..." className={styles.textarea} rows={5}></textarea>
      </div>
    </div>
  );
};

export default AccountSettings;

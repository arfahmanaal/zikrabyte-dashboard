import React from 'react';
import styles from './ReviewCard.module.css'; 

const ReviewCard: React.FC = () => {
  return (
    <div className={styles.cardContainer}>
    <div className={styles.card}>
      <div className={styles.header}>Overall Review</div>
      <div className={styles.body}>
        <div className={styles.skill}>
          <div className={styles.skillName}>Quality</div>
          <div className={styles.skillLevel}>
            <div style={{ width: '100%' }} className={styles.skillPercent}></div>
          </div>
          <div className={styles.skillPercentNumber}>5.0</div>
        </div>
        <div className={styles.skill}>
          <div className={styles.skillName}>Schedule</div>
          <div className={styles.skillLevel}>
            <div style={{ width: '100%' }} className={styles.skillPercent}></div>
          </div>
          <div className={styles.skillPercentNumber}>5.0</div>
        </div>
        <div className={styles.skill}>
          <div className={styles.skillName}>Cost</div>
          <div className={styles.skillLevel}>
            <div style={{ width: '100%' }} className={styles.skillPercent}></div>
          </div>
          <div className={styles.skillPercentNumber}>5.0</div>
        </div>
        <div className={styles.skill}>
          <div className={styles.skillName}>Willing to refer</div>
          <div className={styles.skillLevel}>
            <div style={{ width: '100%' }} className={styles.skillPercent}></div>
          </div>
          <div className={styles.skillPercentNumber}>5.0</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ReviewCard;

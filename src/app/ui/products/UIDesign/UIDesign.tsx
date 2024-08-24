import React from 'react';
import styles from './UIDesign.module.css';

const UIDesign = () => {
  const sessions = [
    'QA SESSIONS',
    'INITIAL DATA REVIEW',
    'CURRENT STATE ASSESSMENT',
    'USER INTERVIEW',
    'CONTEXTUAL INTERVIEW',
    'QUANTITATIVE RESEARCH',
    'COMPETITORS RESEARCH',
    'DESK RESEARCH',
    'HMW',
    'AFFINITY WALLS',
    'USER PERSONAS',
    'EMPATHY MAP',
    'CJM',
    'JTBD',
    'USE CASES',
    'STORY MAPPING',
    'USER FLOWS',
    'INFORMATION ARCHITECTURE',
    'IDEAS CONCEPTUAL MAP',
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>UI DESIGN</h2>
      <div className={styles.line}></div>
      <div className={styles.scroller}>
      <div className={styles.scroller1}>
        {sessions.concat(sessions).map((session, index) => (
          <div key={index} className={styles.box}>
            {session}
      </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default UIDesign;

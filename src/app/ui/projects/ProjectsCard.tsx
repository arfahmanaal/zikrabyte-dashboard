import React from 'react';
import Image from 'next/image';

import styles from './ProjectsCard.module.css';

interface ProjectsCardProps {
  title: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ title }) => {
  return (
    <article className={styles.articleWrapper}>
      <div className={`${styles.roundedLg} ${styles.containerProject}`}>
      <Image src="/projects.png" alt="Project Image" width={500} height={300} />

      </div>
      <div className={styles.projectInfo}>
        <div className={styles.flexPr}>
          <div className={`${styles.projectTitle} text-nowrap`}>{title}</div>
          <div className={styles.projectHover}>
            <svg
              style={{ color: 'black' }}
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              color="black"
              strokeLinejoin="round"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
        <div className={styles.types}>
          <span
            style={{ backgroundColor: 'rgba(165, 96, 247, 0.43)', color: 'rgb(85, 27, 177)' }}
            className={styles.projectType}
          >
            • UI/UX
          </span>
          <span className={styles.projectType}>• Web Design</span>
        </div>
      </div>
    </article>
  );
};

const ProjectsList: React.FC = () => {
  const titles = Array.from({ length: 8 }, (_, index) => `Project${index + 1}`);

  return (
    <div className={styles.gridContainer}>
      {titles.map((title, index) => (
        <ProjectsCard key={index} title={title} />
      ))}
    </div>
  );
};

export default ProjectsList;

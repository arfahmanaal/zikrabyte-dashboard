import React from 'react';
import styles from './DevStages.module.css';

interface StageProps {
  title: string;
  description: string;
  number: string;
}

const StageCard: React.FC<StageProps> = ({ title, description, number }) => {
  return (
    <div className={styles.stagecard}>
      <div className={styles.number}>{number}</div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

const DevStages: React.FC = () => {
  const stages = [
    {
      number: '01',
      title: 'Discovery',
      description: 'This stage enables us to gain an initial understanding of the project and business objectives. It involves reviewing initial data, conducting stakeholder interview.',
    },
    {
      number: '02',
      title: 'Research',
      description: 'This stage helps to get insights into the product, conducting market research, analyzing the competitors, identifying users\' pain points, and determining the analysis plan.',
    },
    {
      number: '03',
      title: 'Analysis',
      description: 'This step involves applying design thinking to structure the project. It\'s akin to piecing together a puzzle, transforming unclear assumptions into a cohesive and comprehensive picture.',
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'At this stage, we bring the design to life by creating the visual components of the interface. Building on the established UX principles, we ensure the interface is not only user-friendly but also boasts a contemporary and aesthetically pleasing UI.',
    },
    {
      number: '05',
      title: 'Validation',
      description: 'We recommend to our clients the inclusion of validation and user testing services. This approach strengthens the usability of the product and enhances its competitiveness in the market.',
    },
  ];

  return (
    <div className={styles.stagescontainer}>
      {stages.map((stage) => (
        <StageCard key={stage.number} number={stage.number} title={stage.title} description={stage.description} />
      ))}
    </div>
  );
};

export default DevStages;

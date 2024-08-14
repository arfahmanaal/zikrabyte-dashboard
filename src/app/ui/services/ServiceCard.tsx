import React from 'react';
import Image from 'next/image';
import styles from './service.module.css'

interface CardProps {
  title: string;
  description: string;
  img: string;
}

const cards: CardProps[] = [
  {
    title: 'UI/UX Design',
    description: 'Improve your digital platforms with results-driven UX/UI.',
    img: '/UiUxDesign.png',
  },
  {
    title: 'Graphics Design',
    description: 'Enhance your digital platforms with compelling graphics.',
    img: '/GraphicsDesign.png',
  },
  {
    title: 'Content Management System',
    description: 'Streamline your content with an efficient CMS.',
    img: '/CMS.png',
  },
  {
    title: 'Web Development',
    description: 'Build robust and scalable web applications.',
    img: '/WebDevelopment.png',
  },
  {
    title: 'Social Media Marketing',
    description: 'Boost your online presence with strategic SMM.',
    img: '/SMM.png',
  },
  {
    title: 'E-Commerce Web Development',
    description: 'Create seamless online shopping experiences.',
    img: '/eComDevelopment.png',
  },
  {
    title: 'Digital Branding & Identity',
    description: 'Establish a strong digital brand identity.',
    img: '/DigiralBrandIdentity.png',
  },
  {
    title: 'Search Engine Optimisation',
    description: 'Improve your search engine rankings with SEO.',
    img: '/SEO.png',
  },
  {
    title: 'Web Development',
    description: 'Develop high-performance web solutions.',
    img: '/WebDevelopment2.png',
  },
];

const ServicesCard: React.FC<CardProps> = ({ title, description, img }) => (
  <div className={styles.serviceCard}>
    <Image src={img} alt={title} width={300} height={200} />

    <h3 className={styles.servicetitle}>{title}</h3>
    <p className={styles.serviceDescription}>{description}</p>
  </div>
);

const ServiceCard: React.FC = () => {
  return (
    <div className={styles.servicesContainer}>
      {cards.map((card, index) => (
        <ServicesCard key={index} {...card} />
      ))}
    </div>
  );
};

export default ServiceCard;

import * as React from "react";
import Specialities from "./specialities/Specialities";
import Image from 'next/image';

import { Card, CardContent } from "../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import styles from './service.module.css';

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

const ServiceCard = () => {
  return (
    <div className={styles.serviceContainer}>
      <Carousel
        opts={{
          align: 'start',
        }}
        orientation="vertical"
        className="w-full max-w-md"
      >
        <CarouselContent className={`-mt-1 h-[80vh] ${styles.carouselContent}`}>
          {cards.map((card, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1/2">
              <div className="p-1">
                <Card className={styles.grayBackground}>
                  <CardContent className="flex items-center justify-center p-6">
                  <Image src={card.img} alt={card.title} className={styles.serviceImage} width={400} height={400} />

                    <div>
                      <h3 className={styles.serviceTitle}>{card.title}</h3>
                      <p className={styles.serviceDescription}>{card.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className={styles.specialitiesContainer}>
        <Specialities />
      </div>
      </div>
    
  );
};

export default ServiceCard;
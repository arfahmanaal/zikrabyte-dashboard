import React from 'react';
import styles from './Reviews.module.css'; 
import ReviewCard from './ReviewCard'; 

interface Review {
  description: string;
  author: string;
}

const reviews: Review[] = [
  { description: "We never lost track of where we are during the design stages. UXIS has shown tremendous self-motivation and dedication to our needs. They always willing to go extra mile for us.", author: "Kanan Hajizada, Managing Partner, Fintech Startup, Azerbaijan" },
  { description: "I have six years of experience working in software teams as a product manager and Oleksandr (CEO of UXIS) is one of the most impressive UX designers I've worked with.", author: "Tulha Patel, Founder, Kwala, UK" },
  { description: "UXIS has a solid understanding of both development and design, however, which allows them to create designs that are easy to produce, as well as reuse and adjust.", author: "Theo Inglis, Co-Founder, Housecure, UK" },
  { description: "We were impressed with UX/UI’s organization skills — how they set their timelines and made estimates.", author: "Brian Truong, PM, PYM, USA" },
  { description: "I was impressed by the accuracy in everything. The guys are working fast and very organized.", author: "Gena Moldovan, IT Director, USA" },
  { description: "Oleksandr was very easy to communicate with and everything was delivered on time.", author: "Harry James, Co-Founder, Teds Health, UK" },
  { description: "High-level of details in every phase. They really cared.", author: "Danny Trichter, CEO, Accessibility Checker, Israel" },
  { description: "Our bounce back rates have fallen since the redesign and rebranding.", author: "Anonymous, Media start-up, UK" },
  { description: "Level of research and execution was very impressive.", author: "Henry James, Founder, Tech Health, UK" },
];

const Reviews: React.FC = () => {
  return (
    <div className={styles.reviewsWrapper}>
      <h2 className={styles.title}>Client Reviews</h2>
    
      <div className={styles.reviewsContainer}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.card}>
            <p>5.0 of 5.0</p>
            <div className={styles.stars}>
              {Array(5).fill(null).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={styles.star}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <div className={styles.infos}>
              <mark className={styles.highlight}>
                <p className={styles.description}>{review.description}</p>
              </mark>
            </div>
            <div className={styles.author}>
              — {review.author}
            </div>
          </div>
        ))}
      </div>
      <ReviewCard />
    </div>
  );
};

export default Reviews;

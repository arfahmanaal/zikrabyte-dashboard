import { useState, ReactNode } from 'react';
import styles from './FAQ.module.css';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface AccordionProps {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const Accordion = ({ title, children, isActive, onClick }: AccordionProps) => {
  return (
    <div className={styles.accordion}>
      <button className={styles.accordionTitle} onClick={onClick}>
        {title}
        <span className={`${styles.arrow} ${isActive ? styles.open : ''}`}>
          {isActive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>
      {isActive && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.title}>Frequently Asked Questions (FAQs):</div>
      {[...Array(5).keys()].map((index) => (
        <Accordion
          key={index}
          title={`Question ${index + 1}`}
          isActive={activeIndex === index}
          onClick={() => handleAccordionClick(index)}
        >
          {`Answer for Question ${index + 1}`}
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;

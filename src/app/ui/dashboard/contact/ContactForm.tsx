import React from 'react';
import styles from './contact.module.css';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <form className={styles.contactForm}>
          <h2>Have a Project? Lets discuss</h2>
          <p>Thank you for getting in touch! Kindly, fill the form, have a great day!</p>
          <input type="text" placeholder="Your Name" className={styles.inputField} />
          <input type="email" placeholder="Your Email" className={styles.inputField} />
          <input type="tel" placeholder="Phone Number" className={styles.inputField} />
          <input type="text" placeholder="Country" className={styles.inputField} />
          <input type="text" placeholder="Company Name" className={styles.inputField} />
          <input type="text" placeholder="Interested in" className={styles.inputField} />
          <textarea placeholder="Message" className={styles.textArea}></textarea>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

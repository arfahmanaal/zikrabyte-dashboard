"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
  MdSearch,
} from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import ContactForm from "../contact/ContactForm";

const Navbar = () => {
  const pathname = usePathname();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div >
        <button className={styles.contactButton} onClick={openModal}>Contact Us</button>
        <ContactForm isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <div className={styles.icons}>
          
          <FaCircleUser  size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

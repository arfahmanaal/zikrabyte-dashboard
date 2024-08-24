"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { FaCircleUser } from "react-icons/fa6";
import ContactForm from "../contact/ContactForm";
import UserProf from "../userProfile/UserProf";

const Navbar = () => {
  const pathname = usePathname();
  const [isModalOpen, setModalOpen] = useState(false);
  const [profileCard, setProfileCard] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const handleIconClick = () =>{ setProfileCard(!profileCard)}

  return (
<>
<div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div >
        <button className={styles.contactButton} onClick={openModal}>Contact Us</button>
        <ContactForm isOpen={isModalOpen} onClose={closeModal} />
        </div>
        <div className={styles.icons}>
        <button onClick={handleIconClick}><FaCircleUser  size={40} /></button>
        </div>
      </div>
    </div>
    <div className={styles.userProfParent}>
    {profileCard ? (
      < UserProf />
    ): (null)}
    </div>
</>
  );
};

export default Navbar;

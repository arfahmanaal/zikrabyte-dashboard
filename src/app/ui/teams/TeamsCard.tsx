'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './TeamsCard.module.css';

const TeamsCard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [teamMembers, setTeamMembers] = useState([
    {
      name: 'Christopher',
      position: 'Designer',
      profile: '/tm1.png',
    },
    {
      name: 'Jazzmine',
      position: 'Developer',
      profile: '/tm2.png',
    },
    {
      name: 'Stephine',
      position: 'Tester',
      profile: '/tm3.png',
    },
    {
      name: 'William',
      position: 'Manager',
      profile: '/tm4.png',
    },
  ]);

  const [newMember, setNewMember] = useState({
    name: '',
    position: '',
    profile: '',
  });
  
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string | ArrayBuffer | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddMember = () => {
    if (profileImagePreview) {
      setTeamMembers([
        ...teamMembers,
        {
          ...newMember,
          profile: profileImagePreview as string,
        },
      ]);
    }
    setNewMember({ name: '', position: '', profile: '' });
    setProfileImage(null);
    setProfileImagePreview(null);
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.addButton} onClick={() => setShowModal(true)}>
        + Add a Member
      </button>

      {teamMembers.map((member, index) => (
        <div key={index} className={styles.card}>
          <Image
            src={member.profile}
            alt={member.name}
            className={styles.profile}
            width={100}
            height={100}
          />
          <div className={styles.info}>
            <div className={styles.name}>{member.name}</div>
            <div className={styles.position}>{member.position}</div>
          </div>
          <div className={styles.card1}>
            <div className={styles.socialContainer}>
              <a href="#" className={styles.containerOne}>
                <Image src="/ig.png" alt="Instagram" width={24} height={24} />
              </a>
              <a href="#" className={styles.containerTwo}>
                <Image src="/twitter.png" alt="Twitter" width={24} height={24} />
              </a>
              <a href="#" className={styles.containerThree}>
                <Image src="/lin.png" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="#" className={styles.containerFour}>
                <Image src="/wa.png" alt="WhatsApp" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      ))}

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Add New User</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.modalInput}
            />
            {profileImagePreview && (
              <div className={styles.profilePreview}>
                <Image
                  src={profileImagePreview as string}
                  alt="Profile Preview"
                  width={100}
                  height={100}
                  className={styles.profile}
                />
              </div>
            )}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newMember.name}
              onChange={handleInputChange}
              className={styles.modalInput}
            />
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={newMember.position}
              onChange={handleInputChange}
              className={styles.modalInput}
            />
            <div className={styles.modalActions}>
              <button className={styles.modalButton} onClick={handleAddMember}>
                Add User
              </button>
              <button className={styles.modalButton} onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamsCard;

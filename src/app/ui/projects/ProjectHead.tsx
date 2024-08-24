'use client'
import React, { useState } from 'react';
import styles from './ProjectHead.module.css';

const ProjectHead: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={styles.title}>
      <h1>
        PROJECTS
        <span>
          <button className={styles.button} onClick={handleOpenModal}>CREATE NEW PROJECT</button>
        </span>
      </h1>
      {isModalOpen && <ProjectModal onClose={handleCloseModal} />}
    </div>
  );
};

const ProjectModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    domain: '',
    previewImage: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Project data:', formData);
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>CREATE NEW PROJECT </h2>
        <form onSubmit={handleSubmit}>
          <label>
            Project Name:
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Domain:
            <input
              type="text"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Preview Image URL:
            <input
              type="text"
              name="previewImage"
              value={formData.previewImage}
              onChange={handleChange}
              required
            />
          </label>
          <div className={styles.modalActions}>
            <button type="submit" className={styles.button}>Save</button>
            <button type="button" className={styles.button} onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectHead;

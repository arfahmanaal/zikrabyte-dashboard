'use client';
import React, { useState } from 'react';
import styles from './UserDetails.module.css';
import { MdEdit, MdDelete } from 'react-icons/md';

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

const initialUsers: User[] = [
  { id: 1, name: 'AAA', email: 'aaa@example.com', password: '********' },
  { id: 2, name: 'BBB', email: 'bbb@example.com', password: '********' },
  { id: 3, name: 'CCC', email: 'ccc@example.com', password: '********' },
  { id: 4, name: 'DDD', email: 'ddd@example.com', password: '********' },
  { id: 5, name: 'EEE', email: 'eee@example.com', password: '********' }
];

const UserDetails: React.FC = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editUserId, setEditUserId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Omit<User, 'id'>>({ name: '', email: '', password: '' });
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(null);

  const handleEdit = (user: User) => {
    setEditUserId(user.id);
    setFormData({ name: user.name, email: user.email, password: user.password });
  };

  const handleDelete = (id: number) => {
    setShowDeleteConfirm(id);
  };

  const confirmDelete = () => {
    if (showDeleteConfirm !== null) {
      setUsers(users.filter(user => user.id !== showDeleteConfirm));
      setShowDeleteConfirm(null);
    }
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(null);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editUserId !== null) {
      setUsers(users.map(user => 
        user.id === editUserId 
          ? { ...user, ...formData } 
          : user
      ));
      setEditUserId(null);
      setFormData({ name: '', email: '', password: '' });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>User Details</h2>
      <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{`user_${user.id}`}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button className={styles.button1} onClick={() => handleEdit(user)}>
                  <MdEdit />
                </button>
                <button className={styles.button} onClick={() => handleDelete(user.id)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {editUserId !== null && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Edit User</h3>
            <form onSubmit={handleFormSubmit}>
              <label>
                Name:
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleFormChange} 
                  required 
                />
              </label>
              <label>
                Email:
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleFormChange} 
                  required 
                />
              </label>
              <label>
                Password:
                <input 
                  type="password" 
                  name="password" 
                  value={formData.password} 
                  onChange={handleFormChange} 
                  required 
                />
              </label>
              <div className={styles.modalActions}>
                <button type="submit" className={styles.button}>Save</button>
                <button type="button" className={styles.button} onClick={() => setEditUserId(null)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showDeleteConfirm !== null && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Confirm Deletion</h3>
            <p>Are you sure you want to delete this user?</p>
            <div className={styles.modalActions}>
              <button className={styles.button} onClick={confirmDelete}>Yes</button>
              <button className={styles.button} onClick={cancelDelete}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;

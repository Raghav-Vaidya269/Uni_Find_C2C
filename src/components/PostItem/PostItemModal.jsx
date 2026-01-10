import React, { useState } from 'react';
import { X } from 'lucide-react';
import PostItemForm from './PostItemForm';
import { styles } from './postItemStyles';

export default function PostItemModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    condition: '',
    price: '',
    description: '',
    yourName: '',
    contactInfo: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // TODO: Send data to backend API
    setFormData({
      title: '',
      category: '',
      condition: '',
      price: '',
      description: '',
      yourName: '',
      contactInfo: '',
      imageUrl: '',
    });
    onClose();
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      category: '',
      condition: '',
      price: '',
      description: '',
      yourName: '',
      contactInfo: '',
      imageUrl: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Post Marketplace Item</h2>
          <button
            onClick={handleCancel}
            style={styles.closeButton}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <PostItemForm
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
}

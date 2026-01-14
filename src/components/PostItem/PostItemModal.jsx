import React, { useState } from 'react';
import { X } from 'lucide-react';
import PostItemForm from './PostItemForm';
import { styles } from './postItemStyles';
import { useTheme } from '../../context/ThemeContext';

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
  const { theme } = useTheme();

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

  const modalStyles = {
    ...styles.modal,
    backgroundColor: theme ? 'white' : '#1f2937',
    transition: 'background-color 0.3s ease',
  };

  const headerStyles = {
    ...styles.header,
    backgroundColor: theme ? 'white' : '#1f2937',
    borderBottomColor: theme ? '#e5e7eb' : '#374151',
  };

  const titleStyles = {
    ...styles.title,
    color: theme ? '#111827' : '#f9fafb',
  };

  const closeButtonStyles = {
    ...styles.closeButton,
    color: theme ? '#6b7280' : '#9ca3af',
  };

  return (
    <div style={styles.overlay}>
      <div style={modalStyles}>
        {/* Header */}
        <div style={headerStyles}>
          <h2 style={titleStyles}>Post Marketplace Item</h2>
          <button
            onClick={handleCancel}
            style={closeButtonStyles}
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
          theme={theme}
        />
      </div>
    </div>
  );
}

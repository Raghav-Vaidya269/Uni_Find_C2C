import React from 'react';
import { styles } from './postItemStyles';

const CATEGORIES = [
  'Select category',
  'Electronics',
  'Books',
  'Furniture',
  'Clothing',
  'Sports',
  'Other',
];

const CONDITIONS = [
  'Select condition',
  'Brand New',
  'Like New',
  'Good',
  'Fair',
  'Poor',
];

export default function PostItemForm({
  formData,
  onChange,
  onSubmit,
  onCancel,
  theme = true,
}) {
  const labelStyles = {
    ...styles.label,
    color: theme ? '#111827' : '#f9fafb',
  };

  const inputStyles = {
    ...styles.input,
    backgroundColor: theme ? 'white' : '#374151',
    borderColor: theme ? '#d1d5db' : '#4b5563',
    color: theme ? '#111827' : '#f9fafb',
  };

  const selectStyles = {
    ...styles.select,
    backgroundColor: theme ? 'white' : '#374151',
    borderColor: theme ? '#d1d5db' : '#4b5563',
    color: theme ? '#111827' : '#f9fafb',
  };

  const textareaStyles = {
    ...styles.textarea,
    backgroundColor: theme ? 'white' : '#374151',
    borderColor: theme ? '#d1d5db' : '#4b5563',
    color: theme ? '#111827' : '#f9fafb',
  };

  const formActionsStyles = {
    ...styles.formActions,
    borderTopColor: theme ? '#e5e7eb' : '#374151',
  };

  const cancelButtonStyles = {
    ...styles.cancelButton,
    backgroundColor: theme ? '#d1d5db' : '#4b5563',
    color: theme ? '#111827' : '#f9fafb',
  };

  const submitButtonStyles = {
    ...styles.submitButton,
    backgroundColor: theme ? '#4f46e5' : '#818cf8',
  };

  return (
    <form onSubmit={onSubmit} style={styles.formContainer}>
      {/* Title Field */}
      <div style={styles.formGroup}>
        <label htmlFor="title" style={labelStyles}>
          Title <span style={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={onChange}
          placeholder="e.g., iPhone 13 Pro Max"
          style={inputStyles}
          required
        />
      </div>

      {/* Category and Condition Row */}
      <div style={styles.twoColumnRow}>
        <div style={styles.formGroup}>
          <label htmlFor="category" style={labelStyles}>
            Category <span style={styles.required}>*</span>
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={onChange}
            style={selectStyles}
            required
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat === 'Select category' ? '' : cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="condition" style={labelStyles}>
            Condition <span style={styles.required}>*</span>
          </label>
          <select
            id="condition"
            name="condition"
            value={formData.condition}
            onChange={onChange}
            style={selectStyles}
            required
          >
            {CONDITIONS.map((cond) => (
              <option
                key={cond}
                value={cond === 'Select condition' ? '' : cond}
              >
                {cond}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Price Field */}
      <div style={styles.formGroup}>
        <label htmlFor="price" style={labelStyles}>
          Price (NPR) <span style={styles.required}>*</span>
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={onChange}
          placeholder="5000"
          style={inputStyles}
          min="0"
          required
        />
      </div>

      {/* Description Field */}
      <div style={styles.formGroup}>
        <label htmlFor="description" style={labelStyles}>
          Description <span style={styles.required}>*</span>
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={onChange}
          placeholder="Describe your item in detail..."
          style={textareaStyles}
          rows="5"
          required
        />
      </div>

      {/* Your Name and Contact Info Row */}
      <div style={styles.twoColumnRow}>
        <div style={styles.formGroup}>
          <label htmlFor="yourName" style={labelStyles}>
            Your Name <span style={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="yourName"
            name="yourName"
            value={formData.yourName}
            onChange={onChange}
            placeholder="John Doe"
            style={inputStyles}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="contactInfo" style={labelStyles}>
            Contact Info <span style={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={onChange}
            placeholder="Phone or Email"
            style={inputStyles}
            required
          />
        </div>
      </div>

      {/* Image URL Field */}
      <div style={styles.formGroup}>
        <label htmlFor="imageUrl" style={labelStyles}>
          Image URL <span style={styles.optional}>(optional)</span>
        </label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={onChange}
          placeholder="https://example.com/image.jpg"
          style={inputStyles}
        />
      </div>

      {/* Form Actions */}
      <div style={formActionsStyles}>
        <button
          type="button"
          onClick={onCancel}
          style={cancelButtonStyles}
        >
          Cancel
        </button>
        <button
          type="submit"
          style={submitButtonStyles}
        >
          Post Item
        </button>
      </div>
    </form>
  );
}

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
}) {
  return (
    <form onSubmit={onSubmit} style={styles.formContainer}>
      {/* Title Field */}
      <div style={styles.formGroup}>
        <label htmlFor="title" style={styles.label}>
          Title <span style={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={onChange}
          placeholder="e.g., iPhone 13 Pro Max"
          style={styles.input}
          required
        />
      </div>

      {/* Category and Condition Row */}
      <div style={styles.twoColumnRow}>
        <div style={styles.formGroup}>
          <label htmlFor="category" style={styles.label}>
            Category <span style={styles.required}>*</span>
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={onChange}
            style={styles.select}
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
          <label htmlFor="condition" style={styles.label}>
            Condition <span style={styles.required}>*</span>
          </label>
          <select
            id="condition"
            name="condition"
            value={formData.condition}
            onChange={onChange}
            style={styles.select}
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
        <label htmlFor="price" style={styles.label}>
          Price (NPR) <span style={styles.required}>*</span>
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={onChange}
          placeholder="5000"
          style={styles.input}
          min="0"
          required
        />
      </div>

      {/* Description Field */}
      <div style={styles.formGroup}>
        <label htmlFor="description" style={styles.label}>
          Description <span style={styles.required}>*</span>
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={onChange}
          placeholder="Describe your item in detail..."
          style={styles.textarea}
          rows="5"
          required
        />
      </div>

      {/* Your Name and Contact Info Row */}
      <div style={styles.twoColumnRow}>
        <div style={styles.formGroup}>
          <label htmlFor="yourName" style={styles.label}>
            Your Name <span style={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="yourName"
            name="yourName"
            value={formData.yourName}
            onChange={onChange}
            placeholder="John Doe"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="contactInfo" style={styles.label}>
            Contact Info <span style={styles.required}>*</span>
          </label>
          <input
            type="text"
            id="contactInfo"
            name="contactInfo"
            value={formData.contactInfo}
            onChange={onChange}
            placeholder="Phone or Email"
            style={styles.input}
            required
          />
        </div>
      </div>

      {/* Image URL Field */}
      <div style={styles.formGroup}>
        <label htmlFor="imageUrl" style={styles.label}>
          Image URL <span style={styles.optional}>(optional)</span>
        </label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={onChange}
          placeholder="https://example.com/image.jpg"
          style={styles.input}
        />
      </div>

      {/* Form Actions */}
      <div style={styles.formActions}>
        <button
          type="button"
          onClick={onCancel}
          style={styles.cancelButton}
        >
          Cancel
        </button>
        <button
          type="submit"
          style={styles.submitButton}
        >
          Post Item
        </button>
      </div>
    </form>
  );
}

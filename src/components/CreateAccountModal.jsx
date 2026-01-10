import React, { useState } from 'react';
import { Eye, EyeOff, X, GraduationCap } from 'lucide-react';

export function CreateAccountModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the terms and privacy policy');
      return;
    }
    console.log(isLogin ? 'Login:' : 'Create account:', formData);
    // Reset form
    setFormData({ username: '', email: '', password: '' });
    setTermsAccepted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button onClick={onClose} style={styles.closeButton}>
          <X size={24} />
        </button>

        {/* Header with Icon */}
        <div style={styles.headerSection}>
          <div style={styles.iconContainer}>
            <GraduationCap size={32} color="#4f46e5" />
          </div>
          <h2 style={styles.title}>
            {isLogin ? 'Log in' : 'Create account'}
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Username/Email Field */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              {isLogin ? 'Email' : 'Username'}
            </label>
            <input
              type={isLogin ? 'email' : 'text'}
              name={isLogin ? 'email' : 'username'}
              placeholder={isLogin ? 'Your email' : 'Your username'}
              value={isLogin ? formData.email : formData.username}
              onChange={handleInputChange}
              style={styles.input}
            />
          </div>

          {/* Email Field (only for signup) */}
          {!isLogin && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
          )}

          {/* Password Field */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordInputWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                style={styles.passwordInput}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.passwordToggle}
              >
                {showPassword ? (
                  <EyeOff size={20} color="#9ca3af" />
                ) : (
                  <Eye size={20} color="#9ca3af" />
                )}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div style={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              style={styles.checkbox}
            />
            <label htmlFor="terms" style={styles.checkboxLabel}>
              I accept the terms and privacy policy
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.submitButton}>
            {isLogin ? 'Log in' : 'Log in'}
          </button>
        </form>

        {/* Toggle Link */}
        <div style={styles.toggleSection}>
          <span style={styles.toggleText}>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
          </span>
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setFormData({ username: '', email: '', password: '' });
              setShowPassword(false);
              setTermsAccepted(false);
            }}
            style={styles.toggleLink}
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '2.5rem 2rem',
    maxWidth: '420px',
    width: '90%',
    position: 'relative',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#6b7280',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
    margin: 0,
    textAlign: 'left',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#111827',
  },
  input: {
    padding: '0.75rem 1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    color: '#111827',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  },
  passwordInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #e5e7eb',
    borderRadius: '0.375rem',
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  passwordInput: {
    flex: 1,
    padding: '0.75rem 1rem',
    border: 'none',
    fontSize: '0.875rem',
    color: '#111827',
    fontFamily: 'inherit',
    outline: 'none',
    backgroundColor: 'transparent',
  },
  passwordToggle: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    accentColor: '#4f46e5',
  },
  checkboxLabel: {
    fontSize: '0.875rem',
    color: '#374151',
    cursor: 'pointer',
    userSelect: 'none',
  },
  submitButton: {
    padding: '0.75rem 1rem',
    backgroundColor: '#111827',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    marginTop: '0.5rem',
  },
  toggleSection: {
    textAlign: 'center',
    marginTop: '1.5rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #e5e7eb',
  },
  toggleText: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  toggleLink: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#111827',
    fontSize: '0.875rem',
    fontWeight: '600',
    cursor: 'pointer',
    padding: 0,
    textDecoration: 'underline',
  },
};

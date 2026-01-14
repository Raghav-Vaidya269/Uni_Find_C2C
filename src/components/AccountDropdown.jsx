import React from 'react';
import { ChevronDown } from 'lucide-react';
import { styles } from './styles';

export function AccountDropdown({ isOpen, onClose, theme, onThemeToggle, onLogout }) {
  if (!isOpen) return null;

  const dropdownStyles = {
    ...styles.dropdown,
    backgroundColor: theme ? 'white' : '#1f2937',
    borderColor: theme ? '#e5e7eb' : '#374151',
  };

  const textColor = theme ? '#374151' : '#e5e7eb';
  const secondaryTextColor = theme ? '#9ca3af' : '#6b7280';

  return (
    <div style={dropdownStyles}>
      <button
        onClick={onClose}
        style={styles.dropdownHeader}
      >
        <span style={{ fontWeight: '500', color: textColor }}>Account</span>
        <ChevronDown size={20} color={secondaryTextColor} />
      </button>

      <div style={{
        ...styles.userInfo,
        borderBottomColor: theme ? '#f3f4f6' : '#374151',
      }}>
        <div style={styles.userFlex}>
          <div style={styles.avatar}>
            OR
          </div>
          <div>
            <div style={{ ...styles.userName, color: theme ? '#111827' : '#f9fafb' }}>Olivia Rhye</div>
            <div style={{ ...styles.userEmail, color: theme ? '#6b7280' : '#9ca3af' }}>olivia@untitledui.com</div>
          </div>
          <div style={styles.statusDot}></div>
        </div>
      </div>

      <button style={{ ...styles.menuItem, color: textColor }}>
        Settings
      </button>

      <div style={styles.themeRow}>
        <span style={{ color: textColor }}>Theme</span>
        <button
          onClick={onThemeToggle}
          style={styles.toggleBtn(theme)}
        >
          <div style={styles.toggleCircle(theme)}></div>
        </button>
      </div>

      <button
        onClick={() => {
          onLogout();
        }}
        style={{ ...styles.menuItem, color: textColor }}
      >
        Log out/Login
      </button>
    </div>
  );
}


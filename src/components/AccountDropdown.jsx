import React from 'react';
import { ChevronDown } from 'lucide-react';
import { styles } from './styles';

export function AccountDropdown({ isOpen, onClose, theme, onThemeToggle, onLogout }) {
  if (!isOpen) return null;

  return (
    <div style={styles.dropdown}>
      <button 
        onClick={onClose}
        style={styles.dropdownHeader}
      >
        <span style={{fontWeight: '500', color: '#374151'}}>Account</span>
        <ChevronDown size={20} color="#9ca3af" />
      </button>
      
      <div style={styles.userInfo}>
        <div style={styles.userFlex}>
          <div style={styles.avatar}>
            OR
          </div>
          <div>
            <div style={styles.userName}>Olivia Rhye</div>
            <div style={styles.userEmail}>olivia@untitledui.com</div>
          </div>
          <div style={styles.statusDot}></div>
        </div>
      </div>

      <button style={styles.menuItem}>
        Settings
      </button>

      <div style={styles.themeRow}>
        <span style={{color: '#374151'}}>Theme</span>
        <button
          onClick={onThemeToggle}
          style={styles.toggleBtn(theme)}
        >
          <div style={styles.toggleCircle(theme)}></div>
        </button>
      </div>

      <button 
        onClick={onLogout}
        style={styles.menuItem}
      >
        Log out/Login
      </button>
    </div>
  );
}

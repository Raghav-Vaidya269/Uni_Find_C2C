import React from 'react';
import { styles } from './styles';

export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <p style={styles.footerText}>© 2025 UNI-find - Kathmandu University Student Marketplace</p>
        <button style={styles.contactBtn}>Contact</button>
      </div>
    </footer>
  );
}

import React, { useState } from 'react';
import { GraduationCap, User } from 'lucide-react';
import { styles } from './styles';
import { MarketplaceButton, PostButton } from './buttons';
import { AccountDropdown } from './AccountDropdown';

export function Header() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [theme, setTheme] = useState(true);

  return (
    <header style={styles.header}>
      <div style={styles.headerContent}>
        <div style={styles.headerFlex}>
          {/* Logo */}
          <div style={styles.logo}>
            <GraduationCap size={32} strokeWidth={2.5} />
            <span style={styles.logoText}>UNI-find</span>
          </div>

          {/* Navigation */}
          <div style={styles.navButtons}>
            <MarketplaceButton onClick={() => {}} />
            <PostButton onClick={() => {}} />

            {/* Account Dropdown */}
            <div style={{position: 'relative'}}>
              <button 
                onClick={() => setAccountOpen(!accountOpen)}
                style={styles.accountBtn}
              >
                <User size={24} color="white" />
              </button>

              <AccountDropdown 
                isOpen={accountOpen}
                onClose={() => setAccountOpen(false)}
                theme={theme}
                onThemeToggle={() => setTheme(!theme)}
                onLogout={() => setAccountOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

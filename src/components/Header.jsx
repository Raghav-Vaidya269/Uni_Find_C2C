import React, { useState } from 'react';
import { GraduationCap, User } from 'lucide-react';
import { styles } from './styles';
import { MarketplaceButton, PostButton } from './buttons';
import { AccountDropdown } from './AccountDropdown';
import PostItemModal from './PostItem/PostItemModal';
import { CreateAccountModal } from './CreateAccountModal';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [postItemOpen, setPostItemOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const headerStyles = {
    ...styles.header,
    backgroundColor: theme ? 'white' : '#1f2937',
    transition: 'background-color 0.3s ease',
  };

  return (
    <>
      <header style={headerStyles}>
        <div style={styles.headerContent}>
          <div style={styles.headerFlex}>
            {/* Logo */}
            <div style={{ ...styles.logo, color: theme ? '#4f46e5' : '#818cf8' }}>
              <GraduationCap size={32} strokeWidth={2.5} />
              <span style={styles.logoText}>UNI-find</span>
            </div>

            {/* Navigation */}
            <div style={styles.navButtons}>
              <MarketplaceButton onClick={() => { }} theme={theme} />
              <PostButton onClick={() => setPostItemOpen(true)} theme={theme} />

              {/* Account Dropdown */}
              <div style={{ position: 'relative' }}>
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
                  onThemeToggle={toggleTheme}
                  onLogout={() => {
                    setAccountOpen(false);
                    setAuthModalOpen(true);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Post Item Modal */}
      <PostItemModal
        isOpen={postItemOpen}
        onClose={() => setPostItemOpen(false)}
      />

      {/* Create Account Modal */}
      <CreateAccountModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </>
  );
}

import React, { useState } from 'react';
import { ShoppingBag, Search, GraduationCap, User, ChevronDown } from 'lucide-react';
import PostItemModal from './components/PostItem/PostItemModal';

const styles = {
  pageContainer: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'white',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
  },
  headerContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
  },
  headerFlex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '64px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#4f46e5',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  navButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  marketplaceBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#4f46e5',
    color: 'white',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
  },
  postBtn: {
    padding: '0.5rem 1.5rem',
    backgroundColor: '#4f46e5',
    color: 'white',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '500',
  },
  accountBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: '#1f2937',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
  },
  dropdown: {
    position: 'absolute',
    right: 0,
    marginTop: '0.5rem',
    width: '288px',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    border: '1px solid #e5e7eb',
    padding: '0.5rem 0',
    zIndex: 50,
  },
  dropdownHeader: {
    width: '100%',
    padding: '0.5rem 1rem',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  userInfo: {
    padding: '0.75rem 1rem',
    borderBottom: '1px solid #f3f4f6',
  },
  userFlex: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  avatar: {
    width: '40px',
    height: '40px',
    background: 'linear-gradient(to bottom right, #818cf8, #a78bfa)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '600',
  },
  userName: {
    fontWeight: '500',
    color: '#111827',
  },
  userEmail: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  statusDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    marginLeft: 'auto',
  },
  menuItem: {
    width: '100%',
    padding: '0.5rem 1rem',
    textAlign: 'left',
    color: '#374151',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  themeRow: {
    padding: '0.5rem 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleBtn: (active) => ({
    width: '48px',
    height: '24px',
    borderRadius: '9999px',
    backgroundColor: active ? '#22c55e' : '#d1d5db',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',
  }),
  toggleCircle: (active) => ({
    width: '20px',
    height: '20px',
    backgroundColor: 'white',
    borderRadius: '50%',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    transform: active ? 'translateX(24px)' : 'translateX(4px)',
    transition: 'transform 0.2s',
    position: 'absolute',
    top: '2px',
  }),
  hero: {
    background: 'linear-gradient(to right, #4f46e5, #4338ca)',
    color: 'white',
    padding: '4rem 0',
  },
  heroContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#c7d2fe',
    marginBottom: '2rem',
  },
  searchBar: {
    maxWidth: '768px',
    margin: '0 auto',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  searchInputWrapper: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    padding: '0 1rem',
  },
  searchInput: {
    flex: 1,
    padding: '1rem',
    border: 'none',
    outline: 'none',
    color: '#374151',
  },
  categorySelect: {
    padding: '1rem 1.5rem',
    borderLeft: '1px solid #e5e7eb',
    border: 'none',
    outline: 'none',
    color: '#374151',
    backgroundColor: 'white',
    cursor: 'pointer',
  },
  main: {
    flex: 1,
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '3rem 1rem',
    width: '100%',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2rem',
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  title: {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
  },
  filterButtons: {
    display: 'flex',
    gap: '0.5rem',
  },
  filterBtn: (active) => ({
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    fontWeight: '500',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: active ? '#4f46e5' : 'white',
    color: active ? 'white' : '#374151',
  }),
  itemsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  itemCard: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  itemImage: {
    width: '100%',
    aspectRatio: '1',
    backgroundColor: '#e5e7eb',
  },
  itemContent: {
    padding: '1rem',
  },
  itemTitle: {
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.25rem',
  },
  itemPrice: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.5rem',
  },
  itemDescription: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  footer: {
    backgroundColor: '#1f2937',
    color: '#d1d5db',
    padding: '2rem 0',
    marginTop: '3rem',
  },
  footerContent: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
    textAlign: 'center',
  },
  footerText: {
    marginBottom: '0.5rem',
  },
  contactBtn: {
    color: '#818cf8',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
};

export default function UniFindMarketplace() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [theme, setTheme] = useState(true);
  const [postItemOpen, setPostItemOpen] = useState(false);

  const marketplaceItems = [
    { id: 1, title: 'Text', price: 0, description: 'Body text.' },
    { id: 2, title: 'Text', price: 0, description: 'Body text.' },
    { id: 3, title: 'Text', price: 0, description: 'Body text.' },
    { id: 4, title: 'Text', price: 0, description: 'Body text.' },
  ];

  return (
    <div style={styles.pageContainer}>
      {/* Header */}
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
              <button style={styles.marketplaceBtn}>
                <ShoppingBag size={20} />
                <span>Marketplace</span>
              </button>
              
              <button style={styles.postBtn} onClick={() => setPostItemOpen(true)}>
                Post Item
              </button>

              {/* Account Dropdown */}
              <div style={{position: 'relative'}}>
                <button 
                  onClick={() => setAccountOpen(!accountOpen)}
                  style={styles.accountBtn}
                >
                  <User size={24} color="white" />
                </button>

                {accountOpen && (
                  <div style={styles.dropdown}>
                    <button 
                      onClick={() => setAccountOpen(false)}
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
                        onClick={() => setTheme(!theme)}
                        style={styles.toggleBtn(theme)}
                      >
                        <div style={styles.toggleCircle(theme)}></div>
                      </button>
                    </div>

                    <button style={styles.menuItem}>
                      Log out/Login
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to UNI-find</h1>
          <p style={styles.heroSubtitle}>Kathmandu University's Student Marketplace</p>
          
          {/* Search Bar */}
          <div style={styles.searchBar}>
            <div style={styles.searchInputWrapper}>
              <Search size={20} color="#9ca3af" />
              <input
                type="text"
                placeholder="Search for items, books, electronics..."
                style={styles.searchInput}
              />
            </div>
            <select style={styles.categorySelect}>
              <option>All Categories</option>
              <option>Books</option>
              <option>Electronics</option>
              <option>Furniture</option>
            </select>
          </div>
        </div>
      </div>

      {/* Marketplace Section */}
      <main style={styles.main}>
        <div style={styles.sectionHeader}>
          <div style={styles.sectionTitle}>
            <ShoppingBag size={32} color="#1f2937" />
            <h2 style={styles.title}>Marketplace</h2>
          </div>

          {/* Filter Buttons */}
          <div style={styles.filterButtons}>
            <button
              onClick={() => setActiveFilter('all')}
              style={styles.filterBtn(activeFilter === 'all')}
            >
              All Items
            </button>
            <button
              onClick={() => setActiveFilter('available')}
              style={styles.filterBtn(activeFilter === 'available')}
            >
              Available
            </button>
            <button
              onClick={() => setActiveFilter('pending')}
              style={styles.filterBtn(activeFilter === 'pending')}
            >
              Pending
            </button>
          </div>
        </div>

        {/* Items Grid */}
        <div style={styles.itemsGrid}>
          {marketplaceItems.map((item) => (
            <div key={item.id} style={styles.itemCard}>
              <div style={styles.itemImage}></div>
              <div style={styles.itemContent}>
                <h3 style={styles.itemTitle}>{item.title}</h3>
                <p style={styles.itemPrice}>${item.price}</p>
                <p style={styles.itemDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p style={styles.footerText}>© 2025 UNI-find - Kathmandu University Student Marketplace</p>
          <button style={styles.contactBtn}>Contact</button>
        </div>
      </footer>

      {/* Post Item Modal */}
      <PostItemModal 
        isOpen={postItemOpen} 
        onClose={() => setPostItemOpen(false)}
      />
    </div>
  );
}

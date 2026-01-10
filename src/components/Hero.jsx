import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { styles } from './styles';

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select 
            style={styles.categorySelect}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="books">Books</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
          </select>
        </div>
      </div>
    </div>
  );
}

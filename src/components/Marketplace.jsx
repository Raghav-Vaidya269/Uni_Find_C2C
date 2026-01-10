import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { styles } from './styles';
import { FilterButton } from './buttons';

export function Marketplace() {
  const [activeFilter, setActiveFilter] = useState('all');

  const marketplaceItems = [
    { id: 1, title: 'Text', price: 0, description: 'Body text.' },
    { id: 2, title: 'Text', price: 0, description: 'Body text.' },
    { id: 3, title: 'Text', price: 0, description: 'Body text.' },
    { id: 4, title: 'Text', price: 0, description: 'Body text.' },
  ];

  return (
    <main style={styles.main}>
      <div style={styles.sectionHeader}>
        <div style={styles.sectionTitle}>
          <ShoppingBag size={32} color="#1f2937" />
          <h2 style={styles.title}>Marketplace</h2>
        </div>

        {/* Filter Buttons */}
        <div style={styles.filterButtons}>
          <FilterButton
            active={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
          >
            All Items
          </FilterButton>
          <FilterButton
            active={activeFilter === 'available'}
            onClick={() => setActiveFilter('available')}
          >
            Available
          </FilterButton>
          <FilterButton
            active={activeFilter === 'pending'}
            onClick={() => setActiveFilter('pending')}
          >
            Pending
          </FilterButton>
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
  );
}

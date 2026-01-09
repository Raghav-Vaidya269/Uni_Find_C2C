import React from 'react';
import { ShoppingBag, User } from 'lucide-react';
import { styles } from './styles';

export function MarketplaceButton({ onClick }) {
  return (
    <button style={styles.marketplaceBtn} onClick={onClick}>
      <ShoppingBag size={20} />
      <span>Marketplace</span>
    </button>
  );
}

export function PostButton({ onClick }) {
  return (
    <button style={styles.postBtn} onClick={onClick}>
      Post Item
    </button>
  );
}

export function AccountButton({ onClick, isOpen }) {
  return (
    <button 
      onClick={onClick}
      style={{
        ...styles.accountBtn,
        backgroundColor: isOpen ? '#374151' : '#1f2937',
      }}
    >
      <User size={24} color="white" />
    </button>
  );
}

export function FilterButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={styles.filterBtn(active)}
    >
      {children}
    </button>
  );
}

import React from 'react';
import { ShoppingBag, User } from 'lucide-react';
import { styles } from './styles';

export function MarketplaceButton({ onClick, theme = true }) {
  const buttonStyles = {
    ...styles.marketplaceBtn,
    backgroundColor: theme ? '#4f46e5' : '#818cf8',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
      <ShoppingBag size={20} />
      <span>Marketplace</span>
    </button>
  );
}

export function PostButton({ onClick, theme = true }) {
  const buttonStyles = {
    ...styles.postBtn,
    backgroundColor: theme ? '#4f46e5' : '#818cf8',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button style={buttonStyles} onClick={onClick}>
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

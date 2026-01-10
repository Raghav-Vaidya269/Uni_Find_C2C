export const styles = {
  // Overlay backdrop
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '1rem',
  },

  // Modal container
  modal: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '800px',
    maxHeight: '85vh',
    overflow: 'auto',
    position: 'relative',
    padding: '2rem',
  },

  // Close button
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#6b7280',
    transition: 'color 0.2s',
    zIndex: 10,
  },

  // Product container
  productContainer: {
    display: 'grid',
    gridTemplateColumns: '35% 65%',
    gap: '2rem',
    marginTop: '0rem',
  },

  // Image section
  imageSection: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: '0.5rem',
    minHeight: '350px',
    aspectRatio: '1',
  },

  productImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '0.5rem',
  },

  favoriteButton: {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },

  // Details section
  detailsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    paddingRight: '0.5rem',
  },

  productTitle: {
    fontSize: '1.75rem',
    fontWeight: '600',
    color: '#111827',
    margin: 0,
  },

  priceSection: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem',
  },

  price: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#4f46e5',
  },

  // Info row
  infoRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
  },

  infoGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },

  infoLabel: {
    fontSize: '0.8rem',
    color: '#9ca3af',
    textTransform: 'capitalize',
    fontWeight: '500',
  },

  categoryBadge: {
    display: 'inline-block',
    backgroundColor: '#e5e7eb',
    color: '#374151',
    padding: '0.3rem 0.65rem',
    borderRadius: '0.3rem',
    fontSize: '0.8rem',
    fontWeight: '500',
    width: 'fit-content',
  },

  conditionText: {
    fontSize: '0.8rem',
    color: '#374151',
    fontWeight: '500',
  },

  // Status section
  statusSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },

  statusBadge: {
    display: 'inline-block',
    backgroundColor: '#d1fae5',
    color: '#059669',
    padding: '0.3rem 0.65rem',
    borderRadius: '0.3rem',
    fontSize: '0.8rem',
    fontWeight: '500',
    width: 'fit-content',
  },

  // Description section
  descriptionSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },

  descriptionText: {
    fontSize: '0.85rem',
    color: '#374151',
    lineHeight: '1.5',
    margin: 0,
  },

  // Posted section
  postedSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#9ca3af',
    fontSize: '0.8rem',
  },

  postedText: {
    color: '#374151',
    fontSize: '0.8rem',
  },

  // Divider
  divider: {
    height: '1px',
    backgroundColor: '#e5e7eb',
    margin: '0.5rem 0',
  },

  // Action section
  actionSection: {
    display: 'flex',
    gap: '0.8rem',
    alignItems: 'flex-end',
    padding: '0.5rem 0',
  },

  quantityControl: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
  },

  quantityLabel: {
    fontSize: '0.8rem',
    color: '#374151',
    fontWeight: '500',
  },

  quantityInputGroup: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #d1d5db',
    borderRadius: '0.3rem',
    overflow: 'hidden',
    backgroundColor: 'white',
    width: 'fit-content',
  },

  quantityButton: {
    width: '32px',
    height: '32px',
    border: 'none',
    backgroundColor: '#e5e7eb',
    color: '#374151',
    cursor: 'pointer',
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s',
  },

  quantityInput: {
    width: '45px',
    height: '32px',
    border: 'none',
    textAlign: 'center',
    fontSize: '0.8rem',
    padding: '0',
    backgroundColor: 'white',
  },

  chatButton: {
    padding: '0.6rem 1.2rem',
    backgroundColor: '#d1d5db',
    color: '#374151',
    border: 'none',
    borderRadius: '0.3rem',
    fontSize: '0.8rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    minWidth: '100px',
  },

  buyButton: {
    padding: '0.6rem 1.2rem',
    backgroundColor: '#22c55e',
    color: 'white',
    border: 'none',
    borderRadius: '0.3rem',
    fontSize: '0.8rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    minWidth: '100px',
  },

  // Contact section
  contactSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    paddingTop: '0.5rem',
  },

  contactTitle: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#111827',
    margin: 0,
  },

  sellerInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
  },

  sellerAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#e0e7ff',
    color: '#4f46e5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: '1rem',
  },

  sellerDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  },

  sellerName: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#111827',
  },

  sellerPhone: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    color: '#4f46e5',
    fontSize: '0.8rem',
  },

  // Responsive
  '@media (max-width: 1024px)': {
    productContainer: {
      gridTemplateColumns: '1fr 1fr',
      gap: '1.5rem',
    },
  },

  '@media (max-width: 768px)': {
    productContainer: {
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
    },
    modal: {
      padding: '1.5rem',
    },
  },
};

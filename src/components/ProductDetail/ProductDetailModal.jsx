import React, { useState } from 'react';
import { X, Calendar, User, Phone, Heart } from 'lucide-react';
import { styles } from './productDetailStyles';

export default function ProductDetailModal({ isOpen, onClose, item }) {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen || !item) return null;

  const handleQuantityChange = (value) => {
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={styles.closeButton}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Product Container */}
        <div style={styles.productContainer}>
          {/* Left Side - Image */}
          <div style={styles.imageSection}>
            <img
              src={item.image || 'https://via.placeholder.com/600x600?text=No+Image'}
              alt={item.title}
              style={styles.productImage}
            />
            <button style={styles.favoriteButton} title="Add to favorites">
              <Heart size={20} />
            </button>
          </div>

          {/* Right Side - Details */}
          <div style={styles.detailsSection}>
            {/* Title */}
            <h1 style={styles.productTitle}>{item.title}</h1>

            {/* Price */}
            <div style={styles.priceSection}>
              <span style={styles.price}>Rs {item.price}</span>
            </div>

            {/* Category and Condition Row */}
            <div style={styles.infoRow}>
              <div style={styles.infoGroup}>
                <label style={styles.infoLabel}>Category</label>
                <span style={styles.categoryBadge}>{item.category}</span>
              </div>
              <div style={styles.infoGroup}>
                <label style={styles.infoLabel}>Condition</label>
                <span style={styles.conditionText}>{item.condition}</span>
              </div>
            </div>

            {/* Status */}
            <div style={styles.statusSection}>
              <label style={styles.infoLabel}>Status</label>
              <span style={styles.statusBadge}>{item.status}</span>
            </div>

            {/* Description */}
            <div style={styles.descriptionSection}>
              <label style={styles.infoLabel}>Description</label>
              <p style={styles.descriptionText}>{item.description}</p>
            </div>

            {/* Posted Time */}
            <div style={styles.postedSection}>
              <Calendar size={16} color="#9ca3af" />
              <span style={styles.postedText}>{item.postedTime || 'less than a minute ago'}</span>
            </div>

            {/* Divider */}
            <div style={styles.divider}></div>

            {/* Quantity and Buttons */}
            <div style={styles.actionSection}>
              <div style={styles.quantityControl}>
                <span style={styles.quantityLabel}>Quantity</span>
                <div style={styles.quantityInputGroup}>
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    style={styles.quantityButton}
                    title="Decrease quantity"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    style={styles.quantityInput}
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    style={styles.quantityButton}
                    title="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button style={styles.chatButton}>Chat Now</button>
              <button style={styles.buyButton}>BUY</button>
            </div>

            {/* Divider */}
            <div style={styles.divider}></div>

            {/* Contact Seller */}
            <div style={styles.contactSection}>
              <h3 style={styles.contactTitle}>Contact Seller</h3>
              <div style={styles.sellerInfo}>
                <div style={styles.sellerAvatar}>
                  {item.sellerName?.charAt(0) || 'U'}
                </div>
                <div style={styles.sellerDetails}>
                  <div style={styles.sellerName}>{item.sellerName}</div>
                  <div style={styles.sellerPhone}>
                    <Phone size={16} color="#4f46e5" />
                    <span>{item.sellerPhone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import './TScaleUI.css';

const TScaleUI = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  const toggleContactVisibility = () => {
    setIsContactVisible(!isContactVisible);
  };

  const formatPhoneNumber = (phone) => {
    // Format as XXX-XXX-XXXX
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  };

  const handleCall = () => {
    window.location.href = `tel:9283498390`;
  };

  return (
    <div className="tscale-container">
      <header className="tscale-header">
        <h1 className="tscale-title">T sclae</h1>
        <p className="tscale-subtitle">Stationery Item</p>
      </header>

      <main className="tscale-content">
        {/* Price Section */}
        <div className="price-section">
          <div className="price-tag">Rs 500</div>
        </div>

        {/* Details Table */}
        <div className="details-section">
          <table className="details-table">
            <tbody>
              <tr className="detail-row">
                <td className="detail-label">Category</td>
                <td className="detail-value">Stationery</td>
              </tr>
              <tr className="detail-row">
                <td className="detail-label">Condition</td>
                <td className="detail-value">
                  <span className="condition-badge condition-good">Good</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Status Section */}
        <div className="status-section">
          <h3 className="section-title">Status</h3>
          <div className="status-badge available">Available</div>
        </div>

        {/* Description Section */}
        <div className="description-section">
          <h3 className="section-title">Description</h3>
          <div className="description-card">
            <p className="description-text">
              It has been used for 1sem and now i wannna sell it
            </p>
          </div>
        </div>

        {/* Posted Info */}
        <div className="posted-section">
          <div className="posted-info">
            <span className="posted-icon">⏱️</span>
            <span className="posted-text">Posted less than a minute ago</span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <button 
            className="contact-button" 
            onClick={toggleContactVisibility}
            aria-expanded={isContactVisible}
            aria-label="Contact Seller"
          >
            {isContactVisible ? 'Hide Contact' : 'Contact Seller'}
          </button>
          
          {isContactVisible && (
            <div className="seller-info-card">
              <div className="seller-details">
                <div className="seller-avatar">
                  <span className="avatar-text">BS</span>
                </div>
                <div className="seller-text-info">
                  <h4 className="seller-name">Bhavik Shrestha</h4>
                  <div className="phone-section">
                    <span className="phone-icon">📱</span>
                    <a 
                      href="tel:9283498390" 
                      className="seller-phone"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCall();
                      }}
                    >
                      {formatPhoneNumber('9283498390')}
                    </a>
                  </div>
                </div>
              </div>
              <button 
                className="call-button"
                onClick={handleCall}
              >
                📞 Call Now
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="tscale-footer">
        <p className="footer-text">T Scale Marketplace • Stationery Section</p>
      </footer>
    </div>
  );
};

export default TScaleUI;
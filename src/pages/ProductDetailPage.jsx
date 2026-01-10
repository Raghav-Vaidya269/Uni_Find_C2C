import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Phone, Heart, ChevronLeft } from 'lucide-react';
import { Header } from '../components/Header';
import { styles } from '../components/ProductDetail/productDetailStyles';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Sample product data - in real app this would come from API
  const products = [
    { 
      id: 1, 
      title: 'T sclae', 
      price: 500, 
      description: 'It has been used for 1sem and now i wanna sell it',
      category: 'Stationery',
      condition: 'Good',
      status: 'Available',
      postedTime: 'less than a minute ago',
      sellerName: 'Bhavik Shrestha',
      sellerPhone: '9283498390',
      image: null,
    },
    { 
      id: 2, 
      title: 'Laptop', 
      price: 45000, 
      description: 'Dell Inspiron 15, i5 processor, 8GB RAM',
      category: 'Electronics',
      condition: 'Like New',
      status: 'Available',
      postedTime: '2 days ago',
      sellerName: 'Raj Sharma',
      sellerPhone: '9841234567',
      image: null,
    },
    { 
      id: 3, 
      title: 'Physics Textbook', 
      price: 300, 
      description: 'NCERT Physics class 12, complete with notes',
      category: 'Books',
      condition: 'Good',
      status: 'Available',
      postedTime: '1 week ago',
      sellerName: 'Priya Poudel',
      sellerPhone: '9876543210',
      image: null,
    },
    { 
      id: 4, 
      title: 'Study Table', 
      price: 2500, 
      description: 'Wooden study table, good condition, spacious',
      category: 'Furniture',
      condition: 'Fair',
      status: 'Available',
      postedTime: '3 days ago',
      sellerName: 'Kumar Subedi',
      sellerPhone: '9765432109',
      image: null,
    },
  ];

  const item = products.find(p => p.id === parseInt(id));

  if (!item) {
    return (
      <div style={{ ...styles.overlay, backgroundColor: '#fff' }}>
        <div style={{ textAlign: 'center', color: '#111827' }}>
          <p>Product not found</p>
          <button 
            onClick={() => navigate('/')}
            style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (value) => {
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <Header />

      {/* Back Button */}
      <div style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '1rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#4f46e5',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: '500',
            }}
          >
            <ChevronLeft size={20} />
            Back to Marketplace
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1rem' }}>
        {/* Product Card */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '45% 55%', gap: '3rem' }}>
            {/* Left Side - Image */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', borderRadius: '0.5rem', minHeight: '500px' }}>
              <img
                src={item.image || 'https://via.placeholder.com/600x600?text=No+Image'}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
              />
              <button style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid #e5e7eb', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }} title="Add to favorites">
                <Heart size={24} />
              </button>
            </div>

            {/* Right Side - Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Title */}
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#111827', margin: 0 }}>{item.title}</h1>

              {/* Price */}
              <div>
                <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4f46e5' }}>Rs {item.price}</span>
              </div>

              {/* Category and Condition Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <label style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '500', marginBottom: '0.5rem', display: 'block' }}>Category</label>
                  <span style={{ display: 'inline-block', backgroundColor: '#e5e7eb', color: '#374151', padding: '0.35rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: '500' }}>{item.category}</span>
                </div>
                <div>
                  <label style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '500', marginBottom: '0.5rem', display: 'block' }}>Condition</label>
                  <span style={{ fontSize: '0.875rem', color: '#374151', fontWeight: '500' }}>{item.condition}</span>
                </div>
              </div>

              {/* Status */}
              <div>
                <label style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '500', marginBottom: '0.5rem', display: 'block' }}>Status</label>
                <span style={{ display: 'inline-block', backgroundColor: '#d1fae5', color: '#059669', padding: '0.35rem 0.75rem', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: '500' }}>{item.status}</span>
              </div>

              {/* Description */}
              <div>
                <label style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '500', marginBottom: '0.5rem', display: 'block' }}>Description</label>
                <p style={{ fontSize: '0.875rem', color: '#374151', lineHeight: '1.6', margin: 0 }}>{item.description}</p>
              </div>

              {/* Posted Time */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af', fontSize: '0.875rem' }}>
                <Calendar size={16} color="#9ca3af" />
                <span>{item.postedTime}</span>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: '#e5e7eb' }}></div>

              {/* Quantity and Buttons */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <span style={{ fontSize: '0.875rem', color: '#374151', fontWeight: '500' }}>Quantity</span>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #d1d5db', borderRadius: '0.375rem', overflow: 'hidden', backgroundColor: 'white', width: 'fit-content' }}>
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      style={{ width: '36px', height: '36px', border: 'none', backgroundColor: '#e5e7eb', color: '#374151', cursor: 'pointer', fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s' }}
                      title="Decrease quantity"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                      style={{ width: '50px', height: '36px', border: 'none', borderLeft: '1px solid #d1d5db', borderRight: '1px solid #d1d5db', textAlign: 'center', fontSize: '0.875rem', padding: '0' }}
                      min="1"
                    />
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      style={{ width: '36px', height: '36px', border: 'none', backgroundColor: '#e5e7eb', color: '#374151', cursor: 'pointer', fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s' }}
                      title="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button style={{ flex: 1, padding: '0.75rem 1.5rem', backgroundColor: '#d1d5db', color: '#374151', border: 'none', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: '500', cursor: 'pointer', transition: 'background-color 0.2s', minWidth: '120px' }}>Chat Now</button>
                <button style={{ flex: 1, padding: '0.75rem 1.5rem', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: '500', cursor: 'pointer', transition: 'background-color 0.2s', minWidth: '120px' }}>BUY</button>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: '#e5e7eb' }}></div>

              {/* Contact Seller */}
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#111827', margin: '0 0 1rem 0' }}>Contact Seller</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#e0e7ff', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '600', fontSize: '1.125rem' }}>
                    {item.sellerName?.charAt(0) || 'U'}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827' }}>{item.sellerName}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4f46e5', fontSize: '0.875rem' }}>
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
    </div>
  );
}

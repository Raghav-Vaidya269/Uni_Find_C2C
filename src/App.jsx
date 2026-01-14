import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketplacePage from './pages/MarketplacePage';
import ProductDetailPage from './pages/ProductDetailPage';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: theme ? '#f9fafb' : '#111827',
      transition: 'background-color 0.3s ease'
    }}>
      <Router>
        <Routes>
          <Route path="/" element={<MarketplacePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

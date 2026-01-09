import React, { useState } from 'react';
import { ShoppingBag, Search, GraduationCap, User, ChevronDown } from 'lucide-react';

export default function UniFindMarketplace() {
  const [accountOpen, setAccountOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [theme, setTheme] = useState(true);

  const marketplaceItems = [
    { id: 1, title: 'Text', price: 0, description: 'Body text.' },
    { id: 2, title: 'Text', price: 0, description: 'Body text.' },
    { id: 3, title: 'Text', price: 0, description: 'Body text.' },
    { id: 4, title: 'Text', price: 0, description: 'Body text.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 text-indigo-600">
              <GraduationCap size={32} strokeWidth={2.5} />
              <span className="text-xl font-bold">UNI-find</span>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                <ShoppingBag size={20} />
                <span className="font-medium">Marketplace</span>
              </button>
              
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium">
                Post Item
              </button>

              {/* Account Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setAccountOpen(!accountOpen)}
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <User size={24} className="text-white" />
                </button>

                {accountOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <button 
                      onClick={() => setAccountOpen(false)}
                      className="w-full px-4 py-2 text-left flex items-center justify-between hover:bg-gray-50"
                    >
                      <span className="font-medium text-gray-700">Account</span>
                      <ChevronDown size={20} className="text-gray-400" />
                    </button>
                    
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
                          OR
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Olivia Rhye</div>
                          <div className="text-sm text-gray-500">olivia@untitledui.com</div>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-auto"></div>
                      </div>
                    </div>

                    <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50">
                      Settings
                    </button>

                    <div className="px-4 py-2 flex items-center justify-between hover:bg-gray-50">
                      <span className="text-gray-700">Theme</span>
                      <button
                        onClick={() => setTheme(!theme)}
                        className={`w-12 h-6 rounded-full transition ${theme ? 'bg-green-500' : 'bg-gray-300'}`}
                      >
                        <div className={`w-5 h-5 bg-white rounded-full shadow transform transition ${theme ? 'translate-x-6' : 'translate-x-1'}`}></div>
                      </button>
                    </div>

                    <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50">
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
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to UNI-find</h1>
          <p className="text-xl text-indigo-100 mb-8">Kathmandu University's Student Marketplace</p>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg flex items-center overflow-hidden">
            <div className="flex items-center flex-1 px-4">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search for items, books, electronics..."
                className="flex-1 px-4 py-4 outline-none text-gray-700"
              />
            </div>
            <select className="px-6 py-4 border-l border-gray-200 outline-none text-gray-700 bg-white cursor-pointer">
              <option>All Categories</option>
              <option>Books</option>
              <option>Electronics</option>
              <option>Furniture</option>
            </select>
          </div>
        </div>
      </div>

      {/* Marketplace Section */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <ShoppingBag size={32} className="text-gray-800" />
            <h2 className="text-3xl font-bold text-gray-900">Marketplace</h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeFilter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Items
            </button>
            <button
              onClick={() => setActiveFilter('available')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeFilter === 'available'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setActiveFilter('pending')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeFilter === 'pending'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Pending
            </button>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketplaceItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="aspect-square bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-xl font-bold text-gray-900 mb-2">${item.price}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">© 2025 UNI-find - Kathmandu University Student Marketplace</p>
          <button className="text-indigo-400 hover:text-indigo-300 transition">Contact</button>
        </div>
      </footer>
    </div>
  );
}
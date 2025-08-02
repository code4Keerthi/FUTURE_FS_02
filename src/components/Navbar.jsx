// src/components/Navbar.jsx
import React from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = ({ cartCount, onCartClick, searchQuery, setSearchQuery }) => {
  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">🛍️ ShopKart</h1>

        {/* Search Bar */}
        <input
  type="text"
  placeholder="Search for products, brands..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  className="flex-1 mx-4 px-4 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
/>


        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-3 py-2 bg-white text-blue-600 font-medium rounded hover:bg-gray-200">
            Login
          </button>
          <button className="px-3 py-2 bg-white text-blue-600 font-medium rounded hover:bg-gray-200">
            Become a Seller
          </button>
          <button
            onClick={onCartClick}
            className="flex items-center gap-1 px-3 py-2 bg-white text-blue-600 rounded hover:bg-gray-200"
          >
            <FiShoppingCart />
            Cart ({cartCount})
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

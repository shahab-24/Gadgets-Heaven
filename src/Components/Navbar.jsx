import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ count}) => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-blue-600">
              ShopEase
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
                Home
              </Link>
            </div>
            
        
            
            {/* Cart Counter */}
            <div className="relative">
              <Link to="/cart" className="text-gray-700 hover:text-blue-600 px-3 py-2 flex items-center">
                <span className="mr-1">🛒</span>
                <span className="bg-blue-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {count}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from "react";
import { ShoppingCart, Heart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-lg sticky top-0 z-50 mb-6">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-white">📱 Gadgets</span>{" "}
          <span className="text-yellow-300">Heaven</span>
        </h1>

        
        <div className="flex items-center gap-4">
          <button className="btn btn-sm btn-ghost text-white hover:bg-blue-600 transition">
            <Heart size={18} />
          </button>
          <button className="btn btn-sm btn-ghost text-white hover:bg-blue-600 transition">
            <ShoppingCart size={18} />
          </button>
          
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;

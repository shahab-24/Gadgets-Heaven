import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Gadgets Heaven</h2>
          <p className="text-sm">
            Explore the latest & greatest tech products curated for innovation
            lovers.
          </p>
        </div>

        
        <div>
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-white mb-2">Contact</h3>
          <p className="text-sm">Email: shahabctg24@gmail.com</p>
          <p className="text-sm">Phone: +880 1786609585</p>
        </div>
      </div>

      <div className="text-center py-4 text-sm border-t border-gray-700">
        © {new Date().getFullYear()} Gadgets Heaven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

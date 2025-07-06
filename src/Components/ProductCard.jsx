import React, { useState, useEffect } from "react";

const ProductCard = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = product.image;
    img.onload = () => setIsLoading(false);
  }, [product.image]);

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 max-w-xs w-full mx-auto border border-gray-100 overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        {isLoading ? (
          <div className="skeleton w-full h-full"></div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>

      {/* Card Body */}
      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h2>
        <p className="text-blue-600 font-bold text-md">${product.price}</p>

        {/* Variant Select */}
        <div>
          <label className="block text-sm text-gray-600 font-medium mb-1">
            Choose Variant
          </label>
          <select
            className="select select-sm w-full rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-blue-700 bg-blue-100 text-sm"
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
          >
            {product.variants.map((variant) => (
              <option key={variant}>{variant}</option>
            ))}
          </select>
        </div>

        {/* Button */}
        <div>
        {product.inStock ? (
  <button className="w-full py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:from-blue-700 hover:to-indigo-700 transition duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
    🛒 Add to Cart
  </button>
) : (
  <button className="w-full py-2 text-sm font-semibold rounded-full bg-gray-200 text-gray-500 border border-gray-300 cursor-not-allowed">
    🚫 Out of Stock
  </button>
)}

        </div>
      </div>
    </div>
  );
};

export default ProductCard;

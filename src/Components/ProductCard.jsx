import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, count, setCount }) => {
  const navigate = useNavigate();
  
  // Default product data for safety
  const defaultProduct = {
    id: 0,
    title: "Product Title",
    price: 0,
    image: "",
    description: "",
    rating: { rate: 0, count: 0 },
    category: ""
  };
  
  const safeProduct = product || defaultProduct;
  const [isLoading, setIsLoading] = useState(true);
//   const [isLiked, setIsLiked] = useState(false);

  // Image loading effect
  useEffect(() => {
    if (safeProduct.image) {
      const img = new Image();
      img.src = safeProduct.image;
      img.onload = () => setIsLoading(false);
      img.onerror = () => setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [safeProduct.image]);

 
  // Handle buy now action
  const handleBuyNow = (e) => {
        e.stopPropagation();
        navigate(`/products/${safeProduct.id}`, {
          state: { product: safeProduct }
        });
      };
    

  // Handle add to cart
  const handleAddToCart = (e) => {
    e.stopPropagation();
// console.log("cart clicked")
    setCount(count + 1);
    
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full border border-gray-100 overflow-hidden group cursor-pointer"
      OnClick={handleBuyNow}
//       
      role="button"
      tabIndex={0}
//    
    >
      {/* Image with loading state */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        {isLoading ? (
          <div className="animate-pulse bg-gray-200 w-full h-full"></div>
        ) : (
          <img
            src={safeProduct.image || "https://via.placeholder.com/300?text=No+Image"}
            alt={safeProduct.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-4"
            loading="lazy"
          />
        )}
      </div>

      {/* Product info */}
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-1 flex-1">
            {safeProduct.title}
          </h2>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">
            {safeProduct.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 min-h-[40px]">
          {safeProduct.description}
        </p>
        
        
        
        {/* Price */}
        <p className="text-blue-600 font-bold text-lg mt-2">
          ${safeProduct.price.toFixed(2)}
        </p>

        {/* Action buttons */}
        <div className="flex gap-2 mt-3">
          <button 
            onClick={handleAddToCart}
            className="flex-1 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-1"
          >
             Add to Cart
          </button>
          <button 
            onClick={handleBuyNow}
            className="flex-1 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-1"
          >
             Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};



export default ProductCard;
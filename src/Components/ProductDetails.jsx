// Components/ProductDetails.jsx
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { state } = useLocation();
  const product = state?.product;
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Product not found </p>
        <button onClick={() => navigate('/')}> Go back</button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <button 
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
      >
        ← Back to products
      </button>
      
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-6">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-contain max-h-96"
          />
        </div>
        
        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
          
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
              {product.category}
            </span>
            
            {/* rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating.rate) ? 'text-yellow-400' : 'text-gray-300'}>
                  ★
        
                 </span>
              ))}
              <span className="text-gray-500 ml-1">({product.rating.count})</span>
            </div>
          </div>
          
          <p className="text-gray-800 text-lg">${product.price.toFixed(2)}</p>
          
          <p className="text-gray-700">{product.description}</p>
          
          <div className="flex gap-2 mt-3">
          <button 
            className="flex-1 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-1"
          >
             Add to Cart
          </button>
          <button 
        
            className="flex-1 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-1"
          >
             Buy Now
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
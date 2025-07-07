import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import PromoBanner from "./PromoBanner";

const CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "men's clothing", name: "Men's Fashion" },
  { id: "women's clothing", name: "Women's Fashion" },
  { id: "electronics", name: "Electronics" },
  { id: "jewelery", name: "Jewelry" },
];

const ProductListing = ({count, like, setLike, setCount}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      activeFilter === "all" 
        ? products 
        : products.filter(product => product.category === activeFilter)
    );
  }, [activeFilter, products]);

  return (
    <>
      <PromoBanner />
      
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
          Featured Products
        </h1>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-4 h-96 animate-pulse">
              <div className="bg-gray-200 h-48 rounded-xl mb-4"></div>
              <div className="bg-gray-200 h-4 rounded mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-3/4 mb-2"></div>
              <div className="bg-gray-200 h-4 rounded w-1/2 mb-4"></div>
              <div className="bg-gray-200 h-8 rounded-full"></div>
            </div>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              count={count} 
              setCount={setCount} 
              like={like} 
              setLike={setLike} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">No products found in this category</h3>
          <button 
            onClick={() => setActiveFilter("all")}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Browse All Products
          </button>
        </div>
      )}
    </>
  );
};

export default ProductListing;
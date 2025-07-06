
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { products } from "./Data/products";
import ProductCard from "./components/ProductCard";



function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
      
      
      <Navbar />

     
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-10">
            Featured Products
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
        </div>
      </main>

     
      <Footer />
    </div>
  );
}

export default App;

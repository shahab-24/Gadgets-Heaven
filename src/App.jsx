import { Routes, Route } from "react-router-dom";


import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductDetails from "./Components/ProductDetails";
import ProductListing from "./Components/ProductListng";
import { useState } from "react";

function App() {
        const [like, setLike] = useState(0)
        const [count, setCount] = useState(0)
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
      <Navbar like={like} count={count} />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <Routes>
            <Route path="/" element={<ProductListing like={like} set={setLike} count={count} setCount={setCount} />} />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
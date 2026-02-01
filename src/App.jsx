import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import { ArrowRight, Sprout } from 'lucide-react';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar cartCount={cart.length} onCartClick={() => alert(`You have ${cart.length} items in your cart.`)} />

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-agri-light/30 rounded-bl-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agri-light text-agri-dark text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-green"></span>
                </span>
                New Harvest Season 2026
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight mb-6">
                Cultivate abundance with <span className="text-agri-green">premium inputs</span>
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-2xl">
                Source high-quality seeds, fertilizers, and tools. Bringing modern agricultural solutions to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#products" className="inline-flex items-center justify-center gap-2 bg-agri-dark text-white px-8 py-3 rounded-xl font-semibold hover:bg-agri-green transition-all shadow-lg shadow-agri-green/20">
                  Shop Now <ArrowRight size={20} />
                </a>
                <button className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 border border-stone-200 px-8 py-3 rounded-xl font-semibold hover:bg-stone-50 transition-all">
                  <Sprout size={20} /> Learn Growing
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-agri-green rounded-3xl rotate-3 opacity-20 blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1625246333195-bf436c92aa7f?auto=format&fit=crop&q=80&w=1000"
                alt="Agriculture"
                className="relative rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-2">Featured Products</h2>
              <p className="text-stone-500">Handpicked essentials for your farm.</p>
            </div>
            <a href="#" className="hidden md:block text-agri-green font-semibold hover:text-agri-dark transition-colors">View all products &rarr;</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard key={product.id} product={product} onAdd={addToCart} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <a href="#" className="text-agri-green font-semibold hover:text-agri-dark transition-colors">View all products &rarr;</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-400">© 2026 AgriStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { products } from './data/products';
import { ArrowRight, Sprout, ShoppingCart, X, Plus, Minus, MessageCircle } from 'lucide-react';

function App() {
  const [cart, setCart] = useState([]);
  const [language, setLanguage] = useState('EN'); // 'EN' or 'KN'
  const [isCartOpen, setIsCartOpen] = useState(false);

  const translations = {
    EN: {
      heroTitle: "Cultivate abundance with premium inputs",
      heroSub: "Source high-quality seeds, fertilizers, and tools. Bringing modern agricultural solutions to your doorstep.",
      shopNow: "Shop Now",
      learnGrowing: "Learn Growing",
      featuredProducts: "Featured Products",
      featuredSub: "Handpicked essentials for your farm.",
      viewAll: "View all products",
      yourCart: "Your Cart",
      emptyCart: "Your cart is empty",
      subtotal: "Subtotal",
      checkout: "Checkout via WhatsApp",
      addedToCart: "Added to cart!",
      harvest: "New Harvest Season 2026",
      contactTitle: "Expert Farming Advice",
      contactSub: "Connect with our agricultural specialists on WhatsApp.",
      nameLabel: "Your Name",
      messageLabel: "Message",
      sendWhatsApp: "Chat on WhatsApp"
    },
    KN: {
      heroTitle: "ಪ್ರೀಮಿಯಂ ಉತ್ಪನ್ನಗಳೊಂದಿಗೆ ಸಮೃದ್ಧಿಯನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಿ",
      heroSub: "ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಬೀಜಗಳು, ಗೊಬ್ಬರಗಳು ಮತ್ತು ಉಪಕರಣಗಳನ್ನು ಪಡೆಯಿರಿ. ಆಧುನಿಕ ಕೃಷಿ ಪರಿಹಾರಗಳನ್ನು ನಿಮ್ಮ ಮನೆ ಬಾಗಿಲಿಗೆ ತರುತ್ತೇವೆ.",
      shopNow: "ಈಗ ಖರೀದಿಸಿ",
      learnGrowing: "ಕೃಷಿ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ",
      featuredProducts: "ವಿಶೇಷ ಉತ್ಪನ್ನಗಳು",
      featuredSub: "ನಿಮ್ಮ ಫಾರ್ಮ್‌ಗಾಗಿ ಆಯ್ದ ಅಗತ್ಯ ವಸ್ತುಗಳು.",
      viewAll: "ಎಲ್ಲಾ ಉತ್ಪನ್ನಗಳನ್ನು ನೋಡಿ",
      yourCart: "ನಿಮ್ಮ ಕಾರ್ಟ್",
      emptyCart: "ನಿಮ್ಮ ಕಾರ್ಟ್ ಖಾಲಿಯಾಗಿದೆ",
      subtotal: "ಒಟ್ಟು ಮೊತ್ತ",
      checkout: "WhatsApp ಮೂಲಕ ಆರ್ಡರ್ ಮಾಡಿ",
      addedToCart: "ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಲಾಗಿದೆ!",
      harvest: "ಹೊಸ ಸುಗ್ಗಿ ಕಾಲ 2026",
      contactTitle: "ತಜ್ಞ ಕೃಷಿ ಸಲಹೆ",
      contactSub: "WhatsApp ನಲ್ಲಿ ನಮ್ಮ ಕೃಷಿ ತಜ್ಞರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ.",
      nameLabel: "ನಿಮ್ಮ ಹೆಸರು",
      messageLabel: "ಸಂದೇಶ",
      sendWhatsApp: "WhatsApp ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ"
    }
  };

  const t = translations[language];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const sendOrderWhatsApp = () => {
    if (cart.length === 0) return;
    let orderDetails = `*🚀 New Order from AgriStore*\n\n`;
    cart.forEach(item => {
      orderDetails += `- ${language === 'KN' ? item.nameKN : item.name} (x${item.quantity}) - ₹${item.price * item.quantity}\n`;
    });
    orderDetails += `\n*💰 Total Amount:* ₹${cartTotal}`;
    const url = `https://wa.me/916360760312?text=${encodeURIComponent(orderDetails)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans antialiased">
      <Navbar
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        language={language}
        onLanguageToggle={() => setLanguage(language === 'EN' ? 'KN' : 'EN')}
      />

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
            <div className="p-6 border-b border-stone-100 flex justify-between items-center">
              <h2 className="text-xl font-bold">{t.yourCart}</h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-12 text-stone-400">
                  <ShoppingCart size={48} className="mx-auto mb-4 opacity-20" />
                  <p>{t.emptyCart}</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 bg-stone-50 p-4 rounded-2xl border border-stone-100">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm">{language === 'KN' ? item.nameKN : item.name}</h4>
                      <p className="text-agri-green font-bold text-sm">₹{item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center border border-stone-200 rounded-lg hover:bg-white transition-colors">
                          <Minus size={14} />
                        </button>
                        <span className="font-bold text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center border border-stone-200 rounded-lg hover:bg-white transition-colors">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-stone-300 hover:text-red-500 transition-colors self-start">
                      <X size={20} />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-stone-100 bg-stone-50/50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-stone-500 font-medium">{t.subtotal}</span>
                <span className="text-2xl font-bold text-agri-green">₹{cartTotal}</span>
              </div>
              <button
                onClick={sendOrderWhatsApp}
                disabled={cart.length === 0}
                className="w-full bg-agri-green hover:bg-agri-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-agri-green/20 disabled:opacity-50 disabled:shadow-none"
              >
                {t.checkout}
              </button>
            </div>
          </div>
        </div>
      )}

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
                {t.harvest}
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight mb-6 leading-tight">
                {t.heroTitle.split('premium').map((p, i) => i === 1 ? <React.Fragment key={i}><span className="text-agri-green">premium</span>{p}</React.Fragment> : p)}
              </h1>
              <p className="text-xl text-stone-600 mb-8 leading-relaxed max-w-2xl">
                {t.heroSub}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#products" className="inline-flex items-center justify-center gap-2 bg-agri-dark text-white px-8 py-3 rounded-xl font-semibold hover:bg-agri-green transition-all shadow-lg shadow-agri-green/20">
                  {t.shopNow} <ArrowRight size={20} />
                </a>
                <button className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 border border-stone-200 px-8 py-3 rounded-xl font-semibold hover:bg-stone-50 transition-all">
                  <Sprout size={20} /> {t.learnGrowing}
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
              <h2 className="text-3xl font-bold text-stone-900 mb-2">{t.featuredProducts}</h2>
              <p className="text-stone-500">{t.featuredSub}</p>
            </div>
            <a href="#" className="hidden md:block text-agri-green font-semibold hover:text-agri-dark transition-colors">{t.viewAll} &rarr;</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={addToCart}
                language={language}
              />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <a href="#" className="text-agri-green font-semibold hover:text-agri-dark transition-colors">{t.viewAll} &rarr;</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.contactTitle}</h2>
          <p className="text-stone-500 mb-12">{t.contactSub}</p>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 text-left">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">{t.nameLabel}</label>
                <input type="text" className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-agri-green outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">{t.messageLabel}</label>
                <textarea rows="4" className="w-full px-5 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-agri-green outline-none" placeholder="How can we help?"></textarea>
              </div>
              <button
                onClick={() => window.open('https://wa.me/916360760312', '_blank')}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-500/20"
              >
                <MessageCircle size={24} /> {t.sendWhatsApp}
              </button>
            </div>
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

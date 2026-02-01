import React from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';

const Navbar = ({ cartCount, onCartClick }) => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-stone-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2">
                        <div className="bg-agri-green p-2 rounded-lg text-white">
                            <Leaf size={24} />
                        </div>
                        <span className="text-xl font-bold text-stone-900 tracking-tight">Agri<span className="text-agri-green">Store</span></span>
                    </div>

                    <button
                        onClick={onCartClick}
                        className="relative p-2 hover:bg-stone-100 rounded-full transition-colors"
                    >
                        <ShoppingCart className="text-stone-600" size={24} />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-agri-accent text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

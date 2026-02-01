import React from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, onAdd }) => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 group">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-stone-800 text-xs font-semibold px-2 py-1 rounded-md">
                    {product.category}
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-lg font-bold text-stone-900 mb-1">{product.name}</h3>
                <p className="text-sm text-stone-500 mb-4 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-agri-green">₹{product.price}</span>
                    <button
                        onClick={() => onAdd(product)}
                        className="flex items-center gap-1 bg-stone-900 hover:bg-agri-green text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                        <Plus size={16} />
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

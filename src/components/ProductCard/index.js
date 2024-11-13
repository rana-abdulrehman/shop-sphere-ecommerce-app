import React, { useState } from 'react';
import QuantitySelector from '../QuantitySelector';

const ProductCard = ({ product, addToCart, showToast }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : prev);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`Added ${quantity} ${product.title} to cart`);
    setQuantity(1); 
  };

  return (
    <div className="border p-4 rounded shadow flex flex-col h-full justify-between">
      <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{product.category}</span>
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain my-2" />
      <h2 className="text-lg font-bold line-clamp-3">{product.title}</h2>
      <p className="text-gray-600 line-clamp-5">{product.description}</p>
      <p className="text-xl font-bold mt-2">${product.price}</p>
      <div className="flex items-center mt-2">
        <QuantitySelector
          quantity={quantity}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>
      <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
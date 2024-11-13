import React from 'react';
import QuantitySelector from '../QuantitySelector';


const CartItem = ({ item, handleIncrement, handleDecrement, removeFromCart }) => (
  <div className="flex justify-between items-center border-b py-2">
    <div className="flex items-center">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-contain mr-4" />
      <div>
        <h3 className="text-sm font-bold">{item.title}</h3>
        <p>Price: ${item.price}</p>
      </div>
    </div>
    <div className='grid grid-cols-3 gap-1 items-center'>
      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      <QuantitySelector
        quantity={item.quantity}
        handleIncrement={() => handleIncrement(item.id)}
        handleDecrement={() => handleDecrement(item.id)}
      />
      <button onClick={() => removeFromCart(item.id)}  className="bg-red-500 text-white px-4 py-2 rounded">
        Remove
      </button>
    </div>
  </div>
);

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const handleIncrement = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    updateQuantity(productId, item.quantity + 1);
  };

  const handleDecrement = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    if (item.quantity > 1) {
      updateQuantity(productId, item.quantity - 1);
    }
  };

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className="mt-4 text-right border border-borderColor rounded-lg p-1">
            <p className="text-xl font-bold">Subtotal: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
            <p className="text-xl font-bold">Tax (10%): ${(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.1).toFixed(2)}</p>
            <p className="text-xl font-bold">Total: ${(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 1.1).toFixed(2)}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
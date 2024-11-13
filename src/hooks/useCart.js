import { useState, useEffect } from 'react';

const useCart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // const getCartItems = () => {
  //   return JSON.parse(localStorage.getItem('cart'))
  // }/// cart get from local without state

  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(prevCart => prevCart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart(prevCart => [...prevCart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId ) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
    // showToast(`Product with ${productId} is Removed from cart`);
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  return { cart, addToCart, removeFromCart, updateQuantity };
};

export default useCart;
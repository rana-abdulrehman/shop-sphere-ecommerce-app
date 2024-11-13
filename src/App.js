import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Toast from './components/Toast';
import About from './components/About';
import ContactUs from './components/ContactUs';
import useCart from './hooks/useCart';
import useToast from './hooks/useToast';

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart();
  const { toast, showToast, hideToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  console.log('hello');
  

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={cart.length} onSearch={handleSearch} />
        <div className="flex-grow">
          <Routes>
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/About" element={<About />} />
            <Route path="/" element={<ProductList addToCart={addToCart} searchQuery={searchQuery} showToast={showToast} />} />
            <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity}  />} />
          </Routes>
        </div>
        <Footer />
        {toast.show && <Toast message={toast.message} onClose={hideToast} />}
      </div>
    </Router>
  );
}

export default App;
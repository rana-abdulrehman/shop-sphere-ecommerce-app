import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search'; 
// import useCart from '../../hooks/useCart';

const Navbar = ({cartCount,  onSearch }) => {
  // const { getCartItems } = useCart();

  return (
    <header className="sticky top-0 bg-gray-800 text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="navbar-brand">
          <Link to="/">
            <img src="/images/logo.png" alt="Shop-Sphere-LOGO" className="w-32" />
          </Link>
        </div>
        <Search onSearch={onSearch} />
        <nav className="navbar">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/About" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/ContactUs" className="hover:text-gray-300">Contact</Link></li>
            <li><Link to="/cart" className="hover:text-gray-300">Cart ({cartCount})</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
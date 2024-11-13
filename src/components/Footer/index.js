import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>Your ultimate destination for cutting-edge gadgets!</p>
        <div className="mt-4">
          <a href="/" className="text-gray-300 hover:text-white mr-4">Computer Store</a>
          <a href="/" className="text-gray-300 hover:text-white mr-4">Laptop Store</a>
          <a href="/" className="text-gray-300 hover:text-white mr-4">Mobile Store</a>
          <a href="/" className="text-gray-300 hover:text-white">Accessories</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
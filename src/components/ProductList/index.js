import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';
import CategoryList from '../CategoryList';

const ProductList = ({ addToCart, searchQuery , showToast }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const url = selectedCategory
          ? `https://fakestoreapi.com/products/category/${selectedCategory}`
          : 'https://fakestoreapi.com/products';
        const response = await axios.get(url);
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  useEffect(() => {
    const lowerCasedQuery = searchQuery.toLowerCase();
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(lowerCasedQuery) ||
      product.category.toLowerCase().includes(lowerCasedQuery)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Join the Sphere Ecommerce Store Community – Where Every Purchase is a Step Towards Satisfaction!</h2>
      <div className="flex">
        <div className="w-1/4 mr-4">
          <CategoryList onSelectCategory={handleSelectCategory} />
        </div>
        <div className="w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="border p-4 rounded shadow animate-pulse">
                  <div className="bg-gray-300 h-48 w-full mb-4"></div>
                  <div className="bg-gray-300 h-6 w-3/4 mb-2"></div>
                  <div className="bg-gray-300 h-4 w-1/2"></div>
                </div>
              ))
            ) : (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart}  showToast={showToast}/>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
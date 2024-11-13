import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="mb-4">
      <h3 className="text-xl font-bold mb-2">Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <button
              onClick={() => onSelectCategory(category)}
              className="text-blue-500 hover:underline"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
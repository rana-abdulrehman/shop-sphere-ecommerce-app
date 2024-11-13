import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-container flex items-center gap-1">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded-l text-black"
        value={searchQuery}
        onChange={handleSearch}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Search</button>
    </div>
  );
};

export default Search;
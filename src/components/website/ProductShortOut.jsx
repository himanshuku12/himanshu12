import React, { useState } from 'react';


const ProductShortOut = ({ itemCount, onSortChange, onShowChange, onViewToggle }) => {
  const [sortOption, setSortOption] = useState('Name');
  const [showCount, setShowCount] = useState(12);
  const [isGridView, setIsGridView] = useState(true);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    onSortChange && onSortChange(e.target.value);
  };

  const handleShowChange = (e) => {
    setShowCount(e.target.value);
    onShowChange && onShowChange(e.target.value);
  };

  const toggleView = () => {
    setIsGridView(!isGridView);
    onViewToggle && onViewToggle(!isGridView);
  };

  return (
    <div className="flex items-center justify-between mt-10 p-4 bg-gray-100 rounded-md shadow-sm">
      
      <div className='flex items-center gap-9 text-lg'>
        <div className=" text-gray-600">
        {itemCount} Items
      </div>
      {/* Sort By Dropdown */}
      <div className="flex items-center text-sm">
          <span className="mr-2 text-gray-600">Sort By</span>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="px-2 py-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Date">Date</option>
          </select>
        </div>

        {/* Show Dropdown */}
        <div className="flex items-center text-sm ">
          <span className="mr-2 text-gray-600">Show</span>
          <select
            value={showCount}
            onChange={handleShowChange}
            className="px-2 pe-3 py-1 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value={12}>12</option>
            <option value={24}>24</option>
            <option value={48}>48</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4">
        

        {/* View Toggle Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsGridView(true)}
            className={`p-2 border rounded-md ${isGridView ? 'bg-blue-500 text-white' : 'bg-white text-gray-500'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M4 4h5v5H4V4zm7 0h5v5h-5V4zm7 0h5v5h-5V4zM4 11h5v5H4v-5zm7 0h5v5h-5v-5zm7 0h5v5h-5v-5zM4 18h5v5H4v-5zm7 0h5v5h-5v-5zm7 0h5v5h-5v-5z" />
            </svg>
          </button>
          <button
            onClick={() => setIsGridView(false)}
            className={`p-2 border rounded-md ${!isGridView ? 'bg-blue-500 text-white' : 'bg-white text-gray-500'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M4 4h16v2H4V4zm0 5h16v2H4V9zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductShortOut;

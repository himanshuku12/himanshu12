import React, { useState } from "react";

const CategoryFilter = () => {
  const [minPrice, setMinPrice] = useState(13.99);
  const [maxPrice, setMaxPrice] = useState(25.99);

  const handleMinPriceChange = (e) => {
    setMinPrice(parseFloat(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(parseFloat(e.target.value));
  };

  return (
    <div className="p-4 w-64 space-y-8 bg-white border border-gray-200 rounded-lg shadow-md">
      {/* Accessories Section */}
      <div>
        <h3 className="font-semibold text-gray-700 uppercase mb-4">Accessories</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>Apple Car</span><span>2</span>
          </li>
          <li className="flex justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>Air port & wireless</span><span>48</span>
          </li>
          <li className="flex justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>Cables & Docks</span><span>14</span>
          </li>
          <li className="flex justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>Cases & Films</span><span>15</span>
          </li>
          <li className="flex justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>Charging Devices</span><span>23</span>
          </li>
          <li className="flex justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>Connected Home</span><span>1</span>
          </li>
          <li className="flex justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>Headphones</span><span>95</span>
          </li>
        </ul>
      </div>

      {/* Price Range Section */}
      <div>
        <h3 className="font-semibold text-gray-700 uppercase mb-4">Prices</h3>
        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Min</label>
            <input
              type="number"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="p-2 border rounded-md w-20 text-center"
              min="0"
              step="0.01"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Max</label>
            <input
              type="number"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="p-2 border rounded-md w-20 text-center"
              min="0"
              step="0.01"
            />
          </div>
        </div>
      </div>

      {/* Color Section */}
      <div>
        <h3 className="font-semibold text-gray-700 uppercase mb-4">Color</h3>
        <div className="flex space-x-4">
          {["#FF0000", "#000000", "#FFFFFF", "#FFFF00", "#FF00FF", "#FFC0CB"].map(
            (color, index) => (
              <button
                key={index}
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: color }}
              />
            )
          )}
        </div>
      </div>

      {/* Brand Section */}
      <div>
        <h3 className="font-semibold text-gray-700 uppercase mb-4">Brand</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>Apple</span><span>99</span>
          </li>
          <li className="flex justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>LG</span><span>99</span>
          </li>
          <li className="flex justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>Samsung</span><span>99</span>
          </li>
          <li className="flex justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>Siemens</span><span>99</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryFilter;

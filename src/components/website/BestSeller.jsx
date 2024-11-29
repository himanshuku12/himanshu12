import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Apple MacBook Pro",
    imageUrl: "path/to/macbook-pro.jpg",
    price: "$849",
    oldPrice: "$899",
    label: "HOT",
  },
  {
    id: 2,
    name: "Apple MacBook Air",
    imageUrl: "path/to/macbook-air.jpg",
    price: "$499",
    oldPrice: "$599",
  },
  {
    id: 3,
    name: "Apple iPhone 11",
    imageUrl: "path/to/iphone-11.jpg",
    price: "$299",
    oldPrice: "$399",
    label: "HOT",
  },
  // Add more products as needed
];

const BestSeller = () => {
  return (
    <div className="lg:container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">BEST SELLER</h2>
      <div className="flex justify-center mb-8 sm:space-x-4 sm:flex-wrap ">
        <button className="px-4 py-2 text-gray-600 hover:text-black">
          All
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-black">
          Mac
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-black">
          iPhone
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-black">
          iPad
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-black">
          Accessories
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex items-center justify-center my-12 gap-4">
        <hr className="flex-grow border-t border-gray-300" />
        <button className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition duration-300">
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 15a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 15z" />
            </svg>
            Load More
          </span>
        </button>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
    </div>
  );
};

export default BestSeller;

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border w-64 m-auto rounded-lg shadow-md overflow-hidden relative transition transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hot Tag */}
      {product.label && (
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
          {product.label}
        </div>
      )}

      {/* Product Image */}
      <div className="w-full h-[200px] flex justify-center items-center bg-gray-100">
        <img
          src={product.imageUrl || "https://via.placeholder.com/250x150"} // Replace with your image URL
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? "opacity-20" : "opacity-100"
          }`}
        />

        {/* Hover icons */}
        {isHovered && (
          <div className="absolute inset-0 flex justify-center items-center space-x-4">
            <button className="p-3 bg-white rounded-full shadow-lg text-blue-500">
              <FaHeart size={20} />
            </button>
            <button className="p-3 bg-white rounded-full shadow-lg text-blue-500">
              <FaShoppingCart size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>

        {/* Rating */}
        <div className="flex justify-center items-center my-2">
          <span className="text-yellow-400">&#9733;</span>
          <span className="text-yellow-400">&#9733;</span>
          <span className="text-yellow-400">&#9733;</span>
          <span className="text-yellow-400">&#9733;</span>
          <span className="text-gray-300">&#9733;</span>
        </div>

        {/* Pricing */}
        <div className="flex justify-center items-baseline space-x-2">
          <span className="text-red-500 text-xl font-bold">{product.price}</span>
          <span className="text-gray-400 line-through">{product.oldPrice}</span>
        </div>
      </div>
    </div>
  );
}

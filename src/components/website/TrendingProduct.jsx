import React from 'react';

const TrendingProduct = () => {
  return (
    <div className="space-y-20">
      {/* Main Trending Product Section */}
      <div className="flex items-center justify-between h-fit px-24 py-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-xl overflow-hidden">
        {/* Text Section */}
        <div className="flex flex-col space-y-4 max-w-md">
          <h1 className="text-5xl font-bold leading-tight">iPhone 6 Plus</h1>
          <p className="text-lg opacity-90">Performance and design. Taken right to the edge.</p>
          <button className="inline-block mt-4 px-6 py-2 text-sm font-semibold text-blue-500 bg-white rounded-full shadow-lg hover:bg-blue-100 transition duration-300">
            SHOP NOW
          </button>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-end items-center w-full">
          <img
            src="img/2_corousel_2x1.png"  // replace with actual path
            alt="iPhone 6 Plus Front View"
            className="max-w-[400px] transform -rotate-6 transition-transform duration-500 hover:scale-105 hover:rotate-0 shadow-2xl"
          />
        </div>
      </div>

      {/* Feature Section */}
      <div className="flex justify-around items-center px-36 py-8 rounded-lg gap-20">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center space-y-2">
          <img src="path/to/free-shipping-icon.svg" alt="Free Shipping Icon" className="w-12 h-12 text-red-500" />
          <h3 className="text-lg font-semibold">FREE SHIPPING</h3>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center space-y-2">
          <img src="path/to/refund-icon.svg" alt="Refund Icon" className="w-12 h-12 text-red-500" />
          <h3 className="text-lg font-semibold">100% REFUND</h3>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center space-y-2">
          <img src="path/to/support-icon.svg" alt="Support Icon" className="w-12 h-12 text-red-500" />
          <h3 className="text-lg font-semibold">SUPPORT 24/7</h3>
          <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;

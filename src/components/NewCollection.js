import React from "react";
import leavesimage from '../assets/leavesimage.jpg'
const EucalyptusCollection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white w-full mx-auto mb-12">
    {/* Left Section */}
    <div className="lg:w-1/2 flex items-start justify-center h-auto px-6 lg:px-12 mb-8 lg:mb-0">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold mb-6 leading-snug">
          Discover Our New Collection
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Explore the beauty of our latest eucalyptus leaves collection,
          perfect for enhancing your space with a touch of nature’s elegance.
          Shop now to find your favorites!
        </p>
        <button className="px-8 py-3 border border-gray-800 text-gray-800 text-lg hover:bg-gray-800 hover:text-white transition duration-300">
          Shop Now
        </button>
      </div>
    </div>

    {/* Right Section */}
    <div className="lg:w-1/2 flex items-start justify-center px-6 lg:px-12 mb-8 lg:mb-0">
      <img
        src={leavesimage}
        alt="Eucalyptus Leaves"
        className="w-[90%] lg:w-[80%] max-h-[400px] object-cover aspect-[16/9] rounded-lg mb-12"
      />
    </div>
  </div>
  );
};

export default EucalyptusCollection;

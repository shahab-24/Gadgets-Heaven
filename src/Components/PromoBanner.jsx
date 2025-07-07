import React from 'react';

const PromoBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl mb-8">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 h-[100%]">
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Summer Sale <span className="text-yellow-300">50% Off</span>
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mb-6">
            Limited time offer on our best-selling items. Shop now before it's gone!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-full hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg">
              Shop Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:block absolute -bottom-8 -right-8">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-white bg-opacity-10 rounded-full"></div>
            <div className="absolute inset-4 bg-white bg-opacity-10 rounded-full"></div>
            <div className="absolute inset-8 bg-white bg-opacity-10 rounded-full"></div>
          </div>
        </div>
        <div className="absolute top-0 right-0 md:right-20 -mt-8 opacity-20">
          <svg
            className="w-48 h-48 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
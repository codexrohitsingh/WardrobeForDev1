import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3 pt-6 sm:pt-8 pb-10 sm:pb-14 px-3 sm:px-5">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-medium">
        Subscribe now & get 20% off
      </h1>
      <p className="text-sm sm:text-base text-gray-500/80 pb-5 sm:pb-8 max-w-md mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 h-10 sm:h-12">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-2 sm:px-3 text-sm sm:text-base text-gray-500"
          type="text"
          placeholder="Enter your email id"
        />
        <button className="md:px-12 px-4 sm:px-8 h-full text-white bg-black hover:bg-gray-800 rounded-md rounded-l-none text-sm sm:text-base transition">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

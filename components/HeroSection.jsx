import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative py-16 md:py-24 text-center">
      {/* Main Heading with decorative elements */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-gray-900 mb-6">
          <span className="block">Professional</span>
          <span className="relative inline-block mx-3">
            <span className="text-6xl md:text-8xl absolute -top-4 -right-12 opacity-20 rotate-12">👔</span>
            Elegance
          </span>
          <span className="block">Rooted in</span>
          <span className="block">
            Tradition, Delivered
          </span>
          <span className="block">
            with
            <span className="relative inline-block ml-3">
              <span className="text-6xl md:text-8xl absolute -bottom-4 -left-12 opacity-20 -rotate-12">🎩</span>
              Care
            </span>
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 font-light mt-8 mb-10 max-w-2xl mx-auto">
          Elevate your professional wardrobe with our carefully curated collection of timeless business attire
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            Shop Collection
          </button>
          <button className="px-8 py-3.5 border-2 border-gray-900 text-gray-900 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
            View Lookbook
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
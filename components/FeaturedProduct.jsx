import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    image: assets.wardrobe_image1,
    title: "Professional Style",
    description: "Classic business suits for the modern professional.",
    price: "2499",
  },
  {
    id: 2,
    image: assets.wardrobe_image2,
    title: "Elegant Evening",
    description: "Stunning evening wear for special occasions.",
    price: "2299",
  },
  {
    id: 3,
    image: assets.wardrobe_image4,
    title: "Smart Casual",
    description: "Versatile wardrobe essentials for everyday elegance.",
    price: "1799",
  },
];

const FeaturedProduct = () => {
  const router = useRouter();
  
  return (
    <div className="mt-16 sm:mt-20 md:mt-24 px-6 sm:px-8 md:px-16 lg:px-32 border-t border-gray-200 pt-16">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-3">Curated Selection</h2>
        <div className="w-32 h-px bg-gray-400 mx-auto"></div>
      </div>

      {/* Featured Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
        {products.map(({ id, image, title, description, price }) => (
          <div key={id} className="group cursor-pointer" onClick={() => router.push('/all-products')}>
            {/* Image Container */}
            <div className="relative aspect-[3/4] min-h-[300px] sm:min-h-[350px] md:min-h-[400px] overflow-hidden bg-white mb-4 border border-gray-200 shadow-sm group-hover:shadow-lg transition-shadow duration-500">
              <Image
                src={image}
                alt={title}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-500" />
              
              {/* Quick Shop Button - Appears on Hover */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <button className="w-full py-3 bg-white/95 backdrop-blur text-sm font-light text-gray-900 hover:bg-gray-900 hover:text-white border-t border-gray-200 transition-all duration-300">
                  Quick Shop
                </button>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="text-center px-2">
              <h3 className="text-base sm:text-lg md:text-xl font-serif text-gray-800 mb-1 sm:mb-2 tracking-wide">{title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3 line-clamp-2">{description}</p>
              <p className="text-base sm:text-lg md:text-xl font-light text-gray-900">₹{price}</p>
              <button className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 border-b border-gray-300 pb-0.5 hover:text-gray-900 hover:border-gray-900 transition-all duration-300">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Section */}
      <div className="mt-24 sm:mt-28 lg:mt-32 relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="p-8 md:p-12 lg:p-16">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
              Elevate Your<br />Wardrobe Style
            </h2>
            <p className="text-sm font-light text-gray-600 mb-6 max-w-sm">
              From business professional to casual chic—everything you need for any occasion
            </p>
            <button 
              onClick={() => router.push('/all-products')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-light hover:bg-gray-800 transition"
            >
              Shop now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          {/* Right Images */}
          <div className="relative h-64 md:h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* First Image */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-48 md:w-48 md:h-56">
                  <Image
                    src={assets.wardrobe_image5}
                    alt="Professional wear"
                    className="object-cover shadow-lg"
                    fill
                  />
                </div>
                {/* Second Image */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-48 md:w-48 md:h-56">
                  <Image
                    src={assets.wardrobe_image7}
                    alt="Formal wear"
                    className="object-cover shadow-lg"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
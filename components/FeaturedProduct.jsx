import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const products = [
  {
    id: 1,
    image: assets.wardrobe_image1,
    title: "Professional Style",
    description: "Classic business suits for the modern professional.",
  },
  {
    id: 2,
    image: assets.wardrobe_image2,
    title: "Elegant Evening",
    description: "Stunning evening wear for special occasions.",
  },
  {
    id: 3,
    image: assets.wardrobe_image4,
    title: "Smart Casual",
    description: "Versatile wardrobe essentials for everyday elegance.",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-8 sm:mt-10 md:mt-14">
      <div className="flex flex-col items-center px-3 sm:px-0">
        <p className="text-2xl md:text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-14 mt-6 sm:mt-8 md:mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <Image
              src={image}
              alt={title}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 text-white space-y-1 sm:space-y-2">
              <p className="font-medium text-lg sm:text-xl lg:text-2xl">{title}</p>
              <p className="text-xs sm:text-sm lg:text-base leading-4 sm:leading-5 max-w-48 sm:max-w-60">
                {description}
              </p>
              <button className="flex items-center gap-1.5 bg-orange-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm sm:text-base">
                Buy now <Image className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;

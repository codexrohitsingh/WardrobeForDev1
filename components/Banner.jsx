import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-10 md:py-0 bg-[#E6E9F2] my-8 md:my-16 rounded-xl overflow-hidden">
      <Image
        className="max-w-48 sm:max-w-56"
        src={assets.wardrobe_image5}
        alt="business_casual_image"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3 px-4 md:px-0 py-4 md:py-0">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold max-w-[290px]">
          Elevate Your Wardrobe Style
        </h2>
        <p className="max-w-[343px] text-sm sm:text-base font-medium text-gray-800/60">
          From business professional to casual chic—everything you need for any occasion
        </p>
        <button className="group flex items-center justify-center gap-1 px-8 sm:px-12 py-2 sm:py-2.5 bg-orange-600 rounded text-white text-sm sm:text-base">
          Shop now
          <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon_white} alt="arrow_icon_white" />
        </button>
      </div>
      <Image
        className="hidden md:block max-w-80"
        src={assets.wardrobe_image7}
        alt="formal_wear_image"
      />
      <Image
        className="md:hidden"
        src={assets.wardrobe_image6}
        alt="casual_wear_image"
      />
    </div>
  );
};

export default Banner;
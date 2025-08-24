import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Classic Business Style - Elevate Your Professional Look!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: assets.wardrobe_image1,
    },
    {
      id: 2,
      title: "Elegant Evening Collection - Perfect for Special Occasions!",
      offer: "Hurry up only few left!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: assets.wardrobe_image2,
    },
    {
      id: 3,
      title: "Casual Smart Wear - Versatile Options for Every Day!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: assets.wardrobe_image3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-br from-[#E6E9F2] to-[#F0F2F8] py-6 sm:py-8 md:px-14 px-4 sm:px-5 mt-4 sm:mt-6 rounded-xl min-w-full"
          >
            <div className="md:pl-8 mt-6 sm:mt-10 md:mt-0 text-center md:text-left">
              <p className="text-sm sm:text-base text-orange-600 pb-1 font-medium">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-xl sm:text-2xl lg:text-3xl font-semibold px-2 md:px-0">
                {slide.title}
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-4 md:mt-6">
                <button className="w-full sm:w-auto md:px-10 px-8 sm:px-7 md:py-2.5 py-2.5 bg-orange-600 hover:bg-orange-700 transition-colors rounded-full text-white font-medium text-sm sm:text-base">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center justify-center gap-2 px-6 py-2.5 font-medium text-sm sm:text-base hover:text-orange-600 transition-colors">
                  {slide.buttonText2}
                  <Image className="group-hover:translate-x-1 transition w-4 h-4" src={assets.arrow_icon} alt="arrow_icon" />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center mb-4 sm:mb-0">
              <Image
                className="md:w-72 w-40 sm:w-48 object-contain"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6 md:mt-8 pb-2">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index ? "bg-orange-600 w-6 sm:w-8" : "bg-gray-400/40 hover:bg-gray-400/60"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;

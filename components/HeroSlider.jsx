'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";

const HeroSlider = () => {
  const { router } = useAppContext();
  
  const slides = [
    {
      id: 1,
      title: "WARDROBE",
      subtitle: "9 TO 5",
      description: "Elevate Your Professional Style",
      image: assets.wardrobe_image1,
      cta: "Shop Collection",
      link: "/all-products"
    },
    {
      id: 2,  
      title: "ELEGANT",
      subtitle: "ESSENTIALS",
      description: "Timeless Pieces for Modern Professionals",
      image: assets.wardrobe_image2,
      cta: "Discover More",
      link: "/all-products"
    },
    {
      id: 3,
      title: "REFINED",
      subtitle: "CLASSICS", 
      description: "Where Tradition Meets Contemporary",
      image: assets.wardrobe_image3,
      cta: "Explore Now",
      link: "/all-products"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-gray-900">
      {/* Slide Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ${
              index === currentSlide 
                ? 'opacity-100 z-10' 
                : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center w-full h-full"
                priority={index === 0}
                sizes="100vw"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6 md:px-12 max-w-5xl">
                  <div className={`transform transition-all duration-1000 delay-300 ${
                    index === currentSlide && !isTransitioning
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-wider mb-1 md:mb-2">
                      {slide.title}
                    </h1>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wider mb-4 md:mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl font-light mb-6 md:mb-8 tracking-wide max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                    <button 
                      onClick={() => router.push(slide.link)}
                      className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 text-sm sm:text-base font-light tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-105"
                    >
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg 
          className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={handleNextSlide}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg 
          className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all duration-500 bg-white/70 hover:bg-white ${
              currentSlide === index 
                ? 'w-12 bg-white' 
                : 'w-6'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
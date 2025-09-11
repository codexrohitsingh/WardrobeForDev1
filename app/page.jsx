'use client'
import React from "react";
import HeroSection from "@/components/HeroSection";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-cream min-h-screen">
        <div className="px-6 md:px-16 lg:px-32">
          <HeroSection />
          <HomeProducts />
          <FeaturedProduct />
          <Banner />
          {/* <NewsLetter /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

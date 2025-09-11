'use client'
import React from "react";
import HeroSlider from "@/components/HeroSlider";
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
      <HeroSlider />
      <div className="bg-dusty-rose min-h-screen">
        <div className="px-6 md:px-16 lg:px-32">
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

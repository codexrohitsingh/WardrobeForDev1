import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {

  const { products, router } = useAppContext()

  return (
    <div className="flex flex-col items-center pt-16 sm:pt-20 md:pt-24 border-t border-gray-200">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-3">Featured Collection</h2>
        <div className="w-32 h-px bg-gray-400 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 pb-12 sm:pb-14 md:pb-16 w-full">
        {products.slice(0, 3).map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
      <button onClick={() => { router.push('/all-products') }} className="px-10 sm:px-12 py-3 sm:py-3.5 border-2 border-gray-900 text-gray-900 text-base sm:text-lg font-light hover:bg-gray-900 hover:text-white transition-all duration-300">
        View All Collection
      </button>
    </div>
  );
};

export default HomeProducts;

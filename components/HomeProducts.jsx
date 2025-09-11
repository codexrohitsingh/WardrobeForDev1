import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {

  const { products, router } = useAppContext()

  return (
    <div className="flex flex-col items-center pt-8 sm:pt-10 md:pt-12 -mx-6 md:-mx-16 lg:-mx-32 px-6 md:px-16 lg:px-32">
      <div className="w-full mb-8 sm:mb-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900">Featured Collection</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-16 pb-12 sm:pb-14 md:pb-16 w-full max-w-[1400px] mx-auto">
        {products.slice(0, 3).map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
      <button onClick={() => { router.push('/all-products') }} className="px-8 sm:px-10 py-2.5 sm:py-3 bg-gray-900 text-white rounded-full text-sm sm:text-base font-light hover:bg-gray-800 transition-all duration-300">
        View Collection
      </button>
    </div>
  );
};

export default HomeProducts;

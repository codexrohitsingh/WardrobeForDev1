import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "@/context/AppContext";

const HomeProducts = () => {

  const { products, router } = useAppContext()

  return (
    <div className="flex flex-col items-center pt-8 sm:pt-10 md:pt-14">
      <p className="text-xl sm:text-2xl font-medium text-left w-full pb-1 sm:pb-0">Popular products</p>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-3 sm:gap-4 md:gap-6 mt-3 sm:mt-4 md:mt-6 pb-8 sm:pb-10 md:pb-14 w-full">
        {products.map((product, index) => <ProductCard key={index} product={product} />)}
      </div>
      <button onClick={() => { router.push('/all-products') }} className="px-8 sm:px-10 md:px-12 py-2 sm:py-2.5 border rounded text-sm sm:text-base text-gray-500/70 hover:bg-slate-50/90 transition">
        See more
      </button>
    </div>
  );
};

export default HomeProducts;

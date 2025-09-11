'use client'
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAppContext } from "@/context/AppContext";

const AllProducts = () => {

    const { products } = useAppContext();

    return (
        <>
            <Navbar />
            <div className="bg-dusty-rose min-h-screen">
            <div className="flex flex-col items-start px-6 md:px-16 lg:px-24 xl:px-32 max-w-[1600px] mx-auto">
                <div className="flex flex-col items-center w-full pt-12">
                    <h1 className="text-3xl md:text-4xl font-serif text-gray-900">All Products</h1>
                    <div className="w-20 h-0.5 bg-gray-900 rounded-full mt-3"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14 xl:gap-16 mt-12 pb-20 w-full">
                    {products.map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
};

export default AllProducts;

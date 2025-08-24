"use client"
import { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import Loading from "@/components/Loading";
import { useAppContext } from "@/context/AppContext";
import React from "react";

const Product = () => {

    const { id } = useParams();

    const { products, router, addToCart, toggleWishlist, isInWishlist } = useAppContext()

    const [mainImage, setMainImage] = useState(null);
    const [productData, setProductData] = useState(null);

    const fetchProductData = async () => {
        const product = products.find(product => product._id === id);
        if (product) {
            // Ensure image is an array for compatibility
            const productWithImageArray = {
                ...product,
                image: Array.isArray(product.image) ? product.image : [product.image]
            };
            setProductData(productWithImageArray);
            setMainImage(Array.isArray(product.image) ? product.image[0] : product.image);
        }
    }

    useEffect(() => {
        fetchProductData();
    }, [id, products.length])

    return productData ? (<>
        <Navbar />
        <div className="px-4 sm:px-6 md:px-16 lg:px-32 pt-8 sm:pt-10 md:pt-14 space-y-6 sm:space-y-8 md:space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
                <div className="px-0 sm:px-5 lg:px-16 xl:px-20">
                    <div className="rounded-lg overflow-hidden bg-gray-500/10 mb-4">
                        <Image
                            src={mainImage || productData.image[0]}
                            alt="alt"
                            className="w-full h-auto object-cover mix-blend-multiply"
                            width={1280}
                            height={720}
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                        {productData.image.map((image, index) => (
                            <div
                                key={index}
                                onClick={() => setMainImage(image)}
                                className="cursor-pointer rounded-lg overflow-hidden bg-gray-500/10"
                            >
                                <Image
                                    src={image}
                                    alt="alt"
                                    className="w-full h-auto object-cover mix-blend-multiply"
                                    width={1280}
                                    height={720}
                                />
                            </div>

                        ))}
                    </div>
                </div>

                <div className="flex flex-col px-2 sm:px-0">
                    <h1 className="text-2xl sm:text-3xl font-medium text-gray-800/90 mb-3 sm:mb-4">
                        {productData.name}
                    </h1>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                            <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <Image className="h-4 w-4" src={assets.star_icon} alt="star_icon" />
                            <Image
                                className="h-4 w-4"
                                src={assets.star_dull_icon}
                                alt="star_dull_icon"
                            />
                        </div>
                        <p>(4.5)</p>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-3">
                        {productData.description}
                    </p>
                    <p className="text-2xl sm:text-3xl font-medium mt-4 sm:mt-6">
                        ₹{productData.offerPrice}
                        <span className="text-base font-normal text-gray-800/60 line-through ml-2">
                            ₹{productData.price}
                        </span>
                    </p>
                    <hr className="bg-gray-600 my-6" />
                    <div className="overflow-x-auto">
                        <table className="table-auto border-collapse w-full max-w-72">
                            <tbody>
                                <tr>
                                    <td className="text-gray-600 font-medium">Brand</td>
                                    <td className="text-gray-800/50 ">Generic</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 font-medium">Color</td>
                                    <td className="text-gray-800/50 ">Multi</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 font-medium">Category</td>
                                    <td className="text-gray-800/50">
                                        {productData.category}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center mt-6 sm:mt-8 md:mt-10 gap-3 sm:gap-4">
                        <button 
                            onClick={() => toggleWishlist(productData._id)} 
                            className={`flex items-center justify-center w-12 py-3 sm:py-3.5 text-sm sm:text-base ${isInWishlist(productData._id) ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-800/80'} hover:bg-gray-200 transition rounded`}
                        >
                            <Image 
                                src={isInWishlist(productData._id) ? assets.heart_filled_icon : assets.heart_icon} 
                                alt="wishlist" 
                                className="w-5 h-5" 
                            />
                        </button>
                        <button onClick={() => addToCart(productData._id)} className="w-full py-3 sm:py-3.5 text-sm sm:text-base bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition rounded">
                            Add to Cart
                        </button>
                        <button onClick={() => { addToCart(productData._id); router.push('/cart') }} className="w-full py-3 sm:py-3.5 text-sm sm:text-base bg-orange-500 text-white hover:bg-orange-600 transition rounded">
                            Buy now
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-4 mt-8 sm:mt-12 md:mt-16">
                    <p className="text-xl sm:text-2xl md:text-3xl font-medium text-center">Featured <span className="font-medium text-orange-600">Products</span></p>
                    <div className="w-20 sm:w-24 md:w-28 h-0.5 bg-orange-600 mt-1.5 sm:mt-2"></div>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 pb-8 sm:pb-10 md:pb-14 w-full">
                    {products.slice(0, 5).map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
                <button className="px-6 sm:px-8 py-1.5 sm:py-2 mb-8 sm:mb-12 md:mb-16 border rounded text-sm sm:text-base text-gray-500/70 hover:bg-slate-50/90 transition">
                    See more
                </button>
            </div>
        </div>
        <Footer />
    </>
    ) : <Loading />
};

export default Product;
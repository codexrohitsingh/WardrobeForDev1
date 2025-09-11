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
    const [selectedSize, setSelectedSize] = useState("");
    const [showSizeGuide, setShowSizeGuide] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const { id } = useParams();

    const { products, router, addToCart, toggleWishlist, isInWishlist } = useAppContext()

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
        }
    }

    useEffect(() => {
        fetchProductData();
    }, [id, products.length])

    return productData ? (<>
        <Navbar />
        <div className="min-h-screen bg-dusty-rose">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            {/* Breadcrumb */}
            <div className="text-xs text-gray-500 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap">
                <span className="cursor-pointer hover:text-gray-700" onClick={() => router.push('/')}>Home</span>
                <span className="mx-2">/</span>
                <span className="cursor-pointer hover:text-gray-700" onClick={() => router.push('/all-products')}>Clothing</span>
                <span className="mx-2">/</span>
                <span className="text-gray-700">{productData.category || 'Cotton jumper'}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12">
                {/* Left side - Image Grid - Scrollable on mobile */}
                <div className="grid grid-cols-2 gap-1 sm:gap-2">
                    {productData.image.slice(0, 4).map((image, index) => (
                        <div 
                            key={index} 
                            className="aspect-[3/4] bg-white overflow-hidden cursor-pointer rounded-lg sm:rounded-none"
                            onClick={() => {
                                setSelectedImage(image);
                                setShowImageModal(true);
                            }}
                        >
                            <Image
                                src={image}
                                alt={`${productData.name} ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                width={400}
                                height={533}
                            />
                        </div>
                    ))}
                </div>

                {/* Right side - Product Info */}
                <div className="lg:sticky lg:top-24 lg:h-fit px-0 sm:px-2 lg:px-0">
                    {/* Product Title */}
                    <div className="mb-4 sm:mb-6">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                            {productData.category || 'Cotton jumper'}
                        </p>
                        <h1 className="text-xl sm:text-2xl font-light text-gray-900 mb-1">
                            {productData.name}
                        </h1>
                        <p className="text-xs text-gray-400 uppercase">
                            CODE: {productData._id.slice(-6).toUpperCase()}
                        </p>
                    </div>

                    {/* Price */}
                    <div className="mb-4 sm:mb-6">
                        <div className="flex items-baseline gap-3">
                            <span className="text-xl sm:text-2xl font-light text-gray-900">
                                ₹{productData.offerPrice || productData.price}
                            </span>
                            {productData.offerPrice && (
                                <span className="text-base sm:text-lg text-gray-400 line-through">
                                    ₹{productData.price}
                                </span>
                            )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Taxes included</p>
                    </div>

                    {/* Color Selection (if applicable) */}
                    <div className="mb-4 sm:mb-6">
                        <p className="text-sm font-light mb-3">Color</p>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 rounded-full bg-black border-2 border-gray-900"></button>
                            <button className="w-8 h-8 rounded-full bg-gray-200 border-2 border-transparent hover:border-gray-400"></button>
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="mb-4 sm:mb-6">
                        <div className="flex items-center justify-between mb-3">
                            <p className="text-sm font-light">Select size</p>
                            <button 
                                onClick={() => setShowSizeGuide(true)}
                                className="text-xs text-gray-500 underline hover:text-gray-700"
                            >
                                Size Guide
                            </button>
                        </div>
                        <div className="grid grid-cols-4 gap-1 sm:flex sm:gap-2">
                            {['XS', 'S', 'M', 'L'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-2 sm:px-4 py-2 text-xs sm:text-sm font-light transition-all rounded-md sm:rounded-none ${
                                        selectedSize === size 
                                        ? 'bg-black text-white' 
                                        : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Section */}
                    <div className="mb-4 sm:mb-6">
                        <div className="flex items-center gap-2 sm:gap-3 mb-4">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-gray-200 rounded-md">
                                <button 
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-8 sm:w-10 h-9 sm:h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" />
                                    </svg>
                                </button>
                                <input 
                                    type="number" 
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    className="w-10 sm:w-12 text-center border-0 focus:outline-none text-sm"
                                />
                                <button 
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-8 sm:w-10 h-9 sm:h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button 
                                onClick={() => { 
                                    if (!selectedSize) {
                                        alert('Please select a size');
                                        return;
                                    }
                                    for (let i = 0; i < quantity; i++) {
                                        addToCart(productData._id);
                                    }
                                }}
                                className="flex-1 py-2.5 px-3 sm:px-4 bg-black text-white text-xs sm:text-sm font-light hover:bg-gray-800 transition-colors rounded-md sm:rounded-none"
                            >
                                Add to cart
                            </button>

                            {/* Wishlist Heart Icon */}
                            <button 
                                onClick={() => toggleWishlist(productData._id)} 
                                className="w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-gray-200 rounded-md sm:border-0 sm:rounded-none"
                            >
                                <svg 
                                    className={`w-5 h-5 ${isInWishlist(productData._id) ? 'fill-black text-black' : 'text-gray-400'}`}
                                    fill={isInWishlist(productData._id) ? 'currentColor' : 'none'}
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Product Details - Minimalist Dropdowns */}
                    <div className="space-y-0 border-t">
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer py-3 text-sm font-light">
                                <span>Description</span>
                                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="pb-4 text-xs text-gray-600 leading-relaxed">
                                {productData.description || 'Premium quality product designed for comfort and style. Made with carefully selected materials to ensure durability and perfect fit.'}
                            </div>
                        </details>

                        <details className="group border-t">
                            <summary className="flex justify-between items-center cursor-pointer py-3 text-sm font-light">
                                <span>Size guide & product measurements</span>
                                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="pb-4 text-xs text-gray-600 leading-relaxed">
                                <p className="mb-2">Model is wearing size M</p>
                                <p>Height: 175cm/5'9"</p>
                            </div>
                        </details>

                        <details className="group border-t">
                            <summary className="flex justify-between items-center cursor-pointer py-3 text-sm font-light">
                                <span>Composition and care</span>
                                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="pb-4 text-xs text-gray-600 leading-relaxed">
                                <p>100% Cotton</p>
                                <p className="mt-2">Machine wash at 30°C</p>
                            </div>
                        </details>

                        <details className="group border-t border-b">
                            <summary className="flex justify-between items-center cursor-pointer py-3 text-sm font-light">
                                <span>Availability in stores</span>
                                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="pb-4 text-xs text-gray-600">
                                <p>Available online only</p>
                            </div>
                        </details>
                    </div>

                    {/* Reviews Dots */}
                    <div className="mt-8">
                        <p className="text-sm font-light mb-3">Reviews</p>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-black' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-12 sm:mt-16 lg:mt-20">
                <h2 className="text-lg sm:text-xl font-light mb-4 sm:mb-6 lg:mb-8">You might also like</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {products.slice(0, 4).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </div>
            </div>
          </div>
        </div>
        
        {/* Image Modal */}
        {showImageModal && selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-2 sm:px-4">
                <button 
                    onClick={() => setShowImageModal(false)}
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-1 sm:p-0"
                >
                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div 
                    className="relative max-w-[95vw] sm:max-w-[90vw] max-h-[85vh] sm:max-h-[90vh] flex items-center justify-center"
                    onClick={() => setShowImageModal(false)}
                >
                    <Image
                        src={selectedImage}
                        alt="Enlarged product image"
                        className="object-contain max-w-full max-h-[85vh] sm:max-h-[90vh] w-auto h-auto"
                        width={1200}
                        height={1600}
                        priority
                    />
                </div>
            </div>
        )}
        
        {/* Size Guide Modal */}
        {showSizeGuide && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2 sm:px-4">
                <div className="bg-white max-w-2xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-lg sm:rounded-none">
                    <div className="sticky top-0 bg-white border-b px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                        <h2 className="text-base sm:text-lg font-light">Women's Size Guide</h2>
                        <button 
                            onClick={() => setShowSizeGuide(false)}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="px-4 sm:px-6 py-4 sm:py-6">
                        <div className="mb-6">
                            <h3 className="font-light text-gray-800 mb-3 sm:mb-4 text-sm sm:text-base">Size Chart (in inches)</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-xs sm:text-sm">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="text-left py-2 font-light">Size</th>
                                            <th className="text-left py-2 font-light">Bust</th>
                                            <th className="text-left py-2 font-light">Waist</th>
                                            <th className="text-left py-2 font-light">Hips</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-600">
                                        <tr className="border-b">
                                            <td className="py-2">XS</td>
                                            <td className="py-2">30-32"</td>
                                            <td className="py-2">24-26"</td>
                                            <td className="py-2">32-34"</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2">S</td>
                                            <td className="py-2">32-34"</td>
                                            <td className="py-2">26-28"</td>
                                            <td className="py-2">34-36"</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2">M</td>
                                            <td className="py-2">34-36"</td>
                                            <td className="py-2">28-30"</td>
                                            <td className="py-2">36-38"</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="py-2">L</td>
                                            <td className="py-2">36-38"</td>
                                            <td className="py-2">30-32"</td>
                                            <td className="py-2">38-40"</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="font-light text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">How to Measure</h3>
                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                                <p><span className="text-gray-800">Bust:</span> Measure around the fullest part of your chest.</p>
                                <p><span className="text-gray-800">Waist:</span> Measure around your natural waistline.</p>
                                <p><span className="text-gray-800">Hips:</span> Measure around the fullest part of your hips.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        
        <Footer />
    </>
    ) : <Loading />
};

export default Product;
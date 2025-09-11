import React, { useState } from 'react'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext';
import { assets } from '@/assets/assets';
import { currency } from '@/utils/utils';

const ProductCard = ({ product }) => {

    const { router, toggleWishlist, isInWishlist, addToCart } = useAppContext()
    const [showAddedToCart, setShowAddedToCart] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="flex flex-col items-start w-full cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full aspect-[3/4] min-h-[450px] sm:min-h-[500px] lg:min-h-[550px] xl:min-h-[600px] bg-white overflow-hidden mb-6 border border-gray-200 shadow-sm group-hover:shadow-lg transition-shadow duration-500">
                <Image 
                    src={Array.isArray(product.image) ? product.image[0] : product.image} 
                    alt={product.name}
                    width={1200}
                    height={1800}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={true}
                    quality={90}
                />
                
                {/* Wishlist Icon */}
                <button
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2.5 hover:bg-white hover:scale-110 transition-all duration-200 shadow-md"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product._id);
                    }}
                >
                    <svg 
                        className={`w-5 h-5 transition-colors duration-200 ${isInWishlist(product._id) ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-400'}`}
                        fill={isInWishlist(product._id) ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>

                {/* Quick Add to Cart - Shows on hover */}
                <div className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm transition-all duration-300 border-t border-gray-200 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                    <button 
                        className="w-full py-3 text-sm font-light text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product._id);
                            setShowAddedToCart(true);
                            setTimeout(() => setShowAddedToCart(false), 2000);
                        }}
                    >
                        + Quick Add to Cart
                    </button>
                </div>
            </div>
            
            {/* Product Details */}
            <div className="text-center px-3">
                {/* Product Name */}
                <h3 className="text-lg sm:text-xl font-serif text-gray-800 mb-2 tracking-wide line-clamp-1">
                    {product.name}
                </h3>
                
                {/* Category */}
                <p className="text-sm text-gray-500 mb-3 uppercase tracking-widest font-light">
                    {product.category || 'Formal Wear'}
                </p>
                
                {/* Price */}
                <div className="flex items-center justify-center gap-3">
                    {product.offerPrice && product.offerPrice < product.price ? (
                        <>
                            <span className="text-lg sm:text-xl font-light text-gray-900">
                                {currency}{product.offerPrice}
                            </span>
                            <span className="text-sm text-gray-400 line-through">
                                {currency}{product.price}
                            </span>
                        </>
                    ) : (
                        <span className="text-lg sm:text-xl font-light text-gray-900">
                            {currency}{product.price}
                        </span>
                    )}
                </div>

                {/* Size Options */}
            </div>

            {/* Success Message */}
            {showAddedToCart && (
                <div className="fixed bottom-4 right-4 bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-3 rounded-xl shadow-2xl z-50 animate-slide-in flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm font-medium">Added to cart successfully!</span>
                </div>
            )}
        </div>
    )
}

export default ProductCard
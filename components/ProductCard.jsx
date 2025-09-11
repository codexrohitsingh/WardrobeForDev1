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
            className="flex flex-col items-start w-full cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full aspect-[3/4] bg-gray-50 overflow-hidden mb-3">
                <Image 
                    src={Array.isArray(product.image) ? product.image[0] : product.image} 
                    alt={product.name}
                    width={400}
                    height={533}
                    className="object-cover w-full h-full"
                />
                
                {/* Wishlist Icon */}
                <button
                    className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-200"
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product._id);
                    }}
                >
                    <svg 
                        className={`w-4 h-4 ${isInWishlist(product._id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                        fill={isInWishlist(product._id) ? 'currentColor' : 'none'}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>

                {/* Quick Add to Cart - Shows on hover */}
                <div className={`absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
                    <button 
                        className="w-full py-3 text-sm font-light text-gray-800 hover:bg-black hover:text-white transition-colors duration-200"
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
            <div className="w-full space-y-1 px-1">
                {/* Product Name */}
                <h3 className="text-sm font-light text-gray-900 line-clamp-1">
                    {product.name}
                </h3>
                
                {/* Category */}
                <p className="text-xs font-light text-gray-500 line-clamp-1">
                    {product.category || 'Formal Wear'}
                </p>
                
                {/* Price */}
                <div className="flex items-center gap-2 pt-1">
                    {product.offerPrice && product.offerPrice < product.price ? (
                        <>
                            <span className="text-sm font-light text-gray-900">
                                {currency}{product.offerPrice}
                            </span>
                            <span className="text-xs font-light text-gray-400 line-through">
                                {currency}{product.price}
                            </span>
                            <span className="text-xs font-light text-gray-600">
                                {Math.round(((product.price - product.offerPrice) / product.price) * 100)}% OFF
                            </span>
                        </>
                    ) : (
                        <span className="text-sm font-light text-gray-900">
                            {currency}{product.price}
                        </span>
                    )}
                </div>

                {/* Size Options */}
                <div className="flex gap-1 pt-1">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                        <span 
                            key={size} 
                            className="text-[10px] font-light text-gray-400 border border-gray-200 px-1.5 py-0.5 rounded"
                        >
                            {size}
                        </span>
                    ))}
                </div>
            </div>

            {/* Success Message */}
            {showAddedToCart && (
                <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-slide-in">
                    <span className="text-sm font-light">✓ Added to cart successfully!</span>
                </div>
            )}
        </div>
    )
}

export default ProductCard
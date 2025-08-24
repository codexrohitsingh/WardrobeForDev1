import React, { useState } from 'react'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext';
import { assets } from '@/assets/assets';
import { currency } from '@/utils/utils';

const ProductCard = ({ product }) => {

    const { router, toggleWishlist, isInWishlist, addToCart } = useAppContext()
    const [showAddedToCart, setShowAddedToCart] = useState(false)

    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="flex flex-col items-start gap-0.5 w-full cursor-pointer"
        >
            <div className="cursor-pointer group relative bg-gray-50 rounded-lg w-full aspect-square flex items-center justify-center overflow-hidden">
                <Image 
                    src={product.image} 
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                    <Image 
                        src={isInWishlist(product._id) ? assets.heart_filled_icon : assets.heart_icon} 
                        alt="wishlist" 
                        className="w-4 h-4 sm:w-5 sm:h-5 z-10 cursor-pointer hover:scale-110" 
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(product._id);
                        }}
                    />
                </div>
            </div>
            
            {showAddedToCart && (
                <div className="w-full bg-green-600 text-white text-xs py-1 text-center rounded mt-1">
                    Added to cart!
                </div>
            )}
            
            <div className="w-full px-1 sm:px-2">
                <p className="pt-2 sm:pt-3 pb-1 text-xs sm:text-sm font-medium line-clamp-2">{product.name}</p>
                <p className="text-[10px] sm:text-xs text-gray-500 line-clamp-1 sm:line-clamp-2 mb-1 sm:mb-2">{product.description}</p>
                
                <div className="flex items-center gap-0.5 sm:gap-1 mb-1 sm:mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Image 
                            key={i} 
                            src={i < 4 ? assets.star_icon : assets.star_dull_icon} 
                            alt="" 
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3" 
                        />
                    ))}
                    <span className="text-[10px] sm:text-xs text-gray-500 ml-0.5 sm:ml-1">(4.0)</span>
                </div>
                
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1 sm:gap-2">
                        {product.offerPrice && (
                            <p className="text-xs sm:text-sm font-semibold text-green-600">{currency}{product.offerPrice}</p>
                        )}
                        <p className={`text-[10px] sm:text-xs ${product.offerPrice ? 'line-through text-gray-400' : 'font-semibold text-xs sm:text-sm'}`}>
                            {currency}{product.price}
                        </p>
                    </div>
                    <button 
                        className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs py-1 px-2 rounded transition-colors duration-200"
                        onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product._id);
                            setShowAddedToCart(true);
                            setTimeout(() => setShowAddedToCart(false), 1500);
                        }}
                    >
                        Add
                        <Image 
                            src={assets.cart_icon} 
                            alt="cart" 
                            className="w-3 h-3 invert" 
                        />
                    </button>
                </div>
            </div>


        </div>
    )
}

export default ProductCard
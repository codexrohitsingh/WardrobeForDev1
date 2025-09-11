'use client'
import React, { useEffect, useState } from 'react'
import { useAppContext } from '@/context/AppContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { currency } from '@/utils/utils'

const WishlistPage = () => {
  const { 
    products, 
    wishlistItems, 
    toggleWishlist, 
    addToCart, 
    router 
  } = useAppContext()

  const [wishlistProducts, setWishlistProducts] = useState([])

  useEffect(() => {
    // Filter products that are in the wishlist
    const filteredProducts = products.filter(product => wishlistItems[product._id])
    setWishlistProducts(filteredProducts)
  }, [products, wishlistItems])

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-dusty-rose">
        <div className="px-4 sm:px-6 md:px-16 lg:px-32 pt-8 sm:pt-10 md:pt-14 min-h-[70vh]">
        <h1 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8">My Wishlist</h1>
        
        {wishlistProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <svg 
              className="w-16 h-16 text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p className="text-gray-500 font-light mb-6">Your wishlist is empty</p>
            <button 
              onClick={() => router.push('/all-products')}
              className="px-6 py-2 bg-black text-white font-light hover:bg-gray-800 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlistProducts.map((product) => (
              <div key={product._id} className="border border-gray-200 overflow-hidden bg-white">
                <div 
                  className="relative cursor-pointer w-full aspect-[3/4]"
                  onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
                >
                  <Image
                    src={Array.isArray(product.image) ? product.image[0] : product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                    width={300}
                    height={400}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product._id);
                    }}
                    className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-200"
                  >
                    <svg 
                      className="w-4 h-4 fill-red-500 text-red-500"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-3 sm:p-4">
                  <h3 className="font-light text-sm sm:text-base line-clamp-2 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-sm sm:text-base font-light">
                      {currency}{product.offerPrice || product.price}
                    </p>
                    {product.offerPrice && (
                      <p className="text-xs sm:text-sm font-light text-gray-500 line-through">
                        {currency}{product.price}
                      </p>
                    )}
                  </div>
                  
                  <button
                    onClick={() => addToCart(product._id)}
                    className="w-full py-2 text-sm font-light bg-black text-white hover:bg-gray-800 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default WishlistPage
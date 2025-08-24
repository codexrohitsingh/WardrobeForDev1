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
      <div className="px-4 sm:px-6 md:px-16 lg:px-32 pt-8 sm:pt-10 md:pt-14 min-h-[70vh]">
        <h1 className="text-2xl sm:text-3xl font-medium mb-6 sm:mb-8">My Wishlist</h1>
        
        {wishlistProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Image
              src={assets.heart_icon}
              alt="Empty Wishlist"
              className="w-16 h-16 opacity-30 mb-4"
            />
            <p className="text-gray-500 mb-6">Your wishlist is empty</p>
            <button 
              onClick={() => router.push('/')}
              className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlistProducts.map((product) => (
              <div key={product._id} className="border rounded-lg overflow-hidden bg-white">
                <div 
                  className="relative cursor-pointer w-full aspect-square"
                  onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full"
                    width={300}
                    height={300}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product._id);
                    }}
                    className="absolute top-2 right-2 z-10"
                  >
                    <Image
                      src={assets.heart_filled_icon}
                      alt="Remove from wishlist"
                      className="w-5 h-5"
                    />
                  </button>
                </div>
                
                <div className="p-3 sm:p-4">
                  <h3 className="font-medium text-sm sm:text-base line-clamp-2 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-sm sm:text-base font-semibold">
                      {currency}{product.offerPrice || product.price}
                    </p>
                    {product.offerPrice && (
                      <p className="text-xs sm:text-sm text-gray-500 line-through">
                        {currency}{product.price}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(product._id)}
                      className="flex-1 py-2 text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 transition rounded"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product._id);
                      }}
                      className="px-3 py-2 bg-red-50 text-red-500 hover:bg-red-100 transition rounded"
                    >
                      <Image
                        src={assets.heart_filled_icon}
                        alt="Remove"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default WishlistPage
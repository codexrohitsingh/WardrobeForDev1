"use client"
import React, { useState } from "react";
import { assets} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {

  const { isSeller, router, getCartCount } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-300 sticky top-0 bg-white z-20">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-32 py-3 text-gray-700">
        <Image
          className="cursor-pointer w-24 sm:w-28 md:w-32"
          onClick={() => router.push('/')}
          src={assets.logo}
          alt="logo"
        />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/about-us" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {/* {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>} */}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        <button 
          onClick={() => router.push('/wishlist')} 
          className="flex items-center gap-2 hover:text-gray-900 transition"
        >
          <Image src={assets.heart_icon} alt="wishlist" />
          Wishlist
        </button>
        <button 
          onClick={() => router.push('/cart')} 
          className="flex items-center gap-2 hover:text-gray-900 transition relative"
        >
          <Image src={assets.cart_icon} alt="cart icon" />
          Cart
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </button>
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-6 h-6 flex flex-col justify-center items-center"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-700 my-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className={`fixed right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 border-b">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="ml-auto block p-2"
            >
              <span className="block w-6 h-0.5 bg-gray-700 rotate-45"></span>
              <span className="block w-6 h-0.5 bg-gray-700 -rotate-45 -mt-0.5"></span>
            </button>
          </div>
          
          <ul className="p-6 space-y-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <li className="font-medium text-lg hover:text-gray-900 transition">
                Home
              </li>
            </Link>
            <Link href="/all-products" onClick={() => setMobileMenuOpen(false)}>
              <li className="font-medium text-lg hover:text-gray-900 transition">
                Shop
              </li>
            </Link>
            <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>
              <li className="font-medium text-lg hover:text-gray-900 transition">
                About Us
              </li>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <li className="font-medium text-lg hover:text-gray-900 transition">
                Contact
              </li>
            </Link>
          </ul>
          
          <div className="p-6 border-t">
            <button 
              onClick={() => {router.push('/wishlist'); setMobileMenuOpen(false);}} 
              className="flex items-center gap-3 font-medium text-lg hover:text-gray-900 transition mb-4"
            >
              <Image className="w-5" src={assets.heart_icon} alt="wishlist" />
              Wishlist
            </button>
            <button 
              onClick={() => {router.push('/cart'); setMobileMenuOpen(false);}} 
              className="flex items-center gap-3 font-medium text-lg hover:text-gray-900 transition mb-4 relative"
            >
              <Image className="w-5" src={assets.cart_icon} alt="cart icon" />
              Cart
              {getCartCount() > 0 && (
                <span className="absolute top-0 left-3 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
            <button className="flex items-center gap-3 font-medium text-lg hover:text-gray-900 transition">
              <Image className="w-5" src={assets.user_icon} alt="user icon" />
              Account
            </button>
          </div>
          
          {isSeller && (
            <div className="p-6">
              <button onClick={() => {router.push('/seller'); setMobileMenuOpen(false);}} className="w-full text-center border px-4 py-2 rounded-full hover:bg-gray-50 transition">
                Seller Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
    </header>
  );
}

export default Navbar;
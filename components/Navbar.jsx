"use client"
import React, { useState } from "react";
import { assets} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

const Navbar = () => {

  const { isSeller, router, getCartCount, session, userData, signOut } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-20">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-32 py-4 text-gray-700">
        <Image
          className="cursor-pointer w-24 sm:w-28 md:w-32"
          onClick={() => router.push('/')}
          src={assets.logo}
          alt="logo"
        />
      <div className="flex items-center gap-8 max-md:hidden">
        <Link href="/" className="text-sm font-light hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="text-sm font-light hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/about-us" className="text-sm font-light hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/contact" className="text-sm font-light hover:text-gray-900 transition">
          Contact
        </Link>
      </div>

      <ul className="hidden md:flex items-center gap-6">
        <button 
          onClick={() => router.push('/wishlist')} 
          className="flex items-center gap-2 text-sm font-light hover:text-gray-900 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Wishlist
        </button>
        
        <button 
          onClick={() => router.push('/cart')} 
          className="flex items-center gap-2 text-sm font-light hover:text-gray-900 transition relative"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Cart
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-light">
              {getCartCount()}
            </span>
          )}
        </button>

      </ul>

      <div className="flex items-center md:hidden gap-3">
          <div className="p-6 border-t">
            <button 
              onClick={() => {router.push('/wishlist'); setMobileMenuOpen(false);}} 
              className="items-center gap-3 text-lg font-light hover:text-gray-900 transition mb-4 mr-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button 
              onClick={() => {router.push('/cart'); setMobileMenuOpen(false);}} 
              className="items-center gap-3 text-lg font-light hover:text-gray-900 transition mb-4 relative"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute top-0 left-3 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-light">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <ul className="p-6 space-y-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <li className="text-lg font-light hover:text-gray-900 transition">
                Home
              </li>
            </Link>
            <Link href="/all-products" onClick={() => setMobileMenuOpen(false)}>
              <li className="text-lg font-light hover:text-gray-900 transition">
                Shop
              </li>
            </Link>
            <Link href="/about-us" onClick={() => setMobileMenuOpen(false)}>
              <li className="text-lg font-light hover:text-gray-900 transition">
                About Us
              </li>
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <li className="text-lg font-light hover:text-gray-900 transition">
                Contact
              </li>
            </Link>
          </ul>
          
          <div className="p-6 border-t">
            <button 
              onClick={() => {router.push('/wishlist'); setMobileMenuOpen(false);}} 
              className="flex items-center gap-3 text-lg font-light hover:text-gray-900 transition mb-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Wishlist
            </button>
            <button 
              onClick={() => {router.push('/cart'); setMobileMenuOpen(false);}} 
              className="flex items-center gap-3 text-lg font-light hover:text-gray-900 transition mb-4 relative"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Cart
              {getCartCount() > 0 && (
                <span className="absolute top-0 left-3 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-light">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
}

export default Navbar;
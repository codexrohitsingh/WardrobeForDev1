'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/assets/assets';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-8">About Wardrobe9to5</h1>
      
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="md:w-1/2">
          <Image 
            src={assets.wardrobe_image2} 
            alt="About Wardrobe9to5" 
            className="rounded-lg shadow-md"
            width={600}
            height={400}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Wardrobe9to5 was founded with a simple mission: to provide high-quality, professional attire that transitions seamlessly from the office to after-work events. We understand the modern professional's need for clothing that is both functional and fashionable.
          </p>
          <p className="text-gray-700">
            Since our inception, we've been dedicated to sourcing the finest materials and partnering with ethical manufacturers to create timeless pieces that stand the test of time - both in durability and style.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Quality</h3>
            <p className="text-gray-700">
              We never compromise on quality. Each piece in our collection undergoes rigorous testing to ensure it meets our high standards for comfort, durability, and style.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Sustainability</h3>
            <p className="text-gray-700">
              We're committed to reducing our environmental footprint by using sustainable materials and ethical manufacturing processes wherever possible.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl mb-2">Inclusivity</h3>
            <p className="text-gray-700">
              We design for every body type and professional need, ensuring our collections are accessible and flattering for all.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
        <p className="text-gray-700 mb-4">
          At Wardrobe9to5, we're committed to helping professionals look and feel their best. We believe that when you look good, you perform better, and we design every piece with that philosophy in mind.
        </p>
        <p className="text-gray-700">
          We also believe in giving back to the community that has supported us. That's why a portion of every purchase goes toward supporting professional development programs for underserved communities.
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Join the Wardrobe9to5 Family</h2>
        <p className="text-gray-700 mb-6">
          Whether you're climbing the corporate ladder, running your own business, or navigating the professional world for the first time, Wardrobe9to5 is here to support your journey with clothing that works as hard as you do.
        </p>
        <Link href="/all-products" className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
          Shop Now
        </Link>
        </div>
      </div>
      </div>
    <Footer />
    </>
  );
}

export default AboutUs
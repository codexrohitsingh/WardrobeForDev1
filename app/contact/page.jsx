'use client'

import React, { useState, useRef } from 'react';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="flex flex-col md:flex-row gap-12 mb-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-6">
            We'd love to hear from you! Whether you have a question about our products, need styling advice, or want to provide feedback, our team is here to help.
          </p>
          
          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-3">Contact Information</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">contact@wardrobe9to5.com</span>
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-700">+1 (123) 456-7890</span>
              </p>
              {/* Address information removed as requested */}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/wardrobe_9to5?igsh=cTloeTQ2aGVjcjIz&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@wardrobe_9to5</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <form 
            ref={formRef}
            className="bg-white p-6 rounded-lg shadow-md"
            onSubmit={(e) => {
              e.preventDefault();
              setIsSubmitting(true);
              
              // Create a template parameter object with recipient email
               const templateParams = {
                 to_email: 'anushreeprasad25@gmail.com',
                 from_name: formData.name,
                 from_email: formData.email,
                 subject: formData.subject,
                 message: formData.message
               };
               
               emailjs.send(
                 'service_0m8jzjs', // Your EmailJS service ID
                 'template_2s3nh3s', // Your EmailJS template ID
                 templateParams,
                 'cj-jSaCCvxfzXLSoE' // Your EmailJS public key
               )
              .then(() => {
                setFormData({
                  name: '',
                  email: '',
                  subject: '',
                  message: ''
                });
                toast.success('Message sent successfully!');
                setIsSubmitting(false);
              })
              .catch((error) => {
                console.error('Error sending email:', error);
                toast.error('Failed to send message. Please try again.');
                setIsSubmitting(false);
              });
            }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
              <input 
                type="text" 
                id="subject"
                name="subject" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Subject of your message"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea 
                id="message"
                name="message" 
                rows="5" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300 w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      

      
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Customer Service Hours</h2>
        <p className="text-gray-700 mb-6">
          Our customer service team is available to assist you during the following hours:
        </p>
        <div className="inline-block text-left">
          <p className="text-gray-700"><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM EST</p>
          <p className="text-gray-700"><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM EST</p>
          <p className="text-gray-700"><span className="font-medium">Sunday:</span> Closed</p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  )
}

export default Contact
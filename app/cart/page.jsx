'use client'
import React, { useMemo, useState } from "react";
import { assets } from "@/assets/assets";
import OrderSummary from "@/components/OrderSummary";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useAppContext } from "@/context/AppContext";

const Cart = () => {

  const { 
    products, 
    router, 
    cartItems, 
    addToCart, 
    updateCartQuantity, 
    getCartCount,
    selectedCartItems,
    toggleCartItemSelection,
    isCartItemSelected,
    getSelectedCartAmount
  } = useAppContext();
  
  // Calculate total price of selected items in cart
  const total = useMemo(() => {
    return getSelectedCartAmount();
  }, [selectedCartItems, cartItems, products, getSelectedCartAmount]);
  let product;
  let concat = " "

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 px-4 sm:px-6 md:px-16 lg:px-32 pt-8 md:pt-14 mb-10 md:mb-20">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6 md:mb-8 border-b border-gray-500/30 pb-4 md:pb-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-500">
              Your <span className="font-medium text-orange-600">Cart</span>
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-500/80">{getCartCount()} Items</p>
          </div>
          <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <table className="min-w-full table-auto">
              <thead className="text-left hidden sm:table-header-group">
                <tr>
                  <th className="text-nowrap pb-6 md:px-2 px-1 text-gray-600 font-medium">
                    Select
                  </th>
                  <th className="text-nowrap pb-6 md:px-4 px-2 text-gray-600 font-medium">
                    Product Details
                  </th>
                  <th className="pb-6 md:px-4 px-2 text-gray-600 font-medium">
                    Price
                  </th>
                  <th className="pb-6 md:px-4 px-2 text-gray-600 font-medium">
                    Quantity
                  </th>
                  <th className="pb-6 md:px-4 px-2 text-gray-600 font-medium">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(cartItems).map((itemId) => {
                   product = products.find(product => product._id === itemId);
                   concat = concat + product.name + " "

                  if (!product || cartItems[itemId] <= 0) return null;

                  return (
                    <tr key={itemId} className="sm:table-row flex flex-col border-b sm:border-b-0 pb-4 mb-4 sm:pb-0 sm:mb-0">
                      {/* Mobile product title - only shows on small screens */}
                      <td className="sm:hidden py-2 font-medium text-gray-800">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => toggleCartItemSelection(itemId)}
                            className="flex-shrink-0 relative w-5 h-5 border border-gray-400 rounded flex items-center justify-center focus:outline-none"
                          >
                            {isCartItemSelected(itemId) && (
                              <Image 
                                src={assets.checkmark} 
                                alt="Selected" 
                                width={16} 
                                height={16} 
                                className="absolute inset-0 m-auto"
                              />
                            )}
                          </button>
                          {product.name}
                        </div>
                      </td>
                      
                      {/* Selection checkbox */}
                      <td className="hidden sm:table-cell py-2 sm:py-4 md:px-2 px-1">
                        <button 
                          onClick={() => toggleCartItemSelection(itemId)}
                          className="relative w-5 h-5 border border-gray-400 rounded flex items-center justify-center focus:outline-none mx-auto"
                        >
                          {isCartItemSelected(itemId) && (
                            <Image 
                              src={assets.checkmark} 
                              alt="Selected" 
                              width={16} 
                              height={16} 
                              className="absolute inset-0 m-auto"
                            />
                          )}
                        </button>
                      </td>
                      
                      <td className="flex items-start sm:items-center gap-4 py-2 sm:py-4 md:px-4 px-2">
                        <div className="flex-shrink-0">
                          <div className="rounded-lg overflow-hidden bg-gray-500/10 p-2">
                            <Image
                              src={product.image}
                              alt={product.name}
                              className="w-16 sm:w-16 h-auto object-cover mix-blend-multiply"
                              width={1280}
                              height={720}
                            />
                          </div>
                        </div>
                        <div className="text-sm hidden sm:block">
                          <p className="text-gray-800">{product.name}</p>
                          <button
                            className="text-xs text-orange-600 mt-1"
                            onClick={() => updateCartQuantity(product._id, 0)}
                          >
                            Remove
                          </button>
                        </div>
                      </td>
                      
                      {/* Mobile price row - price label only shows on small screens */}
                      <td className="py-2 sm:py-4 md:px-4 px-2 text-gray-600 flex sm:table-cell items-center justify-between">
                        <span className="sm:hidden text-gray-500">Price:</span>
                        <span>₹{product.offerPrice}</span>
                      </td>
                      
                      {/* Mobile quantity row - quantity label only shows on small screens */}
                      <td className="py-2 sm:py-4 md:px-4 px-2 flex sm:table-cell items-center justify-between">
                        <span className="sm:hidden text-gray-500">Quantity:</span>
                        <div className="flex items-center md:gap-2 gap-1">
                          <button onClick={() => updateCartQuantity(product._id, cartItems[itemId] - 1)}>
                            <Image
                              src={assets.decrease_arrow}
                              alt="decrease_arrow"
                              className="w-4 h-4"
                            />
                          </button>
                          <input onChange={e => updateCartQuantity(product._id, Number(e.target.value))} type="number" value={cartItems[itemId]} className="w-10 border text-center appearance-none"></input>
                          <button onClick={() => addToCart(product._id)}>
                            <Image
                              src={assets.increase_arrow}
                              alt="increase_arrow"
                              className="w-4 h-4"
                            />
                          </button>
                        </div>
                      </td>
                      
                      {/* Mobile subtotal row - subtotal label only shows on small screens */}
                      <td className="py-2 sm:py-4 md:px-4 px-2 text-gray-600 flex sm:table-cell items-center justify-between">
                        <span className="sm:hidden text-gray-500">Subtotal:</span>
                        <span>₹{(product.offerPrice * cartItems[itemId]).toFixed(2)}</span>
                      </td>
                      
                      {/* Mobile remove button - only shows on small screens */}
                      <td className="sm:hidden py-2 text-right">
                        <button
                          className="text-xs text-orange-600"
                          onClick={() => updateCartQuantity(product._id, 0)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button onClick={()=> router.push('/all-products')} className="group flex items-center mt-4 sm:mt-6 gap-2 text-orange-600 text-sm sm:text-base">
            <Image
              className="group-hover:-translate-x-1 transition w-4 sm:w-auto h-auto"
              src={assets.arrow_right_icon_colored}
              alt="arrow_right_icon_colored"
            />
            Continue Shopping
          </button>
        </div>
        <div className="w-full md:w-auto md:min-w-[320px] lg:min-w-[380px]">
          <div className="border border-gray-500/30 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">Order Summary</p>
            <div className="border-b border-gray-500/30 pb-3 sm:pb-4 mb-3 sm:mb-4">
              <div className="flex justify-between text-gray-500 mb-2 sm:mb-3 text-sm sm:text-base">
                <p>Subtotal</p>
                <p>₹{total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-gray-500 mb-2 sm:mb-3 text-sm sm:text-base">
                <p>Shipping</p>
                <p>₹0.00</p>
              </div>
              <div className="flex justify-between text-gray-500 text-sm sm:text-base">
                <p>Tax</p>
                <p>₹0.00</p>
              </div>
            </div>
            <div className="flex justify-between font-medium text-base sm:text-lg">
              <p>Total</p>
              <p>₹{total.toFixed(2)}</p>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 transition text-white w-full py-2 sm:py-3 font-medium rounded mt-4 sm:mt-6 text-sm sm:text-base" onClick={()=>{
               const phoneNumber = '7903148225'; 
        const message = 'Hello, i want to purchase the product named as ' +`${concat}` +" and the total price is " +`${total}`; 


        const encodedMessage = encodeURIComponent(message);


        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;


        window.open(whatsappLink, '_blank');
            }}>Check Out</button>
          </div>
          <form className="mb-6 md:mb-0">
            <p className="text-base sm:text-lg mb-2">Have a coupon?</p>
            <div className="flex gap-2 sm:gap-3">
              <input className="flex-1 border border-gray-500/50 rounded p-2 text-sm sm:text-base focus:outline-orange-600 placeholder:text-xs sm:placeholder:text-sm" placeholder="Coupon Code" />
              <button className="border border-gray-500/50 hover:border-orange-600 hover:text-orange-600 transition rounded p-2 px-4 sm:px-6 text-sm sm:text-base">Apply</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cart;

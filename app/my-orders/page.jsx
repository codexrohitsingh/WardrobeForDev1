'use client';
import React, { useEffect, useState } from "react";
import { assets, orderDummyData } from "@/assets/assets";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";

const MyOrders = () => {

    const { currency } = useAppContext();

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchOrders = async () => {
        setOrders(orderDummyData)
        setLoading(false);
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-between px-4 sm:px-6 md:px-16 lg:px-32 py-4 sm:py-6 min-h-screen">
                <div className="space-y-3 sm:space-y-5">
                    <h2 className="text-lg font-medium mt-3 sm:mt-6">My Orders</h2>
                    {loading ? <Loading /> : (<div className="max-w-5xl border-t border-gray-300 text-xs sm:text-sm">
                        {orders.map((order, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-3 sm:gap-5 justify-between p-3 sm:p-5 border-b border-gray-300">
                                <div className="flex-1 flex gap-3 sm:gap-5 max-w-full sm:max-w-80">
                                    <Image
                                        className="max-w-12 max-h-12 sm:max-w-16 sm:max-h-16 object-cover"
                                        src={assets.box_icon}
                                        alt="box_icon"
                                    />
                                    <p className="flex flex-col gap-2 sm:gap-3">
                                        <span className="font-medium text-sm sm:text-base">
                                            {order.items.map((item) => item.product.name + ` x ${item.quantity}`).join(", ")}
                                        </span>
                                        <span>Items : {order.items.length}</span>
                                    </p>
                                </div>
                                <div className="mt-2 sm:mt-0">
                                    <p className="text-xs sm:text-sm">
                                        <span className="font-medium">{order.address.fullName}</span>
                                        <br />
                                        <span>{order.address.area}</span>
                                        <br />
                                        <span>{`${order.address.city}, ${order.address.state}`}</span>
                                        <br />
                                        <span>{order.address.phoneNumber}</span>
                                    </p>
                                </div>
                                <p className="font-medium my-2 sm:my-auto text-sm sm:text-base">{currency}{order.amount}</p>
                                <div className="mb-2 sm:mb-0">
                                    <p className="flex flex-col text-xs sm:text-sm">
                                        <span>Method : COD</span>
                                        <span>Date : {new Date(order.date).toLocaleDateString()}</span>
                                        <span>Payment : Pending</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>)}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default MyOrders;
'use client';
import React, { useEffect, useState } from "react";
import { assets, orderDummyData, productsDummyData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Loading from "@/components/Loading";
import Footer from "@/components/seller/Footer";
import Analytics from "@/components/seller/Analytics";

const Dashboard = () => {
  const { currency } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    pendingOrders: 0,
    totalProducts: 0
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [period, setPeriod] = useState('weekly');

  // handlePeriodChange function is defined below

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      // Calculate dashboard statistics
      const totalOrders = orderDummyData.length;
      const pendingOrders = orderDummyData.filter(order => order.status === 'pending').length;
      const totalProducts = productsDummyData.length;
      const totalSales = orderDummyData.reduce((total, order) => total + order.amount, 0);
      
      setStats({
        totalSales,
        totalOrders,
        pendingOrders,
        totalProducts,
      });

      // Get recent orders (last 5)
      setRecentOrders(orderDummyData.slice(0, 5));

      // Get top selling products (just using the first 5 for now)
      setTopProducts(productsDummyData.slice(0, 5));

      setLoading(false);
    }, 1000);
  }, []);

  const StatCard = ({ title, value, icon, color }) => (
    <div className={`p-6 rounded-lg shadow-md ${color}`}>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
        </div>
        <div className="p-3 rounded-full bg-white/30">
          <Image 
            src={icon} 
            alt={title}
            width={24}
            height={24} 
          />
        </div>
      </div>
    </div>
  );

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  return (
    <div className="flex-1 h-screen overflow-scroll flex flex-col justify-between">
      {loading ? (
        <Loading />
      ) : (
        <div className="md:p-10 p-4 space-y-8">
          <h2 className="text-2xl font-semibold">Seller Dashboard</h2>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Total Sales" 
              value={`${currency}${stats.totalSales.toFixed(2)}`} 
              icon={assets.arrow_icon}
              color="bg-blue-100"
            />
            <StatCard 
              title="Total Orders" 
              value={stats.totalOrders} 
              icon={assets.box_icon}
              color="bg-green-100"
            />
            <StatCard 
              title="Pending Orders" 
              value={stats.pendingOrders} 
              icon={assets.order_icon}
              color="bg-yellow-100"
            />
            <StatCard 
              title="Total Products" 
              value={stats.totalProducts} 
              icon={assets.product_list_icon}
              color="bg-purple-100"
            />
          </div>
          
          {/* Analytics Component */}
          <div className="mt-8">
            <Analytics 
              period={period} 
              onPeriodChange={handlePeriodChange} 
            />
          </div>

          {/* Recent Orders */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Recent Orders</h3>
              <Link href="/seller/orders" className="text-blue-600 text-sm hover:underline">
                View All
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentOrders.map((order, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <Image
                              className="h-10 w-10 rounded-full object-cover"
                              src={assets.box_icon}
                              alt="Order"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              #{order._id?.substring(0, 8) || index + 1}
                            </div>
                            <div className="text-sm text-gray-500">
                              {order.items.length} items
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{order.address.fullName}</div>
                        <div className="text-sm text-gray-500">{order.address.phoneNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {new Date(order.date).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {currency}{order.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top Products */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Top Products</h3>
              <Link href="/seller/product-list" className="text-blue-600 text-sm hover:underline">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {topProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="h-48 w-full relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-medium truncate">{product.name}</h4>
                    <p className="text-gray-500 text-sm truncate">{product.description}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-lg font-bold">{currency}{product.offerPrice}</span>
                      <span className="text-sm text-gray-500 line-through">{currency}{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Dashboard;
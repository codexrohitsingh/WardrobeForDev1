'use client';
import React from 'react';
import { useAppContext } from '@/context/AppContext';

const Analytics = ({ salesData, period = 'weekly', onPeriodChange }) => {
  const { currency } = useAppContext();
  
  // Mock data for sales chart
  const mockWeeklySalesData = [
    { day: 'Mon', sales: 1200 },
    { day: 'Tue', sales: 1900 },
    { day: 'Wed', sales: 1500 },
    { day: 'Thu', sales: 2100 },
    { day: 'Fri', sales: 2400 },
    { day: 'Sat', sales: 1800 },
    { day: 'Sun', sales: 1200 },
  ];

  const mockMonthlySalesData = [
    { month: 'Jan', sales: 12000 },
    { month: 'Feb', sales: 19000 },
    { month: 'Mar', sales: 15000 },
    { month: 'Apr', sales: 21000 },
    { month: 'May', sales: 24000 },
    { month: 'Jun', sales: 18000 },
    { month: 'Jul', sales: 22000 },
    { month: 'Aug', sales: 25000 },
    { month: 'Sep', sales: 17000 },
    { month: 'Oct', sales: 19000 },
    { month: 'Nov', sales: 23000 },
    { month: 'Dec', sales: 28000 },
  ];

  // Use appropriate data based on period
  const chartData = period === 'weekly' ? mockWeeklySalesData : mockMonthlySalesData;
  
  // Find the maximum value for scaling
  const maxSales = Math.max(...chartData.map(item => item.sales));
  
  // Calculate total sales
  const totalSales = chartData.reduce((sum, item) => sum + item.sales, 0);
  
  // Find average sales
  const avgSales = totalSales / chartData.length;
  
  // Find highest sales period
  const highestSalesPeriod = chartData.reduce((max, item) => 
    item.sales > max.sales ? item : max, chartData[0]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold">Sales Analytics</h3>
        <div className="text-sm text-gray-600">
          {period === 'weekly' ? 'This Week' : 'This Year'}
        </div>
      </div>
      
      {/* Key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Sales</p>
          <h4 className="text-xl font-bold">{currency}{totalSales.toLocaleString()}</h4>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Average {period === 'weekly' ? 'Daily' : 'Monthly'} Sales</p>
          <h4 className="text-xl font-bold">{currency}{avgSales.toLocaleString(undefined, { maximumFractionDigits: 0 })}</h4>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Highest Sales</p>
          <h4 className="text-xl font-bold">{currency}{highestSalesPeriod.sales.toLocaleString()}</h4>
          <p className="text-xs text-gray-500">
            {period === 'weekly' ? highestSalesPeriod.day : highestSalesPeriod.month}
          </p>
        </div>
      </div>
      
      {/* Bar chart */}
      <div className="mt-8">
        <div className="relative h-64">
          {/* Y-axis */}
          <div className="absolute left-0 bottom-0 top-0 flex flex-col justify-between text-xs text-gray-500">
            <span>{currency}{maxSales.toLocaleString()}</span>
            <span>{currency}{(maxSales * 0.75).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            <span>{currency}{(maxSales * 0.5).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            <span>{currency}{(maxSales * 0.25).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
            <span>{currency}0</span>
          </div>
          
          {/* Chart */}
          <div className="ml-14 h-full flex items-end">
            <div className="w-full h-60 flex items-end justify-between">
              {chartData.map((item, index) => {
                const height = (item.sales / maxSales) * 100;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="w-8 bg-blue-500 rounded-t-sm hover:bg-blue-600 transition-all duration-200"
                      style={{ height: `${height}%` }}
                      title={`${currency}${item.sales.toLocaleString()}`}
                    ></div>
                    <span className="text-xs mt-1 text-gray-600">
                      {period === 'weekly' ? item.day : item.month}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Time period selector */}
      <div className="mt-4 flex justify-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button 
            type="button" 
            onClick={() => onPeriodChange && onPeriodChange('weekly')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${period === 'weekly' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
          >
            Weekly
          </button>
          <button 
            type="button" 
            onClick={() => onPeriodChange && onPeriodChange('monthly')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${period === 'monthly' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 hover:bg-gray-100'}`}
          >
            Monthly
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
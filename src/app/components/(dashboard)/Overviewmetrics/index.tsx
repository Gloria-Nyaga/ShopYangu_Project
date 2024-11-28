// components/OverviewMetrics.tsx
import React from 'react';
import Sidebarcontent from '../../Sidebarcontent';

const OverviewMetrics: React.FC = () => {
    // Sample metrics data; in a real scenario, this could be fetched from an API or database
    const metrics = {
        users: 150,
        activeProducts: 75,
        totalOrders: 230,
        revenue: '$15,000',
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100 font-jost">
        {/* <Toaster position="top-center" reverseOrder={false} /> */}
        <div className="w-1/4 md:w-1/5 bg-white border-r border-gray-200 shadow-md hidden lg:block">
          <Sidebarcontent />
        </div>
        <div className="w-full md:ml-64 pt-20 transition-all duration-300">
        <h2 className="text-xl font-bold mb-4">Overview Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-6 bg-blue-100 rounded-lg">
                    <h3 className="text-lg font-semibold">Users</h3>
                    <p className="text-2xl font-bold">{metrics.users}</p>
                </div>
                <div className="p-6 bg-green-100 rounded-lg">
                    <h3 className="text-lg font-semibold">Active Products</h3>
                    <p className="text-2xl font-bold">{metrics.activeProducts}</p>
                </div>
                <div className="p-6 bg-yellow-100 rounded-lg">
                    <h3 className="text-lg font-semibold">Total Orders</h3>
                    <p className="text-2xl font-bold">{metrics.totalOrders}</p>
                </div>
                <div className="p-6 bg-purple-100 rounded-lg">
                    <h3 className="text-lg font-semibold">Revenue</h3>
                    <p className="text-2xl font-bold">{metrics.revenue}</p>
                </div>
            </div>

        </div>

        </div>
    );
};

export default OverviewMetrics;
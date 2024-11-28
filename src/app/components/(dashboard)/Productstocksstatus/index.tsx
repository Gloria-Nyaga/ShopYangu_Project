// components/ProductStockStatus.tsx
import React from 'react';

// Sample data for products. In a real-world scenario, you would fetch this data from your backend.
const products = [
    { id: 1, name: 'Product A', stock: 120 },
    { id: 2, name: 'Product B', stock: 20 },
    { id: 3, name: 'Product C', stock: 0 },
    { id: 4, name: 'Product D', stock: 75 },
];

const ProductStockStatus: React.FC = () => {
    return (
        <div className="p-4 bg-white shadow rounded-lg mt-4">
            <h2 className="text-xl font-bold mb-4">Product Stock Status</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductStockStatus;
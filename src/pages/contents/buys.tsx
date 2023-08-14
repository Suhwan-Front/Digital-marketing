import React from 'react';
import '../../app/globals.css';
import ProductDetail from '@/components/sell/ProductDetailForm';

const BuyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6">제품 구매</h1>
        <ProductDetail />
      </div>
    </div>
  );
};

export default BuyPage;
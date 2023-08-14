import React from 'react';
import '../../app/globals.css'
import Link from 'next/link';

const ProductList: React.FC = () => {
  const products = [
    {
      id: 1,
      name: '제품 1',
      category: '카테고리 1',
      description: '이 제품은...',
      image: '../../../public/next.svg',
      price: '가격 1',
    },
    {
      id: 2,
      name: '제품 2',
      category: '카테고리 2',
      description: '이 제품은...',
      image: '../../../public/next.svg',
      price: '가격 2',
    },
    // 추가 제품 정보를 이어서 추가하세요
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-4 rounded-lg" />
          <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-gray-700 font-semibold mb-2">{product.price}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Link href={'/contents/Buys'}>
            구매하기
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

'use client'

import React, { useEffect, useState } from 'react';
import '../../app/globals.css'
import Link from 'next/link';
import { API } from '@/API';

interface Product {
  result: string;
  postWriter: string;
  postHitCount: number;
  salesPostNumber: number;
  postLike: number;
  products: [
    {
      number: number;
      price: number;
      quantity: number;
      detail: string;
    },
    {
      number: number;
      price: number;
      quantity: number;
      detail: string;
    }
  ];
  postContents: string;
  mainImage: string;
  storeLocation: string;
  descImages: [
    {
      image: string;
    },
    {
      image: string;
    }
  ];
  postDate: string;
  postTitle: string;
  category: string;
}

const ProductList: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
  fetch(`${API}/salespost`)
    .then((response) => response.json())
    .then((data) => {
      if (data.result === "success") {
        setProduct(data.data);
      } else {
        console.error('API 요청 실패:', data);
      }
    });
}, []);

useEffect(() => {
  if (product !== null) { // 초기값인 null을 제외한 경우만 로깅
  	console.log(product); 
  }
}, [product]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {product.map((product) => (
      <div key={product.salesPostNumber} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center space-y-4">
        <div className="relative w-full h-40 overflow-hidden rounded-lg mb-4">
          <img src={product.mainImage} alt={product.postTitle} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out" />
        </div>
        <h2 className="text-lg font-semibold mb-2">{product.postTitle}</h2>
        <p className="text-gray-600 mb-2 text-center">{product.postContents}</p>
        <p className="text-gray-700 font-semibold mb-2">{product.products[0].price}원</p>
        <p className="text-gray-400 text-sm mb-4">By {product.postWriter} • 카테고리: {product.category} • 조회수: {product.postHitCount} • 좋아요: {product.postLike}</p>
        <div className="mt-auto">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Link href={'/contents/Buys'}>
              구매하기
            </Link>
          </button>
        </div>
      </div>
    ))}
  </div>
  );
};

export default ProductList;
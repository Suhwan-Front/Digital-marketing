import React, { useState } from 'react';
import '../../app/globals.css'

const SellForm: React.FC = () => {
  const [productInfo, setProductInfo] = useState({
    productName: '',
    productCategory: '',
    productDescription: '',
    productImage: '',
    productQuantity: '',
    deliveryFee: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 판매 등록 처리 로직 추가
  };

  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-semibold">상품 등록</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="productName" className="text-gray-600 font-medium mb-1 block">제품 이름</label>
          <input
            type="text"
            id="productName"
            className="w-full py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productInfo.productName}
            onChange={(e) => setProductInfo({ ...productInfo, productName: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="productCategory" className="text-gray-600 font-medium mb-1 block">제품 카테고리</label>
          <input
            type="text"
            id="productCategory"
            className="w-full py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={productInfo.productCategory}
            onChange={(e) => setProductInfo({ ...productInfo, productCategory: e.target.value })}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="productQuantity" className="text-gray-600 font-medium mb-1 block">제품 수량</label>
        <input
          type="number"
          id="productQuantity"
          className="w-full py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productInfo.productQuantity}
          onChange={(e) => setProductInfo({ ...productInfo, productQuantity: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="deliveryFee" className="text-gray-600 font-medium mb-1 block">배달비</label>
        <input
          type="text"
          id="deliveryFee"
          className="w-full py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productInfo.deliveryFee}
          onChange={(e) => setProductInfo({ ...productInfo, deliveryFee: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="productDescription" className="text-gray-600 font-medium mb-1 block">제품 설명</label>
        <textarea
          id="productDescription"
          className="w-full h-32 py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productInfo.productDescription}
          onChange={(e) => setProductInfo({ ...productInfo, productDescription: e.target.value })}
          required
        />
      </div>
      <div>
        <label htmlFor="productImage" className="text-gray-600 font-medium mb-1 block">제품 이미지 URL</label>
        <input
          type="text"
          id="productImage"
          className="w-full py-3 px-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productInfo.productImage}
          onChange={(e) => setProductInfo({ ...productInfo, productImage: e.target.value })}
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          등록하기
        </button>
      </div>
    </form>
  );
};

export default SellForm;

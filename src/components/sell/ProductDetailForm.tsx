import { useRouter } from 'next/router';
import React, { useState } from 'react';
import '../../app/globals.css'

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-6">제품 상세 페이지</h1>
      {/* 제품 정보, 이미지 및 가격 */}
      <div className="grid-cols-2 gap-6 mb-6">
        <img className="w-full h-64 object-cover" src="/images/product.jpg" alt={`제품 ${id} 이미지`} />
        <div>
          <div className="text-xl">제품명: 멋진 제품 {id}</div>
          <div className="text-lg">가격: 10,000원</div>
          <div className="text-lg">배송비: 2,500원</div>
        </div>
      </div>

      {/* 수량 선택 */}
      <div className="mb-6">
        <label className="mr-3">수량: </label>
        <input
          type="number"
          className="border rounded p-1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>

      {/* 구매 버튼 */}
      <button className="bg-blue-500 text-white p-2 rounded">구매하기</button>
    </div>
  );
};

export default ProductDetail;
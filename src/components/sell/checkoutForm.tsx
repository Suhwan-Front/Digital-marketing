import React, { useState } from 'react';
import '../../app/globals.css'

const CheckoutForm:React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-6">결제 페이지</h1>
      {/* 1. 제품 정보 */}
      <div className="border rounded p-4 mb-6">
        <div>
          <div>상품명: 주옥같은 상품</div>
          <img className="w-16 h-16" src="/images/thumbnail.jpg" alt="상품 썸네일 이미지" />
          <div>가격: 10,000원</div>
          <div>
            <span>수량: </span>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div>판매자: 행운의 판매자</div>
          <a href="">판매 페이지로 이동</a>
        </div>
      </div>

      {/* 2. 배송 정보 */}
      <div className="border rounded p-4 mb-6">
        <div>배송 주소: 서울특별시 강남구 어쩌구로 12길</div>
        <div>연락처: 010-1234-5678</div>
        <textarea
          className="w-full h-20"
          placeholder="배송 시 요청 사항을 입력하세요."
        ></textarea>
        <div>배송 예정 일자: 2023년 8월 29일</div>
      </div>

      {/* 3. 결제 정보 */}
      <div className="border rounded p-4 mb-6">
        <div className="mb-3">
          <label className="mr-3">
            <input type="radio" name="payment" value="card" defaultChecked />
            카드 결제
          </label>
          <label className="mr-3">
            <input type="radio" name="payment" value="account" />
            계좌이체
          </label>
          <label className="mr-3">
            <input type="radio" name="payment" value="kakaopay" />
            카카오 페이
          </label>
          <label>
            <input type="radio" name="payment" value="tosspay" />
            토스 페이
          </label>
        </div>
        <div>총 금액: {10_000 * quantity}원</div>
        <div>할인 금액: 0원</div>
      </div>

      {/* 4. 주문 결제 버튼 */}
      <button className="bg-blue-500 text-white p-2 rounded">주문 결제</button>
    </div>
  );
};

export default CheckoutForm;
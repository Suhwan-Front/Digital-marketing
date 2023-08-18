import React from 'react'
import '../../app/globals.css'
import ProductDetailForm from '../../components/sell/ProductDetailForm'

const BuyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6">제품 구매</h1>
        <ProductDetailForm
          salesPost={{
            result: 'success',
            postTitle: '1',
            postWriter: '작성자 이름',
            postHitCount: 0,
            salesPostNumber: 0,
            postLike: 0,
            products: [
              {
                number: 1,
                price: 100,
                quantity: 10,
                detail: '상품 설명',
              },
            ],
            postContents: 'hello',
            mainImage: '', // 이 값을 적절한 이미지 URL로 변경하세요.
            storeLocation: '상점 위치',
            descImages: [
              {
                image: '', // 이 값을 적절한 설명 이미지 URL로 변경하세요.
              },
            ],
            postDate: '2023-08-18',
            category: '음식',
          }}
        />
      </div>
    </div>
  )
}

export default BuyPage

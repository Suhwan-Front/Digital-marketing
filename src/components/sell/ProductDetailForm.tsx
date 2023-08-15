import React from 'react'

const ProductDetailForm = ({
  postTitle,
  category,
  deliveryPrice,
  postContents,
  mainImage,
  descImages,
  saleCriteria,
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="product-detail-main grid grid-cols-12 gap-8 mb-14">
        <div className="col-span-7 bg-white p-8 rounded-lg shadow-md">
          <img
            className="w-full rounded-lg object-cover mb-4"
            src={mainImage}
            alt={postTitle}
          />
          <div className="grid grid-cols-3 gap-4">
            {descImages.map(
              (
                image: string | undefined,
                index: React.Key | null | undefined,
              ) => (
                <img
                  key={index}
                  className="w-full rounded-lg object-cover shadow-lg border border-gray-200 hover:border-gray-400 transition-all duration-300 cursor-pointer"
                  src={image}
                  alt={`additional product image ${index + 1}`}
                />
              ),
            )}
          </div>
        </div>

        <div className="col-span-5 bg-gray-100 text-gray-800 p-8 rounded-lg shadow-md">
          <h1 className="text-4xl font-semibold mb-4">{postTitle}</h1>
          <div className="flex items-center mb-6">
            <span className="text-lg font-semibold mr-4">
              카테고리: <span className="text-gray-800">{category}</span>
            </span>
            <span className="text-lg font-semibold">
              배송비: <span className="text-gray-800">{deliveryPrice}원</span>
            </span>
          </div>
          <ul className="divide-y divide-gray-300 mb-10">
            {saleCriteria.map((option) => (
              <li
                key={option.id}
                className="py-4 flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold">{option.name}</h3>
                <p className="text-center">수량: {option.quantity}개</p>
                <p className="text-lg font-semibold">{option.price}원</p>
              </li>
            ))}
          </ul>
          <button className="bg-gray-800 text-white px-10 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 w-full transition-all duration-300">
            구매하기
          </button>
        </div>
      </div>

      <div className="product-detail-contents mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">상세 설명</h2>
        <p className="text-lg">{postContents}</p>
      </div>

      <div className="product-detail-reviews mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">리뷰</h2>
        {/* 리뷰 목록 구현 */}
      </div>
    </div>
  )
}

export default ProductDetailForm

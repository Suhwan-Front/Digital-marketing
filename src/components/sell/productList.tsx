'use client'

import React, { useEffect, useState } from 'react'
import '../../app/globals.css'
import Link from 'next/link'
import { HeartIcon as SolidHeartIcon } from '@heroicons/react/solid'
import { HeartIcon as OutlineHeartIcon } from '@heroicons/react/outline'

interface Product {
  result: string
  postWriter: string
  postHitCount: number
  salesPostNumber: number
  postLike: number
  products: [
    {
      number: number
      price: number
      quantity: number
      detail: string
    },
    {
      number: number
      price: number
      quantity: number
      detail: string
    },
  ]
  postContents: string
  mainImage: string
  storeLocation: string
  descImages: [
    {
      image: string
    },
    {
      image: string
    },
  ]
  postDate: string
  postTitle: string
  category: string
}

const ProductList: React.FC = () => {
  const [product, setProduct] = useState<Product[]>([])
  const [liked, setLiked] = useState<boolean[]>([])
  const [heartHover, setHeartHover] = useState(false)

  const likeClickHandler = (index: number) => {
    const updatedLiked = [...liked]
    updatedLiked[index] = !updatedLiked[index]
    setLiked(updatedLiked)
  }

  useEffect(() => {
    fetch(`http://49.50.161.125:8080/salespost`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result === 'success') {
          setProduct(data.data)
        } else {
          console.error('API 요청 실패:', data)
        }
      })
  }, [])

  const truncate = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + '...'
    }
    return text
  }

  useEffect(() => {
    if (product !== null) {
      // 초기값인 null을 제외한 경우만 로깅
      console.log(product)
    }
  }, [product])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {(product || []).map((product, index) => (
        <div
          key={product.salesPostNumber}
          className="glass card-scale-hover p-4 flex flex-col items-center space-y-4"
        >
          <div className="relative w-full h-40 overflow-hidden rounded-lg mb-4">
            <img
              src={product.mainImage}
              alt={product.postTitle}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </div>
          <h2 className="text-xl font-semibold mb-2">{product.postTitle}</h2>
          <p className="text-gray-600 mb-2 text-center">
            {truncate(product.postContents, 25)}
          </p>
          <p className="text-gray-700 font-semibold mb-2">
            {product.products[0].price}원
          </p>
          <p className="text-gray-400 text-sm mb-4">
            By {product.postWriter} • 카테고리: {product.category}
          </p>
          <div className="flex items-start">
            <p className="text-gray-400 text-sm mb-4 mr-4">
              조회수: {product.postHitCount}
            </p>
            <button
              onMouseEnter={() => setHeartHover(true)}
              onMouseLeave={() => setHeartHover(false)}
              onClick={() => likeClickHandler(index)}
              className={`mr-2 focus:outline-none`}
            >
              {!liked[index] ? (
                <OutlineHeartIcon className="h-5 w-5" />
              ) : (
                <SolidHeartIcon className="h-5 w-5" />
              )}
            </button>
            <p className="text-gray-400 text-sm mb-4 mr-4">
              {product.postLike}
            </p>
          </div>

          <div className="mt-auto">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Link href={`/product/${product.salesPostNumber}`}>구매하기</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList

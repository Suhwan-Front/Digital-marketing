import React, { useEffect, useState } from 'react'
import '../../app/globals.css'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useRouter } from 'next/router'

interface Image {
  imagename: string
}

interface Product {
  number: string
  detail: string
  quantity: string
  price: string
}

interface Data {
  postTitle: string
  postCategory: string
  deliveryPrice: string
  postWriter: string
  postContents: string
  mainImage: File | null
  descImages: File[]
  products: Product[]
}

const SellForm: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [data, setData] = useState<Data>({
    postTitle: '',
    postCategory: '',
    deliveryPrice: '',
    postWriter: '',
    postContents: '',
    mainImage: null,
    descImages: [],
    products: [
      {
        number: '1',
        detail: '',
        quantity: '',
        price: '',
      },
    ],
  })
  const router = useRouter()

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  // 상품 상세 판매기준 추가
  const addProduct = () => {
    const nextProductId = (
      Math.max(...data.products.map((product) => parseInt(product.number)), 0) +
      1
    ).toString()
    setData((prevState) => ({
      ...prevState,
      products: [
        ...prevState.products,
        { number: nextProductId, detail: '', quantity: '', price: '' },
      ],
    }))
  }

  const updateProduct = (number: string, field: string, val: string) => {
    setData((prevState) => ({
      ...prevState,
      products: prevState.products.map((product) =>
        product.number === number ? { ...product, [field]: val } : product,
      ),
    }))
  }

  const removeProduct = (number: string) => {
    setData((prevState) => ({
      ...prevState,
      products: prevState.products.filter(
        (product) => product.number !== number,
      ),
    }))
  }

  const handleMainImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return
    }
    const file = e.target.files[0]
    setData((prevState) => ({
      ...prevState,
      mainImage: file,
    }))
  }

  const handleDescImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return
    }
    const files = Array.from(e.target.files)
    setData((prevState) => ({
      ...prevState,
      descImages: files,
    }))
  }
  useEffect(() => {
    setName(localStorage.getItem('name') ?? '익명')
  }, [])

  // 폼 제출 처리
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('postWriter', name)
    formData.append('postContents', data.postContents)
    formData.append('storeLocation', '서울')
    formData.append('postTitle', data.postTitle)
    formData.append('category', data.postCategory)
    formData.append('products', JSON.stringify(data.products))

    if (data.mainImage) {
      formData.append('mainImage', data.mainImage)
    }

    data.descImages.forEach((descImage) => {
      formData.append(`img`, descImage)
    })

    try {
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      }
      const response = await axios.post(
        `http://49.50.161.125:8080/salespost`,
        formData,
        config,
      )
      console.log(response)

      if (response.status === 201 || response.status === 200) {
        router.push('/')
      } else {
        alert('데이터 업로드에 실패했습니다. 다시 시도해 주세요.')
      }
    } catch (error) {
      console.error(error)
      alert('데이터 업로드 도중 오류가 발생했습니다. 다시 시도해 주세요.')
    }
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-6 bg-white rounded-md max-w-4xl shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4 text-A8DF65">판매글 등록</h1>
      <form onSubmit={handleSubmit}>
        {/* 판매글 제목 */}
        <div className="mb-4">
          <label htmlFor="postTitle" className="block mb-2">
            판매글 제목
          </label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            className="w-full px-3 py-2 border rounded focus:shadow-outline"
            value={data.postTitle}
            onChange={handleChange}
            required
          />
        </div>

        {/* 상세 판매기준 */}
        <div className="mb-4">
          <span className="block mb-2">상세 판매기준</span>
          {data.products.map((item) => (
            <div
              key={item.number}
              className="grid grid-cols-4 gap-4 mb-2 items-center"
            >
              <input
                type="text"
                name="name"
                value={item.detail}
                className="px-3 py-2 border rounded focus:shadow-outline"
                placeholder="이름 (예:빨강)"
                onChange={(e) =>
                  updateProduct(item.number, 'detail', e.target.value)
                }
                required
              />
              <input
                type="number"
                name="quantity"
                value={item.quantity}
                className="px-3 py-2 border rounded focus:shadow-outline"
                placeholder="수량"
                onChange={(e) =>
                  updateProduct(item.number, 'quantity', e.target.value)
                }
                required
              />
              <input
                type="number"
                name="price"
                value={item.price}
                className="px-3 py-2 border rounded focus:shadow-outline"
                placeholder="가격 (예:1000)"
                onChange={(e) =>
                  updateProduct(item.number, 'price', e.target.value)
                }
                required
              />
              {item.number !== '1' && (
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                  onClick={() => removeProduct(item.number)}
                >
                  삭제
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-400 text-white py-2 px-3 rounded hover:bg-blue-600 focus:outline-none"
            onClick={addProduct}
          >
            + 추가
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="postCategory" className="block mb-2">
            상품 카테고리
          </label>
          <select
            name="postCategory"
            id="category"
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
            required
          >
            <option value="">-- 카테고리 선택 --</option>
            <option value="음식">음식</option>
            <option value="주류">주류</option>
            <option value="필기도구">필기도구</option>
            <option value="가전">가전</option>
            <option value="전통">전통</option>
            <option value="뷰티">뷰티</option>
          </select>
        </div>

        {/* 배송비 */}
        <div className="mb-4">
          <label htmlFor="deliveryPrice" className="block mb-2">
            배송비
          </label>
          <input
            type="number"
            id="deliveryPrice"
            name="deliveryPrice"
            className="w-full px-3 py-2 border rounded"
            onChange={handleChange}
            required
          />
        </div>

        {/* 게시글 */}
        <div className="mb-4">
          <label htmlFor="postContents" className="block mb-2">
            게시글
          </label>
          <textarea
            name="postContents"
            id="postContents"
            className="w-full px-3 py-2 border rounded"
            rows={10}
            value={data.postContents}
            onChange={handleChange}
            required
          />
        </div>

        {/* 메인 사진 */}
        <div className="mb-4">
          <label htmlFor="mainImage" className="block mb-2">
            메인 사진
          </label>
          <input
            type="file"
            id="mainImage"
            name="mainImage"
            className="py-2"
            accept="image/*"
            onChange={handleMainImageUpload}
            required
          />
        </div>

        {/* 제품 설명 사진 */}
        <div className="mb-4">
          <label htmlFor="descImages" className="block mb-2">
            제품 설명 사진
          </label>
          <input
            type="file"
            id="descImages"
            name="descImages"
            className="py-2"
            accept="image/*"
            onChange={handleDescImageUpload}
            multiple
            required
          />
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          등록
        </button>
      </form>
    </motion.div>
  )
}

export default SellForm

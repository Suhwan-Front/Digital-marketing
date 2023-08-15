import React, { useState } from 'react'
import '../../app/globals.css'
import { motion } from 'framer-motion'

const SellForm: React.FC = () => {
  // 상품 상세 판매기준을 관리하기 위한 상태
  const [saleCriteria, setSaleCriteria] = useState([
    { id: 1, name: '', quantity: '', price: '' },
  ])

  // 상품 상세 판매기준 추가
  const addSaleCriteria = () => {
    setSaleCriteria([
      ...saleCriteria,
      { id: saleCriteria.length + 1, name: '', quantity: '', price: '' },
    ])
  }

  const updateSaleCriteria = (id: number, field: string, val: string) => {
    const updatedCriteria = saleCriteria.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: val }
      }
      return item
    })
    setSaleCriteria(updatedCriteria)
  }

  const removeSaleCriteria = (id: number) => {
    const updatedCriteria = saleCriteria.filter((item) => item.id !== id)
    setSaleCriteria(updatedCriteria)
  }

  // 폼 제출 처리
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submit Data')
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
          <label htmlFor="title" className="block mb-2">
            판매글 제목
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border rounded focus:shadow-outline"
            required
          />
        </div>

        {/* 상세 판매기준 */}
        <div className="mb-4">
          <span className="block mb-2">상세 판매기준</span>
          {saleCriteria.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 gap-4 mb-2 items-center"
            >
              <input
                type="text"
                name="name"
                value={item.name}
                className="px-3 py-2 border rounded focus:shadow-outline"
                placeholder="이름 (예:빨강)"
                onChange={(e) =>
                  updateSaleCriteria(item.id, 'name', e.target.value)
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
                  updateSaleCriteria(item.id, 'quantity', e.target.value)
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
                  updateSaleCriteria(item.id, 'price', e.target.value)
                }
                required
              />
              {item.id > 1 && (
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700 focus:outline-none"
                  onClick={() => removeSaleCriteria(item.id)}
                >
                  삭제
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="bg-blue-400 text-white py-2 px-3 rounded hover:bg-blue-600 focus:outline-none"
            onClick={addSaleCriteria}
          >
            + 추가
          </button>
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">
            상품테고리
          </label>
          <select
            name="category"
            id="category"
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">-- 카테고리 선택 --</option>
            <option value="음식">음식</option>
            <option value="전통">전통</option>
            <option value="가전">가전</option>
            <option value="생활">활</option>
            <option value="뷰티">뷰티</option>
          </select>
        </div>

        {/* 배송비 */}
        <div className="mb-4">
          <label htmlFor="shipping" className="block mb-2">
            배송비
          </label>
          <input
            type="number"
            id="shipping"
            name="shipping"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        {/* 게시글 */}
        <div className="mb-4">
          <label htmlFor="post" className="block mb-2">
            게시글
          </label>
          <textarea
            name="post"
            id="post"
            className="w-full px-3 py-2 border rounded"
            rows={10}
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

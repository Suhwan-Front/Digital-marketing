import type { NextPage } from 'next'
import { SetStateAction, useCallback, useState } from 'react'
import { SellsEditor } from '../../components/SellsEditor'
import Link from 'next/link'

type DraftPageProps = {}

const CATEGORY_LIST = [
  { id: 0, data: '음식' },
  { id: 1, data: '가구' },
  { id: 2, data: '주류' },
  { id: 3, data: '전통' },
  { id: 4, data: '기타' },
]

const DraftPage: NextPage<DraftPageProps> = ({}) => {
  const [value, setValue] = useState('')
  const [products, setProducts] = useState([
    { productName: '', productPrice: '', productQuantity: '' },
  ])
  const [categoryCheckedList, setCategoryCheckedList] = useState([])
  const onCheckedElement = (checked: any, item: any) => {
    if (checked) {
      setCategoryCheckedList([...categoryCheckedList, item])
    } else if (!checked) {
      setCategoryCheckedList(categoryCheckedList.filter((e) => e !== item))
    }
  }

  const onRemove = (item: any) => {
    setCategoryCheckedList(categoryCheckedList.filter((e) => e !== item))
  }

  const handleEditorChange = useCallback((value: SetStateAction<string>) => {
    setValue(value)
  }, [])

  const handleSubmitClick = () => {
    localStorage.setItem('content', value)
    console.log(value)
  }

  const handleProductChange = (index: number, field: string, value: string) => {
    const updatedProducts = [...products]
    updatedProducts[index][field] = value
    setProducts(updatedProducts)
  }

  const handleAddProduct = () => {
    setProducts([
      ...products,
      { productName: '', productPrice: '', productQuantity: '' },
    ])
  }

  const handleRemoveProduct = (index: number) => {
    const updatedProduct = [...products]
    updatedProduct.splice(index, 1)
    setProducts(updatedProduct)
  }

  return (
    <div>
      <div id="sells_title_wrapper">
        <p>제목</p>
        <input id="sells_title_input" placeholder="제목" />
      </div>
      <div>
        <p>카테고리</p>
        <div id="category_list">
          {CATEGORY_LIST.map((item) => {
            return (
              <div key={item.id}>
                <input
                  type="checkbox"
                  value={item.data}
                  onChange={(e) => {
                    onCheckedElement(e.target.checked, e.target.value)
                  }}
                  checked={
                    categoryCheckedList.includes(item.data) ? true : false
                  }
                />
                <p>{item.data}</p>
              </div>
            )
          })}
        </div>
        <div id="selected_category">
          {categoryCheckedList.length === 0 && (
            <div>{'카테고리를 지정해주세요.'}</div>
          )}
          {categoryCheckedList.map((item) => {
            return (
              <div key={item}>
                <div>{item}</div>
                <button onClick={() => onRemove(item)}>X</button>
              </div>
            )
          })}
        </div>
      </div>
      <div id="product_category"></div>
      {products.map((product, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            placeholder="제품명"
            value={product.productName}
            onChange={(e) =>
              handleProductChange(index, 'productName', e.target.value)
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="가격"
            value={product.productPrice}
            onChange={(e) =>
              handleProductChange(index, 'productPrice', e.target.value)
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="수량"
            value={product.productQuantity}
            onChange={(e) =>
              handleProductChange(index, 'productQuantity', e.target.value)
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="button"
            onClick={() => handleRemoveProduct(index)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            제품 삭제
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAddProduct}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        제품 추가
      </button>
      <SellsEditor value={value} onChange={handleEditorChange} />
      <div id="delivery_price_wrapper">
        <input placeholder="원" />
        <button>배달비</button>
      </div>
      <button onClick={handleSubmitClick}>
        <Link href={'/'}>제출하기</Link>
      </button>
    </div>
  )
}

export default DraftPage

import ProductDetailForm from '@/components/sell/ProductDetailForm'

const ProductDetail = () => {
  return (
    <>
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
    </>
  )
}

export default ProductDetail

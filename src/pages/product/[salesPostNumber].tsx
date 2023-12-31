import React from 'react'
import { SalesPost } from '../../utils/types'
import ProductDetailForm from '../../components/sell/ProductDetailForm'
import { TopNav } from '../../components/main/TopNav'

interface ProductDetailPageProps {
  salesPost: SalesPost
}

export async function getServerSideProps(context: {
  params: { salesPostNumber: any }
}) {
  const { salesPostNumber } = context.params
  const res = await fetch(
    `http://49.50.161.125:8080/salespost/${salesPostNumber}`,
  )
  const data: SalesPost = await res.json()
  console.log('데이터 확인:', data)

  return {
    props: {
      salesPost: data,
    },
  }
}

export default function ProductPage({ salesPost }: ProductDetailPageProps) {
  return (
    <>
      <TopNav />
      <ProductDetailForm salesPost={salesPost} />
    </>
  )
}

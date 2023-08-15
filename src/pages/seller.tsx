import { TopNav } from '@/components/main/TopNav'
import React from 'react'
import '../app/globals.css'
import Link from 'next/link'

const Seller: React.FC = () => {
  return (
    <>
      <TopNav />
      <div className="flex flex-row my-12 ml-6">
        <button className="bg-gray">
          <Link href={'/contents/Sell'}>콘텐츠 등록</Link>
        </button>
      </div>
      <div className="flex mx-4">현재 진행중인 판매 목록</div>
      <hr
        style={{
          opacity: '0.1',
          borderColor: 'currentColor',
        }}
        className="border-t border-current mx-4 mb-4"
      />
    </>
  )
}

export default Seller

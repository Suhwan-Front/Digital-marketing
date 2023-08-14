import { TopNav } from '@/components/main/TopNav'
import React from 'react'
import '../app/globals.css'
import Link from 'next/link'

const Seller: React.FC = () => {
  return (
    <>
      <TopNav />
      <div className='flex flex-row'>
            <Link href={'/contents/Sell'}>콘텐츠 등록</Link>
      </div>
    </>
  )
}

export default Seller

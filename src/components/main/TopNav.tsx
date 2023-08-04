import Link from 'next/link'
import { useEffect, useState } from 'react'

export const TopNav: React.FC = () => {
  return (
    <nav id="top_nav">
      <button id="login">
        <Link href={'/auth/Login'}>로그인</Link>
      </button>
      <div id="purchaser">구매자</div>
      <div id="seller">판매자</div>
    </nav>
  )
}

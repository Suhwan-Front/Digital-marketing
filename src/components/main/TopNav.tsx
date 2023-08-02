import Link from 'next/link'

export const TopNav: React.FC = () => {
  return (
    <nav id="top_nav">
      <div id="purchaser">구매자</div>
      <div id="seller">판매자</div>
      <button id="login">
        <Link href={'/auth/Login'}>로그인</Link>
      </button>
    </nav>
  )
}

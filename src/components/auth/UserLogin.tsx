import { kakaoInit } from '@/utils/kakaoInit'
import Link from 'next/link'
import '../../app/globals.css'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const UserLogin: React.FC = () => {
  const router = useRouter()
  const [isError, setIsError] = useState('')
  const handleKakaoLogin = () => {
    router.push('KakaoEmail')
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const target = event.target as typeof event.target & {
      username: { value: string }
      password: { value: string }
    }

    const email = target.username.value
    const password = target.password.value

    try {
      const response = await fetch(`http://49.50.161.125:8080/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('LoginItem', data.access_token)
        localStorage.setItem('name', data.name)
        localStorage.setItem('email', email)
        router.push('/')
      } else {
        setIsError('false')
      }
    } catch (error) {
      console.error('로그인 중 에러 발생:', error)
    }
  }
  return (
    <div
      className="bg-transparent p-8 py-12 shadow-md rounded-md w-96 backdrop-blur-md bg-opacity-40"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
    >
      <h1 className="text-3xl font-bold mb-6 text-center">로그인</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="text-sm font-semibold mb-1 block"
          >
            아이디
          </label>
          <input
            id="username"
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 focus:border-blue-500"
            placeholder="아이디를 입력하세요"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="text-sm font-semibold mb-1 block"
          >
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 focus:border-blue-500"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        {isError === 'false' ? (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">오류 발생! </strong>
          </div>
        ) : (
          <></>
        )}
        <button
          type="submit"
          className="w-full p-3 mt-4 bg-blue-500 text-white rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-blue-600"
        >
          로그인
        </button>
      </form>
      <div className="text-center mt-4">
        <p className="text-blue-500 hover:underline">아이디 찾기</p>
        <p className="text-blue-500 hover:underline">비밀번호 찾기</p>
        <p className="text-blue-500 hover:underline">
          <Link href={'/auth/SignUp'}>회원가입</Link>
        </p>
      </div>
      <button
        onClick={handleKakaoLogin}
        className="w-full p-3 mt-4 bg-yellow-500 text-white rounded-md transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-yellow-600"
      >
        카카오 로그인
      </button>
    </div>
  )
}

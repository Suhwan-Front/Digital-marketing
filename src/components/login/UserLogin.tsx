import Link from 'next/link'
import '../../app/globals.css'
import { kakaoInit } from '@/utils/kakaoInit';
import { useState } from 'react';
import router from 'next/router';

export const UserLogin: React.FC = () => {
    const [userEmail, setUserEmail] = useState<string>()
    const [userPW, setUserPW] = useState<string>()
    const handleKakaoLogin = () => {
        kakaoInit();
    };
    const handleLogin = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const loginData = {
            userEmail,
            userPW
        }
        const response: ResponseType = await fetch('http://localhost:8080/auth/signin',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                loginData
            }),
        }).then((res) => res.json())
        if(response){
            localStorage.setItem('access_token', response.data.access_token)
            router.push('/')
        } else {
            router.push('/auth/Login')
        }
    }
    return(
        <div className="bg-white p-8 shadow-md rounded-md w-96">
                <h1 className="text-3xl font-semibold mb-6 text-center">로그인</h1>
                <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="username" className="text-sm font-semibold mb-1 block">
                        아이디
                    </label>
                    <input
                        id="username"
                        type="email"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 focus:border-blue-500"
                        placeholder="아이디를 입력하세요"
                        value={userEmail}
                        onChange={e => setUserEmail(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="text-sm font-semibold mb-1 block">
                        비밀번호
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 focus:border-blue-500"
                        placeholder="비밀번호를 입력하세요"
                        value={userPW}
                        onChange={e => setUserPW(e.target.value)}
                    />
                </div>
                <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                        로그인
                </button>

                </form>
                <div className="text-center mt-4">
                    <p className="text-blue-500 hover:underline">아이디 찾기</p>
                    <p className="text-blue-500 hover:underline">비밀번호 찾기</p>
                    <p className="text-blue-500 hover:underline">
                    <Link href={'/auth/SignUp'}>
                        회원가입
                    </Link>
                        </p>
                </div>
                <button
                    onClick={handleKakaoLogin}
                    className="w-full mt-4 bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
                >
                    카카오 로그인
                </button>
            </div>
    )
}
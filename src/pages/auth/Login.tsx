import { kakaoInit } from "@/utils/kakaoInit";
import '../../app/globals.css'
import Link from "next/link";

const Login = () => {
    const handleKakaoLogin = () => {
        kakaoInit();
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md w-96">
                <h1 className="text-3xl font-semibold mb-6 text-center">로그인</h1>
                <div className="mb-4">
                    <label htmlFor="username" className="text-sm font-semibold mb-1 block">
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
                    <label htmlFor="password" className="text-sm font-semibold mb-1 block">
                        비밀번호
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300 focus:border-blue-500"
                        placeholder="비밀번호를 입력하세요"
                    />
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                        로그인
                </button>
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
        </div>
    );
};

export default Login;

import { TopNav } from '../../components/main/TopNav'
import { UserLogin } from '../../components/auth/UserLogin'
import '../../app/globals.css'
import Link from 'next/link'

const Login = () => {
  return (
    <div>
      <TopNav />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div>
        <UserLogin />
      <div className="flex justify-between text-center">
        <div className='flex'>
          <p className="text-gray-400 hover:underline mr-1">아이디 찾기</p>
          <p className='text-gray-400'>/</p>
          <p className="text-gray-400 hover:underline ml-1">비밀번호 찾기</p>
        </div>
        <p className="text-gray-400 hover:underline">
          <Link href={'/auth/SignUp'}>회원가입</Link>
        </p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Login

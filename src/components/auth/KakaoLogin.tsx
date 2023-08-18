import { kakaoInit } from '../../utils/kakaoInit'
import '../../app/globals.css'

export const KakaoLogin: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      username: { value: string }
    }
    const email = target.username.value
    localStorage.setItem('email', email)
    kakaoInit()
  }
  return (
    <div className="bg-white p-8 shadow-md rounded-md w-96">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        카카오 이메일 설정
      </h1>
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          설정완료
        </button>
      </form>
    </div>
  )
}

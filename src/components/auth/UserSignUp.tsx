import Link from "next/link";
import { useState } from "react";
import '../../app/globals.css'

export const UserSignUp: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [ages, setAges] = useState<string>("");
  const [birth, setBirth] = useState<number>(0);
  const [address, setAddress] = useState<string>("");

  const signUpHandler = async () => {
    if (email === "") {
      setEmail("false");
    } else if (password === "") {
      setPassword("false");
    } else if (name === "") {
      setName("false");
    } else if (gender === "") {
      setGender("false");
    } else {
      // 서버에 회원 가입 요청 처리하는 로직 추가

      // 임시로 로컬스토리지에 로그인 아이템 저장
      localStorage.setItem("LoginItem", "123");

      // 성공시 어떤 동작을 수행하도록 추가
    }
  };
    return(
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">회원 가입</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          이메일
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          이름
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700">
          성별
        </label>
        <input
          id="gender"
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      {/* 추가 입력 폼들도 유사한 구조로 작성 */}
      <button
        onClick={signUpHandler}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        <Link href={"/"}>제출</Link>
      </button>
    </div>
    )
}
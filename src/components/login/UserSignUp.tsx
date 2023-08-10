import Link from "next/link";
import router from "next/router";
import { useState } from "react";
import '../../app/globals.css'

export const UserSignUp:React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [ages, setAges] = useState<string>("20");
  const [birth, setBirth] = useState<string>('818');
  const [address, setAddress] = useState<string>("대구시");

  const signUpHandler = async () => {
    if (email === "") {
      setEmail("false");
    } else if (password === "") {
      setPassword("false");
    } else if (name === "") {
      setName("false");
    } else if (gender === "") {
      setGender("false");
    }  
        const response:ResponseType = await fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                gender: gender,
                age: ages,
                birthday: birth,
                address: address
            }),
        }).then((res) => res.json())
        if(response){
            router.push('/')
        } else{
            router.push('/auth/SignUp')
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
      <button
        onClick={signUpHandler}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        제출
      </button>
    </div>
        
    )
}
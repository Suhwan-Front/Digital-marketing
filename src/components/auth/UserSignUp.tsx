import React, { useState } from "react";
import "../../app/globals.css";
import { useRouter } from "next/router";
import { API } from "@/API";


type FormData = {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  gender: string;
  age: string;
  birthday: string;
  address: string;
  [key: string]: string;
};

type FormErrors = {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  gender: string;
  age: string;
  birthday: string;
  address: string;
  [key: string]: string;
};

const UserSignUp = () => {
    const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
  email: "",
  password: "",
  passwordConfirm: "",
  name: "",
  gender: "",
  age: "",
  birthday: "",
  address: "",
});

const [formErrors, setFormErrors] = useState<FormErrors>({
  email: "",
  password: "",
  passwordConfirm: "",
  name: "",
  gender: "",
  age: "",
  birthday: "",
  address: "",
});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> |
    React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePasswordCheck = () => {
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[\d])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{10,}$/;

    if (!passwordPattern.test(formData.password)) {
      setFormErrors({ ...formErrors, password: '비밀번호는 영어, 숫자, 특수문자가 포함된 10자 이상이어야 합니다.' });
      return false;
    }

    if (formData.password !== formData.passwordConfirm) {
      setFormErrors({ ...formErrors, passwordConfirm: '비밀번호가 일치하지 않습니다.' });
      return false;
    }

    setFormErrors({ ...formErrors, password: '', passwordConfirm: '' });
    return true;
  };

  const validateForm = () => {
    let areFieldsFilled = true;
    let errors = { ...formErrors };

    for (const key in formData) {
      if (formData[key] === '') {
        errors[key] = '필수로 채워야 합니다.';
        areFieldsFilled = false;
      } else {
        errors[key] = '';
      }
    }

    setFormErrors(errors);
    return areFieldsFilled;
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    console.log(formData)

  if (!validateForm()) {
    return;
  }
  
  if (!handlePasswordCheck()) {
    return;
  }

  try {
    const response = await fetch(`${API}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        gender: formData.gender,
        age: formData.age,
        birthday: formData.birthday,
        address: formData.address,
      }),
    });

    if (response.ok) {
            router.push("/auth/Login");
    } else {
      console.error("회원가입 실패");
    }
  } catch (error) {
    console.error("회원가입 중 에러 발생", error);
  }
};

  const renderError = (error: string) => {
    if (error) {
      return (
        <div style={{ color: "red", fontSize: "12px" }}>
          {error}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-24">
      <div className="w-full max-w-lg">
        <form onSubmit={handleSignUp} className="bg-white shadow-lg rounded-lg px-12 py-8 mb-4">
          <h2 className="text-3xl font-semibold mb-6">회원가입</h2>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              이메일
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="email"
              type="email"
              name="email"
              placeholder="이메일을 입력하세요"
              value={formData.email}
              onChange={handleChange}
            />
                  {renderError(formErrors.email)}

          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              비밀번호
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChange={handleChange}
            />
                  {renderError(formErrors.password)}

          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
              비밀번호 확인
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="passwordConfirm"
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호를 입력하세요"
              value={formData.passwordConfirm}
              onChange={handleChange}
            />
                  {renderError(formErrors.passwordConfirm)}

          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              이름
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="name"
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              value={formData.name}
              onChange={handleChange}
            />
                  {renderError(formErrors.name)}

          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="birthday">
              생년월일
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="birthday"
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
            />
                  {renderError(formErrors.age)}

          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
              나이
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="age"
              type="text"
              name="age"
              placeholder="주소를 입력하세요"
              value={formData.age}
              onChange={handleChange}
            />
                  {renderError(formErrors.age)}

          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">성별</label>
            <select
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">선택하세요</option>
              <option value="male">남자</option>
              <option value="female">여자</option>
            </select>
                  {renderError(formErrors.gender)}

          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="address">
              주소
            </label>
            <input
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              id="address"
              type="text"
              name="address"
              placeholder="주소를 입력하세요"
              value={formData.address}
              onChange={handleChange}
            />
                  {renderError(formErrors.address)}

          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full mt-4"
            type="submit"
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSignUp;

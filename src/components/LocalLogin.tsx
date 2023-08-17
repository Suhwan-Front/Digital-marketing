'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ImExit } from "react-icons/im";
import { IoLogInSharp, IoNewspaper } from "react-icons/io5";

const LocalLogin = () => {
  const [localID, setLocalID] = useState<string | null>();
  const [name, setName] = useState<string | null>();

  useEffect(() => {
    setLocalID(localStorage.getItem('LoginItem'));
    setName(localStorage.getItem("name"));

    console.log(localID);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('LoginItem');
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    setLocalID(null);
  };

  return (
    <>
      {localID === null ? (
        <div className='flex'>
        <Link href={'/auth/Login'}>
          <button className="flex items-center bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            <p className='pr-2'><IoLogInSharp color="#ffffff" /></p>로그인 
          </button>
        </Link>
        <Link href={'/auth/SignUp'}>
          <button className="flex items-center bg-gray-700 text-white active:bg-gray-900 font-bold uppercase text-sm px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            <p className='pr-2'><IoNewspaper color="#ffffff" /></p>회원가입
          </button>
        </Link>
        </div>
      ) : (
        <div className='flex items-center'>
        <p className='mx-5'>{name}님 환영합니다</p>
        <button onClick={handleLogout} className="flex items-center bg-red-500 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        <p className='pt-1 pr-2'><ImExit color="#ffffff" /></p> 로그아웃 
        </button>
        </div>
      )}
    </>
  );
};

export default LocalLogin;

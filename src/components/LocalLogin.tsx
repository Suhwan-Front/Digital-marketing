'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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
        <Link href={'/auth/Login'}>
          <button className="text-blue-500 hover:text-blue-700 text-lg font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none">
            로그인
          </button>
        </Link>
      ) : (
        <div className='flex items-center'>
        <p className='mx-5'>{name}님 환영합니다</p>
        <button
          onClick={handleLogout}
          className="text-blue-500 hover:text-blue-700 text-lg font-semibold transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none"
        >
          로그아웃
        </button>
        </div>
      )}
    </>
  );
};

export default LocalLogin;

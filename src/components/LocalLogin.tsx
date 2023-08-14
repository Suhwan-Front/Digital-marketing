'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const LocalLogin = () => {
  const [localID, setLocalID] = useState<string | null>();

  useEffect(() => {
    setLocalID(localStorage.getItem('LoginItem'));
    console.log(localID);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('LoginItem');
    setLocalID(null);
  };

  return (
    <>
      {localID === null ? (
        <Link href={'/auth/Login'}>
          <button className="text-blue-500 hover:text-blue-700 text-lg font-semibold focus:outline-none">
            로그인
          </button>
        </Link>
      ) : (
        <button
          onClick={handleLogout}
          className="text-blue-500 hover:text-blue-700 text-lg font-semibold focus:outline-none"
        >
          로그아웃
        </button>
      )}
    </>
  );
};

export default LocalLogin;

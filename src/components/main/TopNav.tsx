'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LocalLogin from '../LocalLogin';

export const TopNav: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isCurrentPage = (path: string) => currentPath === path;
  const activeButtonClass = (
    'text-blue-700 font-bold border-b-2 border-blue-700 pb-1'
  );

  return (
    <nav className="bg-white border-b border-gray-300 py-2 shadow">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-14">
          <div className="flex space-x-4">
            <Link href={'/'}>
              <button
                id="purchaser"
                className={`text-blue-500 hover:text-blue-700 text-lg font-semibold ${
                  isCurrentPage('/') && activeButtonClass
                }`}
              >
                구매자
              </button>
            </Link>
            <Link href={'/Seller'}>
              <button
                id="seller"
                className={`text-blue-500 hover:text-blue-700 text-lg font-semibold ${
                  isCurrentPage('/Seller') && activeButtonClass
                }`}
              >
                판매자
              </button>
            </Link>
          </div>
          <Link href={'/contents/Promotion'}>
            <button
              className={`text-black hover:text-gray-700 text-lg font-medium ${
                isCurrentPage('/contents/Promotion') && activeButtonClass
              }`}
            >
              홍보 게시판
            </button>
          </Link>
        </div>
        <LocalLogin />
      </div>
    </nav>
  );
};

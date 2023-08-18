'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import LocalLogin from '../LocalLogin'

export const TopNav: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const isCurrentPage = (path: string) => currentPath === path
  const activeButtonClass =
    'text-purple-800 font-bold border-b-2 border-purple-800 pb-1'

  return (
    <nav className="bg-white p-4 border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex space-x-14">
          <div className="flex space-x-4">
            <Link href={'/'}>
              <button
                id="purchaser"
                className={`text-purple-600 hover:text-purple-800 text-lg font-semibold ${
                  isCurrentPage('/') && activeButtonClass
                }`}
              >
                구매자
              </button>
            </Link>
            <Link href={'/seller'}>
              <button
                id="seller"
                className={`text-purple-600 hover:text-purple-800 text-lg font-semibold ${
                  isCurrentPage('/Seller') && activeButtonClass
                }`}
              >
                판매자
              </button>
            </Link>
          </div>
          <Link href={'/contents/promotion'}>
            <button
              className={`text-gray-600 hover:text-gray-800 text-lg font-medium ${
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
  )
}

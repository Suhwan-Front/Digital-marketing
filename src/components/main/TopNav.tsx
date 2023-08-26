'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import LocalLogin from '../LocalLogin'
import Image from 'next/image'
import logo from '../../../public/Logo/logo.png'

export const TopNav: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const isCurrentPage = (path: string) => currentPath === path

  const nowOut =
    'inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300'
  const nowIn =
    'inline-block p-2 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active'

  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-14">
          <Image className="h-8" src={logo} alt="Logo Image" width={30} />
          <div className="flex space-x-4">
            <Link href={'/'}>
              <button
                id="purchaser"
                className={`${isCurrentPage('/') ? nowIn : nowOut}`}
              >
                구매자
              </button>
            </Link>
            <Link href={'/seller'}>
              <button
                id="seller"
                className={`${isCurrentPage('/seller') ? nowIn : nowOut}`}
              >
                판매자
              </button>
            </Link>
          </div>
          <Link href={'/contents/promotion'}>
            <div className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-1 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="m-auto pl-1"
                viewBox="0 0 2048 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"></path>
              </svg>
              <span className="mx-4 text-md font-normal">홍보 게시판</span>
            </div>
          </Link>
        </div>
        <LocalLogin />
      </div>
    </nav>
  )
}

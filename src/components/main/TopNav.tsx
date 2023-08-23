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

  const nowOut = 'inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300'
  const nowIn = 'inline-block p-2 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active'

  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-14">
          <Image className='h-8' src={logo} alt='Logo Image' width={30} />
          <div className="flex space-x-4">
            <Link href={'/'}>
              <button
                id="purchaser"
                className={`${isCurrentPage('/') ? (nowIn) : (nowOut)}`}
              >
                구매자
              </button>
            </Link>
            <Link href={'/seller'}>
              <button
                id="seller"
                className={`${isCurrentPage('/seller') ? (nowIn) : (nowOut)}`}
              >
                판매자
              </button>
            </Link>
          </div>
          <Link href={'/contents/promotion'}>
          </Link>
        </div>
        <LocalLogin />
      </div>
    </nav>
  )
}

'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ImExit } from 'react-icons/im'
import { FaShoppingCart, FaBell } from "react-icons/fa"

const LocalLogin = () => {
  const [localID, setLocalID] = useState<string | null>()
  const [name, setName] = useState<string | null>()

  useEffect(() => {
    setLocalID(localStorage.getItem('LoginItem'))
    setName(localStorage.getItem('name'))

    console.log(localID)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('LoginItem')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    setLocalID(null)
  }

  return (
    <>
      {localID === null ? (
        <div className="flex">
          <button className='pr-6'>
          <FaShoppingCart size='20' />
          </button>
          <button className='pr-6'>
          <FaBell size='20' />
          </button>
          <div className='border-gray-300 border-l-2 pl-6' />
          <Link href={'/auth/Login'}>
            <button
              className="flex items-center text-gray-400 text-sm"
              type="button"
            >
              로그인
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex items-center">
          <p className="mx-5">{name}님 환영합니다</p>
          <button
            onClick={handleLogout}
            className="flex items-center bg-red-500 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <p className="pt-1 pr-2">
              <ImExit color="#ffffff" />
            </p>{' '}
            로그아웃
          </button>
        </div>
      )}
    </>
  )
}

export default LocalLogin

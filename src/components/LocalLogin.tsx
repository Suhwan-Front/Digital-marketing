'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ImExit } from 'react-icons/im'
import { FaShoppingCart, FaBell } from 'react-icons/fa'

const LocalLogin = () => {
  const [localID, setLocalID] = useState<string | null>()
  const [name, setName] = useState<string | null>()
  const [alert, setAlert] = useState<boolean>(false)

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

  const handleAlert = () => {
    setAlert(!alert)
  }

  const alertMakeFalse = () => {
    setAlert(false)
  }

  return (
    <>
      {localID === null ? (
        <div className="flex">
          <button
            className="pr-6 relative"
            onClick={handleAlert}
            onBlur={alertMakeFalse}
          >
            <FaShoppingCart size="20" />
          </button>
          {alert && (
            <div
              className="flex fixed z-50 animate-pulse bg-red-100 rounded-lg p-4 mb-4 mt-6 text-sm text-red-700 opacity-80"
              role="alert"
            >
              <svg
                className="w-8 h-8 inline mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <div>로그인 후 이용할 수 있습니다 </div>
            </div>
          )}
          <button className="pr-6">
            <FaBell size="20" />
          </button>
          <div className="border-gray-300 border-l-2 pl-6" />
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
          <button
            className="pr-6 relative"
            onClick={handleAlert}
            onBlur={alertMakeFalse}
          >
            <FaShoppingCart size="20" />
          </button>
          <button className="pr-6">
            <FaBell size="20" />
          </button>
          <div className="border-gray-300 border-l-2 pl-6" />
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

import { useState } from 'react'
import { PiWarningCircleBold } from 'react-icons/pi'
import { FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'

export const BasketForm = () => {
  const [warnAlert, setWarnAlert] = useState(false)
  const handleWarnClickHandler = () => {
    setWarnAlert(!warnAlert)
  }
  return (
    <div className="flex flex-col items-center w-full justify-center">
      <div className="flex mt-1 justify-center text-gray-500 bg-white w-2/3">
        <div className="flex items-center relative">
          장바구니
          <button className="pl-2" onClick={handleWarnClickHandler}>
            <PiWarningCircleBold />
          </button>
          {warnAlert && (
            <div className="absolute top-6 left-20">
              <div
                id="toast-default"
                className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              >
                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="flex ml-2 w-44 text-sm font-normal">
                  장바구니의 상품은 최대 30일까지 저장됩니다.
                  <br /> 상품 정보 변경시 주문이 불가능 할 수 있습니다.
                </div>
                <button
                  type="button"
                  className="ml-auto mb-16 -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                  data-collapse-toggle="toast-default"
                  aria-label="Close"
                  onClick={handleWarnClickHandler}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen mt-1 w-2/3 bg-white">
        <FaShoppingCart size="30" color="#D3D3D3" />
        <p>장바구니에 담긴 상품이 없습니다.</p>
        <Link href={'/'}>
          <button
            type="button"
            className="border border-gray-600 bg-gray-600 text-white rounded-md px-8 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
          >
            홈으로
          </button>
        </Link>
      </div>
    </div>
  )
}

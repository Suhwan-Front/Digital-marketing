import { TopNav } from '@/components/main/TopNav'
import React from 'react'
import '../app/globals.css'
import Link from 'next/link'
import { Footer } from '@/components/main/Footer'

const Seller: React.FC = () => {
  return (
    <>
      <TopNav />
      <div
        className="px-3 md:px-0 lg:px-0 xl:px-40 border-t border-b py-20 bg-opacity-10"
        style={{
          backgroundImage:
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border">
            <Link href="/contents/Sell">
              <div
                  className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                  <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200"><svg
                          xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" stroke-width="1.5">
                          <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg></span>
                  <p className="text-xl font-medium text-slate-700 mt-3">판매글 등록하러 가기</p>
                  <p className="mt-2 text-sm text-slate-500">직접 판매글을 등록하여 온라인 사용자들에게 제품을 판매해보세요!</p>
              </div>
            </Link>
            <div
                className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">내가 진행 중인 판매글</p>
                <p className="mt-2 text-sm text-slate-500">현재 진행 중인 판매글을 확인합니다.</p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200"><svg
                        xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg></span>
                <p className="text-xl font-medium text-slate-700 mt-3">간단한 사용 방법 익히기</p>
                <p className="mt-2 text-sm text-slate-500">사용 방법이 어렵다면 참고하세요!</p>
            </div>
        </div>
        <div className="w-full   bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
            <p className=" text-white"> <span className="text-4xl font-medium">판매자 등록이 필요한가요?</span> <br /> <span className="text-lg">판매자 등록을 통해 여러분도 판매자가 될 수 있습니다!</span></p>
            <button className="px-5 py-3  font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-yellow-400">온라인 통신 판매 등록</button>
        </div>
    </div>
      <div className="flex flex-row pl-36 my-12 ml-6 font-semibold text-lg">
        현재 진행중인 판매 목록
      </div>
      <hr
        style={{
          opacity: '0.1',
          borderColor: 'currentColor',
        }}
        className="border-t border-current mx-4 mb-4"
      />
      <div
        className="px-3 md:px-0 lg:px-0 xl:px-40 border-t border-b py-20 bg-opacity-10"
        style={{
          backgroundImage:
            "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')",
        }}
      >123</div>
      <Footer />
    </>
  )
}

export default Seller

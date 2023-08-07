import Link from 'next/link'
import LocalLogin from '../LocalLogin'

export const TopNav: React.FC = () => {
  return (
    <nav
      suppressHydrationWarning
      className="bg-white border-b border-gray-300 py-2"
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-4">
          <Link href={'/'}>
            <button
              id="purchaser"
              className="text-blue-500 hover:text-blue-700"
            >
              구매자
            </button>
          </Link>
          <Link href={'/seller'}>
            <button id="seller" className="text-blue-500 hover:text-blue-700">
              판매자
            </button>
          </Link>
        </div>
        <LocalLogin />
      </div>
    </nav>
  )
}

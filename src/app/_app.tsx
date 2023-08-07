import { AppProps } from 'next/app'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

declare global {
  interface Window {
    Kakao: any
  }
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

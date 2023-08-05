import { AppProps } from 'next/app'

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

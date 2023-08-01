import { kakaoInit } from '@/utils/kakaoInit';
import {AppProps} from 'next/app';
import Head from 'next/head';

declare global {
  interface Window {
    Kakao: any;
  }
}

const App:React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
    <Head>
    </Head>
    <Component {...pageProps} />
    </>
  )
}
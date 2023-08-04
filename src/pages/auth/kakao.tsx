/* eslint-disable react-hooks/rules-of-hooks */
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from 'react'

const kakao: NextPage = () => {
  const router = useRouter()
  const { code: authCode, error: kakaoServerError } = router.query

  const kakaoLoginHandler = useCallback(
    async (code: string | string[]) => {
      const response: ResponseType = await fetch('/auth/users/kakao-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          authCode: code,
        }),
      }).then((res) => res.json())
      //   if (response) {
      //     localStorage.setItem('access_token', response)
      //     router.push('/')
      //   } else {
      //     router.push('/auth/Login')
      //   }
    },
    [router],
  )

  useEffect(() => {
    localStorage.setItem('LoginItem', JSON.stringify(authCode))
    router.push('/')
    // if (authCode) {
    //   kakaoLoginHandler(authCode)
    // } else if (kakaoServerError) {
    //   router.push('/auth/Login')
    // }
  }, [kakaoLoginHandler, authCode, kakaoServerError, router])

  return <h2>로그인 중입니다...</h2>
}

export default kakao

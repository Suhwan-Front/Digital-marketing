import { NextPage } from "next";
import { useRouter } from "next/router";

const kakao: NextPage = () => {
    const router = useRouter();
    const { code: authCode, error: kakaoServerError} = router.query

    return <h2>로그인 중입니다...</h2>
}

export default kakao
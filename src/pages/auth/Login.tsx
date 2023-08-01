import { kakaoInit } from "@/utils/kakaoInit";

const Login = () => {
    const handleKakaoLogin = () => {
        kakaoInit()
    }
    return(
        <><button onClick={handleKakaoLogin}>123</button></>
    )
}

export default Login;
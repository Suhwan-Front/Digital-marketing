import { kakaoLogin } from "@/utils/kakaoLogin";

const Login = () => {
    const handleKakaoLogin = () => {
        kakaoLogin();
    }
    return(
        <><button onClick={handleKakaoLogin}>123</button></>
    )
}

export default Login;
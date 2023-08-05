import { kakaoInit } from "@/utils/kakaoInit";

const Login = () => {
    const handleKakaoLogin = () => {
        kakaoInit()
    }
    return(
        <>
        <div>아아디</div>
        <input />
        <div>비밀번호</div>
        <input />
        <button>로그인</button>
        <div>
            <p>아이디 찾기</p>
            <p>비밀번호 찾기</p>
            <p>회원가입</p>
        </div>
        <button onClick={handleKakaoLogin}>카카오 로그인</button>
        </>
    )
}

export default Login;
export const kakaoInit = async () => {
    if(typeof window !== 'undefined'){
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.async = true;
        document.head.appendChild(script)

        script.onload = () => {
            if(window.Kakao) {
                window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID)
                window.Kakao.Auth.authorize({
                    redirectUri: 'http://www.localhost:3000/',
                });
            }
        };
    }
}
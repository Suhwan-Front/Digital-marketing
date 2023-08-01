/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_KAKAO_CLIENT_ID:process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
    }
}

module.exports = nextConfig

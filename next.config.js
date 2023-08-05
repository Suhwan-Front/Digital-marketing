/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_KAKAO_CLIENT_ID:process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID
    }
}

const removeImports = require("next-remove-imports")();

module.exports = removeImports(nextConfig)

const removeImports = require("next-remove-imports")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_KAKAO_CLIENT_ID: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // fs 모듈이 브라우저에서 사용되지 않도록 empty 설정을 적용합니다.
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};

module.exports = removeImports(nextConfig);
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    REACT_APP_API: process.env.REACT_APP_API,
  },
};

module.exports = nextConfig;

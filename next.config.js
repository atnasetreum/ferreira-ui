/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "api.transportesferreira.com"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  basePath: process.env.NODE_ENV === 'production' ? '/Kana' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 
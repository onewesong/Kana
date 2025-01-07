/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  basePath: process.env.NODE_ENV === 'production' ? '/你的仓库名' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 
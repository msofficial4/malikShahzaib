/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Add this if your repo name is not your username
  basePath: process.env.NODE_ENV === 'production' ? '/malikShahzaib.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/malikShahzaib.github.io/' : '',
}

export default nextConfig

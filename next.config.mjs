const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? '/wedding-invitation' : '',
  assetPrefix: isProd ? 'https://lcyyyyyyyy.github.io/wedding-invitation' : undefined
}

export default nextConfig

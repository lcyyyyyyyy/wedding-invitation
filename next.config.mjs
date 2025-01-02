const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? '/wedding-invitation' : ''
}

export default nextConfig

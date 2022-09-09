/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org', 'static.posters.cz', 'images.everyeye.it']
  }
}

module.exports = nextConfig

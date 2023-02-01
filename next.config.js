const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'nl-NL'],
    defaultLocale: 'en-US',
  },
}

module.exports = nextConfig

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  
  exportPathMap: async function () {
    return {
      '/images/[folder]': { page: '/images/[folder]' },
      '/images/[folder]/[image]': { page: '/images/[folder]/[image]' }
    }

  },

  serverRuntimeConfig: {
    imageFolders: 'images'
  },
}

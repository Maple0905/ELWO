/** @type {import('next').NextConfig} */

const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  env: {
    ENV: process.env.ENV,
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.eu-north-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

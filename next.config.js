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
    API_URL: process.env.API_URL,
  },
}

module.exports = nextConfig

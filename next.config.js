/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    i18n,
    env: {
        NEXT_PUBLIC_HCAPTCHA_TOKEN: process.env.NEXT_PUBLIC_HCAPTCHA_TOKEN,
    }
}

module.exports = nextConfig

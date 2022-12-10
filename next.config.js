/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["scontent.fsvg2-1.fna.fbcdn.net", "plaform-lookaside.fbsbx.com"],
  },
  env: {
    PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
    PUSHER_APP_SECRET: process.env.PUSHER_APP_SECRET,
    PUSHER_APP_ID: process.env.PUSHER_APP_ID,
    REDIS_URL: process.env.REDIS_URL,
  },
};

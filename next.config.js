/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "localhost",
      process.env.VERCEL_URL,
      "platform-lookaside.fbsbx.com",
      "scontent.fsvg2-1.fna.fbcdn.net",
      "cdn.discordapp.com",
      
    ],
  },
  env: {
    PUSHER_APP_KEY: process.env.PUSHER_APP_KEY,
    PUSHER_APP_SECRET: process.env.PUSHER_APP_SECRET,
    PUSHER_APP_ID: process.env.PUSHER_APP_ID,
    REDIS_URL: process.env.REDIS_URL,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

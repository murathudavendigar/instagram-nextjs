/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "marka-logo.com",
      "i0.wp.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn-icons-png.flaticon.com",
      "logos-download.com",
      "i0.wp.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;

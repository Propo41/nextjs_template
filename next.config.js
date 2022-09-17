// next.config.js
// https://nextjs.org/docs/api-reference/next.config.js/introduction
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: [
      "source.unsplash.com",
      "loremflickr.com",
      "phototraces.b-cdn.net",
    ],
  },
};

module.exports = nextConfig;

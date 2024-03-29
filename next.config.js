const { withFrameworkConfig } = require('./framework/common/config');

/** @type {import('next').NextConfig} */
const nextConfig = withFrameworkConfig({
  reactStrictMode: true,
  framework: {
    name: 'shopify_local',
  },
  i18n: {
    locales: ['en-US', 'th'],
    defaultLocale: 'en-US',
  },
});

module.exports = nextConfig;

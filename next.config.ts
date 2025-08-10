import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  compress: isProduction,
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  experimental: {
    optimizePackageImports: ['radix-ui'],
    reactCompiler: true,
  },
} satisfies NextConfig;

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
  productionBrowserSourceMaps: false,
  experimental: {
    webpackMemoryOptimizations: true,
    optimizePackageImports: ['radix-ui'],
    reactCompiler: true,
    webpackBuildWorker: true,
    serverMinification: true,
    serverSourceMaps: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
} satisfies NextConfig;

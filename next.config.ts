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
  // Next.js seems to think it's fun to render metadata inside <body>.
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#streaming-metadata
  // https://github.com/vercel/next.js/issues/79313
  htmlLimitedBots: /.*/,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
} satisfies NextConfig;

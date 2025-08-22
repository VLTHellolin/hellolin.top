import type { NextConfig } from 'next';
import { execaSync as $ } from 'execa';

const isProduction = process.env.NODE_ENV === 'production';
const gitRepoBase = 'https://github.com/VLTHellolin/hellolin.top';
const gitCommitHash = $`git rev-parse HEAD`.stdout.trim();
const gitBranch = $`git rev-parse --abbrev-ref HEAD`.stdout.trim();
const getPkgVersion = (pkg: string) => JSON.parse($`pnpm list ${pkg} --json`.stdout.trim())[0].dependencies[pkg].version;

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
    webpackBuildWorker: true,
    webpackMemoryOptimizations: true,
    optimizePackageImports: ['radix-ui'],
    reactCompiler: true,
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
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin({
        GIT_BRANCH: gitBranch,
        GIT_COMMIT_HASH: gitCommitHash.slice(0, 7),
        GIT_COMMIT_URL: `${gitRepoBase}/commit/${gitCommitHash}`,
        NEXT_VERSION: getPkgVersion('next'),
      }),
    );
    return config;
  },
} satisfies NextConfig;

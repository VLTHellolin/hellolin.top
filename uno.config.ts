import { defineConfig, presetIcons, presetWind3, transformerVariantGroup } from 'unocss';
import { presetStyles } from './src/styles';

export default defineConfig({
  presets: [
    presetWind3({
      dark: {
        light: '[data-theme="light"]',
        dark: '[data-theme="dark"]',
      },
      preflight: 'on-demand',
    }),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
      },
    }),
    presetStyles(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  content: {
    pipeline: {
      include: [
        /\.([jt]sx?|mdx?|html|css)($|\?)/,
      ],
    },
    filesystem: [
      '**/*.{html,md,mdx,js,ts,jsx,tsx,css}',
    ],
  },
});

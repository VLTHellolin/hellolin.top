import { defineConfig, presetAttributify, presetIcons, presetWind4, transformerAttributifyJsx } from 'unocss';
import { presetRadix } from 'unocss-preset-radix';

export default defineConfig({
  presets: [
    presetWind4({
      dark: 'class',
      preflights: {
        reset: true,
      },
    }),
    presetRadix({
      palette: ['red', 'violet', 'iris', 'blue', 'cyan', 'teal', 'green', 'orange', 'yellow'],
      prefix: '--radix-',
      darkSelector: '.dark',
      lightSelector: ':root, .light',
    }) as any,
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        lucide: () => import('@iconify-json/lucide/icons.json').then(i => i.default),
      },
    }),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
  content: {
    filesystem: [
      '**/*.{html,js,ts,jsx,tsx}',
    ],
  },
  theme: {

  },
});

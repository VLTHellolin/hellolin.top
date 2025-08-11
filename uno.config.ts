import { defineConfig, presetAttributify, presetIcons, presetWind4, transformerAttributifyJsx } from 'unocss';

const radixVariants = {
  open: '[data-state="open"]',
  closed: '[data-state="closed"]',
  horizontal: '[data-orientation="horizontal"]',
  vertical: '[data-orientation="vertical"]',
  enabled: ':not([data-disabled])',
  disabled: '[data-disabled]',
};

const colors = [
  // Typography
  'bg',
  'fg',
  // Semantic
  'primary-bg',
  'primary-fg',
  'primary-border',
  'secondary-bg',
  'secondary-fg',
  'secondary-border',
  'muted-bg',
  'muted-fg',
  'muted-border',
].reduce((acc, color) => {
  acc[color] = `var(--${color})`;
  return acc;
}, {} as Record<string, string>);

export default defineConfig({
  presets: [
    presetWind4({
      dark: {
        light: '[data-theme="light"]',
        dark: '[data-theme="dark"]',
      },
      preflights: {
        reset: true,
      },
    }),
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
      '**/*.{html,js,ts,jsx,tsx,css}',
    ],
  },
  theme: {
    colors,
  },
  variants: [
    matcher => {
      const matcherVariant = matcher.split(':')[0];
      if (matcherVariant in radixVariants) {
        return {
          matcher: matcher.slice(matcherVariant.length + 1),
          selector: s => `${s}${radixVariants[matcherVariant as keyof typeof radixVariants]}`,
        };
      }
      return matcher;
    },
  ],
});

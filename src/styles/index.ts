import type { Preset } from 'unocss';

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
  'border',
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
  acc[color] = `rgb(var(--${color}) / <alpha-value>)`;
  return acc;
}, {} as Record<string, string>);

const fontFamily = ['sans', 'serif', 'mono'].reduce((acc, font) => {
  acc[font] = `var(--font-${font})`;
  return acc;
}, {} as Record<string, string>);

export const presetStyles = (): Preset => ({
  name: 'styles',
  theme: {
    colors,
    fontFamily,
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

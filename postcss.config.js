export default {
  plugins: {
    'postcss-nesting': {},
    '@unocss/postcss': {
      content: [
        './src/**/*.{html,js,ts,jsx,tsx,css}',
        './content/**/*.{md,mdx}',
      ],
    },
  },
};

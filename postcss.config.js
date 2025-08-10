import unocss from '@unocss/postcss';
import cssnano from 'cssnano';
import nesting from 'postcss-nesting';

export default {
  plugins: [
    nesting(),
    unocss({
      content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    }),
    cssnano(),
  ],
};

import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import rehypeExpressiveCode, { type RehypeExpressiveCodeOptions } from 'rehype-expressive-code';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode, { type Options as RehypePrettyCodeOptions } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkEmoji from 'remark-emoji';
import remarkMath from 'remark-math';
import { defineConfig } from 'velite';

import { collections } from './content.config';

export default defineConfig({
  root: 'content',
  collections,
  mdx: {
    gfm: true,
    remarkPlugins: [
      remarkMath, remarkEmoji,
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeKatex,
        { strict: true },
      ],
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener', 'noreferrer'],
        },
      ],
      [
        rehypeExpressiveCode,
        {
          themes: ['vitesse-light', 'vitesse-dark'],
          plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
          useDarkModeMediaQuery: false,
          themeCssSelector: theme => `[data-theme="${theme.name.split('-')[1]}"]`,
        } satisfies RehypeExpressiveCodeOptions,
      ],
      [
        rehypePrettyCode,
        {
          theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        } satisfies RehypePrettyCodeOptions,
      ],
    ],
  },
});

import type { StyleOverrides } from 'rehype-expressive-code';

export const styleOverrides: StyleOverrides = {
  uiFontFamily: 'var(--font-sans)',
  codeFontFamily: 'var(--font-mono)',

  borderColor: 'rgb(var(--muted-border))',
  // codeBackground: 'rgb(var(--muted-bg))',
  lineNumbers: {
    foreground: 'rgb(var(--muted-fg))',
  },

  frames: {
    frameBoxShadowCssValue: 'none',

    editorTabBorderRadius: '0',
    editorActiveTabForeground: 'rgb(var(--muted-fg))',
    editorActiveTabIndicatorBottomColor: 'transparent',
    editorActiveTabIndicatorTopColor: 'transparent',
    editorTabBarBackground: 'transparent',
    editorTabBarBorderBottomColor: 'transparent',

    terminalBackground: 'rgb(var(--muted-bg))',
    terminalTitlebarForeground: 'rgb(var(--muted-fg))',
    terminalTitlebarBackground: 'transparent',
    terminalTitlebarBorderBottomColor: 'transparent',
  },
};

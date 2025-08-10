import type { Metadata } from 'next';
import type React from 'react';
import { ThemeProvider } from 'next-themes';

import '@/styles/global.css';
import '@/styles/uno.css';
import '@/styles/prose.css';

export const metadata: Metadata = {

};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='sitemap' href='/sitemap.xml' />
        <meta name='theme-color' content='#000000' />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

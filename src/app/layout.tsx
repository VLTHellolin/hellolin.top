import type { Metadata } from 'next';
import type React from 'react';
import { ThemeProvider } from 'next-themes';

import 'katex/dist/katex.min.css';
import '@unocss/reset/tailwind.css';
import '@/styles/index.css';

export const metadata: Metadata = {
  title: {
    default: 'hellolin.top',
    template: '%s | hellolin.top',
  },
  creator: 'VLTHellolin',
  description: 'Front-end Developer, Competitive Programmer, Student of 15.',
  alternates: {
    canonical: 'https://hellolin.top',
    types: {
      'application/rss+xml': 'https://hellolin.top/rss.xml',
    },
  },
  openGraph: {
    title: 'hellolin.top',
    description: 'Front-end Developer, Competitive Programmer, Student of 15.',
    url: 'https://hellolin.top',
    siteName: 'hellolin.top',
    images: [
      {
        url: 'https://hellolin.top/og.png',
        width: 1200,
        height: 630,
      },
    ],
  },
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
        <meta name='theme-color' media='(prefers-color-scheme: light)' content='#ffffff' />
        <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#121212' />
      </head>
      <body className='bg-bg text-fg font-sans'>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

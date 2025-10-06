import type { Metadata } from 'next';
import type React from 'react';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import 'katex/dist/katex.min.css';
import '@unocss/reset/tailwind.css';
import '@/styles/index.css';

export const metadata: Metadata = {
  generator: `Next.js v${process.env.NEXT_VERSION}`,
  title: {
    default: 'hellolin.top',
    template: '%s - hellolin.top',
  },
  applicationName: 'hellolin.top',
  creator: 'VLTHellolin',
  description: 'A full-stack developer, competitive programmer and high-school student, passionate about open-source development.',
  alternates: {
    canonical: 'https://hellolin.top',
    types: {
      'application/rss+xml': 'https://hellolin.top/rss.xml',
    },
  },
  openGraph: {
    title: 'hellolin.top',
    description: 'A full-stack developer, competitive programmer and high-school student, passionate about open-source development.',
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
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#default-fields
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
        <link rel='sitemap' href='/sitemap.xml' />
        <meta name='format-detection' content='telephone=no,email=no,date=no,address=no' />
        <meta name='theme-color' media='(prefers-color-scheme: light)' content='#ffffff' />
        <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#121212' />
      </head>
      <body>
        <ThemeProvider>
          <div className='h-fit min-h-screen flex flex-col gap-6'>
            <Header />
            <main className='mx-auto max-w-4xl flex grow flex-col gap-8 px-2'>
              {children}
              <Footer />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

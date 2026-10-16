import { themeScript } from '@/lib/theme';

import '@/styles/index.css';

export default async function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
        <meta name='format-detection' content='telephone=no,email=no,date=no,address=no' />
        <meta name='theme-color' media='(prefers-color-scheme: light)' content='#fcfcfc' />
        <meta name='theme-color' media='(prefers-color-scheme: dark)' content='#121212' />
        <link rel='sitemap' href='/sitemap.xml' />
        <link rel='canonical' href='https://silvecor.dev' />
        <link rel='alternate' type='application/rss+xml' title='silvecor.dev' href='/rss.xml' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Geist+Mono:ital,wght@0,100..900;1,100..900&family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Libertinus+Math&family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+SC:wght@100..900&display=swap' />
        {/* eslint-disable-next-line react/dom-no-dangerously-set-innerhtml */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

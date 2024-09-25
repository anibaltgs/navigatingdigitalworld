import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/website/theme-provider';
import { GeistMono } from 'geist/font/mono';
import { ViewTransitions } from 'next-view-transitions';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'tgs_navigating_digital_worlds',
  description:
    'This is a comprensive extract of the Digital Worlds talk while adding more data and tools for parents.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang='en' suppressHydrationWarning>
      {!isDev ? (
        <Script
          async
          src='https://analytics.umami.is/script.js'
          data-website-id='17e8fc96-321d-43a6-94e7-d571c4c66a04'
        />
      ) : null}
      <body
        className={`${inter.className} ${GeistMono.variable} bg-white dark:bg-zinc-950`}
      >
        <ViewTransitions>
          <ThemeProvider attribute='class'>
            <div className='isolate min-h-screen'>{children}</div>
          </ThemeProvider>
        </ViewTransitions>
      </body>
    </html>
  );
}

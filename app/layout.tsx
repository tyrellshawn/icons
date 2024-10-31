import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/providers/theme';
import { Header } from '@/components/header';
import { CommandMenu } from '@/components/comman-menu';
import { Footer } from '@/components/footer';

import ogImage from './og.png';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://icons.pqoqubbw.dev'),
  openGraph: {
    title: 'pqoqubbw/icons',
    description: 'beautifully crafted animated icons',
    siteName: 'pqoqubbw/icons',
    type: 'website',
    locale: 'en_US',
    url: 'https://icons.pqoqubbw.dev',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  applicationName: 'pqoqubbw/icons',
  appleWebApp: {
    title: 'pqoqubbw/icons',
    statusBarStyle: 'default',
    capable: true,
  },
  title: {
    default: 'pqoqubbw/icons',
    template: `%s - pqoqubbw/icons`,
  },
  description: 'beautifully crafted animated icons',
  twitter: {
    card: 'summary_large_image',
    title: 'pqoqubbw/icons',
    description: 'beautifully crafted animated icons',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
    shortcut: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-background dark:bg-[#151515]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <CommandMenu />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

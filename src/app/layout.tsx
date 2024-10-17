import MainLayout from '@/components/layout/MainLayout';
import theme from '@/theme';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';

import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';

import type {Metadata} from 'next';

import {headers} from 'next/headers';

import {Be_Vietnam_Pro} from 'next/font/google';
import './globals.css';

// import icon from './favicon.ico';

const beVNPro = Be_Vietnam_Pro({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Ark Studio',
  description: 'The Ark Studio - IT Solutions for your services',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const isMobile =
    headersList.get('cookie')?.includes('isMobile=true') ?? false;
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="icon" type="image/png" href="favicon.ico" />
      </head>

      <body className={beVNPro.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayout isMobile={isMobile}>{children}</MainLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextAuthSessionProvider from '@/components/Providers/NextAuthSessionProvider';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Link in bio tool: All your links in one place | qisqa.uz',
  description: 'Link to everything you create, share and sell online. All from the one bio link.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthSessionProvider>
      <html lang="uz">
        <body
          className={`${inter.className} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
        >
          {children}
        </body>
      </html>
    </NextAuthSessionProvider>
  );
}

import React from 'react';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Susthayi Krishi Foundation',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex similique nulla pariatur voluptatem repellat autem ab commodi! Expedita corporis, fugit inventore minima molestias maxime unde magnam quaerat at exercitationem voluptates.",
  icons: {
    icon: '/SKF-Logo.ico',
    shortcut: '/SKF-Logo.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/TIDI logo.ico" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster /> {/* Add the Toaster component here */}
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { ApolloWrapper } from '@/apollo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Rick and Morty',
  description:
    'The Rick and Morty APP is developed using Next.js, TypeScript, GraphQL, Apollo, and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import { Inter as FontSans } from 'next/font/google';
import '@vidstack/react/player/styles/base.css';
import '@/styles/globals.css';
import PrelineScript from '@/components/preline-script';

const sans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Sinaliza-me',
  description:
    'Iniciativa sem fins lucrativos para impulsionar o ensino da Língua Brasileira de Sinais por meio da tecnologia',
  applicationName: 'Sinaliza-me',
  keywords: [
    'sinaliza-me',
    'sinal',
    'sinaliza',
    'libras',
    'sinais libras',
    'língua brasileira de sinais',
    'língua de sinais',
    'sinalário',
    'dicionário de sinais',
  ],
};

export const viewport: Viewport = {
  themeColor: 'blue',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden overflow-y-scroll bg-neutral-900 text-neutral-100">
        <main className="container">{children}</main>
      </body>
      <PrelineScript />
    </html>
  );
}

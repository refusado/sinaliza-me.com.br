import { Inter as FontSans } from 'next/font/google';
import '@vidstack/react/player/styles/base.css';
import './globals.css';

import type { Metadata } from 'next';
import PrelineScript from './components/preline-script';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${sans.variable}`}>
      <body className="min-h-screen overflow-x-hidden overflow-y-scroll">
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}

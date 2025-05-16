import { InvalidTermMessage } from '@/components/invalid-term-message';
import Link from 'next/link';
import { Suspense } from 'react';

export default function TermoInvalidoPage() {
  return (
    <div>
      <h1>Erro ao exibir termo</h1>
      <Link href="/">Voltar para o início</Link>
      <hr />
      <Suspense fallback={<p>Carregando...</p>}>
        <InvalidTermMessage />
      </Suspense>
      <p>
        Para sugerir um novo termo, entre em contato enviando um e-mail para{' '}
        <b>sinaliza.me@gmail.com</b>
      </p>
    </div>
  );
}

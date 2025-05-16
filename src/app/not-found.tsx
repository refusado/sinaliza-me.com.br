import { RedirectIfInvalidTerm } from '@/components/redirect-if-invalid-term';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <RedirectIfInvalidTerm />
      <h1>Página não encontrada</h1>
      <Link href="/">Voltar para o início</Link>
      <hr />
      <p>Desculpe, a página que você está procurando não existe.</p>
    </div>
  );
}

import { getTermsLocal } from '@/lib/terms';
import Link from 'next/link';

export async function TermsList() {
  const terms = await getTermsLocal();

  return (
    <ul>
      {terms.map((term, i) => (
        <li key={i}>
          <Link href={`/termo/${term.slug}`} className="block">
            {term.content}
          </Link>
        </li>
      ))}
    </ul>
  );
}

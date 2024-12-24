import { getTermsLocal } from '@/lib/terms';

export async function TermsList() {
  const terms = await getTermsLocal();

  return (
    <ul className="container">
      {terms.map((term, i) => (
        <li key={i}>{term.content}</li>
      ))}
    </ul>
  );
}

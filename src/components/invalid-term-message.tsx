'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export function InvalidTermMessage() {
  const searchParams = useSearchParams();
  const term = searchParams.get('termo');

  if (!term) return null;

  return (
    <p>
      Se o termo "
      <strong>
        <Link href={`termo/${term}`}>{term}</Link>
      </strong>
      " não existe, você pode sugerir a adição dele ao nosso site.
    </p>
  );
}

'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export function RedirectIfInvalidTerm() {
  useEffect(() => {
    const path = window.location.pathname;
    const match = path.match(/^\/termo\/([^/]+)$/);

    if (match) {
      const termo = match[1];
      redirect(`/termo-invalido?termo=${encodeURIComponent(termo)}`);
    }
  }, []);

  return null;
}

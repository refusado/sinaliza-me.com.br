import { getTermsLocal, Term } from '@/lib/terms';

export async function getRecommendations(term: Term): Promise<Term[]> {
  const terms = await getTermsLocal();

  const sameStart: Term[] = terms.filter(({ slug }) => {
    if (slug == term.slug) return false;

    return slug.startsWith(term.slug.split('-')[0]);
  });

  // TODO: get terms with same tag
  const sameTag: Term[] = [];

  // TODO: get random terms
  const randomTerms: Term[] = terms.slice(0, 8);

  return [...sameStart, ...sameTag, ...randomTerms].slice(0, 8);
}

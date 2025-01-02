import { getTermsLocal, Term } from '@/lib/terms';

const RECOMMENDATIONSS_SIZE: number = 12;

export async function getRecommendations(term: Term): Promise<Term[]> {
  const terms = await getTermsLocal();

  const resultIds: string[] = [];

  const sameStart: Term[] = terms.filter(({ slug }) => {
    if (slug == term.slug) return false;

    return slug.startsWith(term.slug.split('-')[0]);
  });

  sameStart.forEach(({ id }) => resultIds.push(id));

  const commonTags = terms
    .filter(({ id }) => id !== term.id && !resultIds.includes(id))
    .filter(({ tags }) => tags.length > 0)
    .map((currTerm) => ({
      term: currTerm,
      relevance: currTerm.tags.filter((tag) => term.tags.includes(tag)).length,
    }))
    .filter(({ relevance }) => relevance > 0)
    .sort((a, b) => b.relevance - a.relevance)
    .map(({ term }) => term);

  const result = [...sameStart, ...commonTags];
  if (result.length >= RECOMMENDATIONSS_SIZE) {
    return result
      .filter(({ id }) => id !== term.id)
      .slice(0, RECOMMENDATIONSS_SIZE);
  }

  commonTags.forEach(({ id }) => resultIds.push(id));

  // TODO: make it actually return random terms
  const randomTerms: Term[] = terms.filter(({ id }) => !resultIds.includes(id));

  const resultWithRandomTerms = [...result, ...randomTerms];

  return resultWithRandomTerms
    .filter(({ id }) => id !== term.id)
    .slice(0, RECOMMENDATIONSS_SIZE);
}

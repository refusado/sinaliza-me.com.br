import { terms } from '@/data/terms';

export type Term = {
  id: string;
  created_at: string;
  modified_at: string;
  slug: string;
  content: string;
  details?: TermDetails;
  video_id: string;
  starts_at: number;
  ends_at: number;
};

export type TermDetails = {
  description?: string;
  use_examples?: string[];
};

export async function getTermsLocal(): Promise<Term[]> {
  // data processing
  return terms;
}

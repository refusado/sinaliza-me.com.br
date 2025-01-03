import { terms } from '@/data/terms';
import { Tag } from './tags';

export type Term = {
  id: string;
  created_at: string;
  modified_at: string;
  slug: string;
  content: string;
  details?: {
    description?: string;
    use_examples?: string[];
  };
  video_id: string;
  starts_at: number;
  ends_at: number;
  tags: Tag[];
};

export async function getTermsLocal(): Promise<Term[]> {
  // data processing
  return terms;
}

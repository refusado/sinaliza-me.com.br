import { getTermsLocal } from '@/lib/terms';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { TermInfo } from '../../../components/term-info';
import { VideoPlayer } from '@/components/video-player';

export default async function TermPage({ params }: { params: Promise<Param> }) {
  const terms = await getTermsLocal();

  const pathSlug = (await params).slug;
  const foundTerm = terms.find(({ slug }) => slug === pathSlug);

  if (!foundTerm) notFound();

  const { id, slug, content } = foundTerm;

  return (
    <section>
      <h1 title={`${slug} (${id})`}>
        Aprenda a dizer "<strong>{content}</strong>" em Libras
      </h1>
      <Link href="/">Voltar para o início</Link>
      <hr />
      <VideoPlayer term={foundTerm} />
      <TermInfo term={foundTerm} />
    </section>
  );
}

type Param = { slug: string };

export async function generateStaticParams(): Promise<Param[]> {
  const terms = await getTermsLocal();

  return terms.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

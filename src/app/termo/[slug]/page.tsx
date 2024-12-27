import { getTermsLocal, TermDetails } from '@/lib/terms';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Param = { slug: string };

export async function generateStaticParams(): Promise<Param[]> {
  const terms = await getTermsLocal();

  return terms.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export default async function TermPage({ params }: { params: Promise<Param> }) {
  const terms = await getTermsLocal();

  const pathSlug = (await params).slug;
  const foundTerm = terms.find(({ slug }) => slug === pathSlug);

  if (!foundTerm) notFound();

  const {
    id,
    created_at,
    modified_at,
    slug,
    content,
    video_id,
    ends_at,
    starts_at,
    details,
  } = foundTerm;

  return (
    <section>
      <h1 title={`${slug} (${id})`}>
        Aprenda a dizer "<strong>{content}</strong>" em Libras
      </h1>
      <Link href="/">Voltar para o início</Link>
      <hr />
      <p>Criado: {created_at}</p>
      <p>Última modificação: {modified_at}</p>
      <p>
        Video fonte:{' '}
        <a
          href={`https://youtu.be/${video_id}?t=${starts_at}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          https://youtu.be/{video_id}
        </a>
      </p>
      <p>
        Tempo de duração:{' '}
        <span title={`${formatTime(starts_at)}s - ${formatTime(ends_at)}s`}>
          {formatTime(ends_at - starts_at)}s
        </span>
      </p>
      <Details details={details} />
      <SimilarTerms slug={slug} />
    </section>
  );
}

async function SimilarTerms({ slug: searchSlug }: { slug: string }) {
  const terms = await getTermsLocal();

  const similarTerms = terms.filter(
    ({ slug }) =>
      slug.startsWith(searchSlug.split('-')[0]) && slug !== searchSlug,
  );

  return (
    <>
      {similarTerms.length < 1 ? null : (
        <>
          <h2>Outros termos: </h2>
          <ul>
            {similarTerms.map(({ slug, content }) => (
              <li key={slug}>
                <Link href={`/termo/${slug}`}>{content}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

function Details({ details }: { details?: TermDetails }) {
  return (
    <>
      {details ? (
        <p>Detalhes: {JSON.stringify(details)}</p>
      ) : (
        <p>Detalhes: sem detalhes</p>
      )}
    </>
  );
}

function formatTime(number: number): string {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
}

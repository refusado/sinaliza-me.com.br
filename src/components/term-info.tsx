import { Term } from '@/lib/terms';
import { formatSecs } from '@/utils/format-time';
import { getRecommendations } from '@/utils/terms-recommendations';
import Link from 'next/link';

export function TermInfo({ term }: { term: Term }) {
  const { created_at, modified_at, video_id, ends_at, starts_at, details } =
    term;

  return (
    <>
      <p>Criado: {created_at}</p>
      <p>Última modificação: {modified_at}</p>
      <p>
        Video fonte:{' '}
        <a href={`https://youtu.be/${video_id}?t=${starts_at}`} target="_blank">
          https://youtu.be/{video_id}
        </a>
      </p>
      <p>Tempo de duração: {formatSecs(ends_at - starts_at)}s</p>
      <Details />
      <Recommendations />
    </>
  );

  function Details() {
    return (
      <>
        {!details ? (
          <p>
            Detalhes: <span className="italic opacity-60">sem detalhes</span>
          </p>
        ) : (
          <p>Detalhes: {JSON.stringify(details, null, 2)}</p>
        )}
      </>
    );
  }

  async function Recommendations() {
    const recommendations = await getRecommendations(term);

    return (
      <>
        {recommendations.length < 1 ? null : (
          <>
            <h2>Outros termos: </h2>
            <ul>
              {recommendations.map(({ slug, content }) => (
                <li key={slug}>
                  <Link className="block" href={`/termo/${slug}`}>
                    {content}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    );
  }
}

import Link from 'next/link';

type Props = {
  articleTitle: string;
  updatedAt: string;
};

export function ArticleHeader({ articleTitle, updatedAt }: Props) {
  return (
    <header>
      <h1>{articleTitle}</h1>
      <Link href="/">Voltar para o início</Link>
      <p>
        Última atualização em <b>{updatedAt}</b>
      </p>
      <p>
        Entre em contato enviando um e-mail para <b>sinaliza.me@gmail.com</b>
      </p>
    </header>
  );
}

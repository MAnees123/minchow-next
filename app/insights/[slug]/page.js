import { notFound } from 'next/navigation';
import { ARTICLES, getArticle } from '../articles';
import posts from '../posts.json';
import ArticleClient from '../ArticleClient';

export function generateStaticParams() {
  return ARTICLES.map((p) => ({ slug: p.s }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getArticle(slug);
  if (!post) return {};
  const url = `https://minchowcoders.com/insights/${post.s}/`;
  return {
    title: `${post.t} | Minchow Coders`,
    description: post.e.replace(/…$/, '…'),
    alternates: { canonical: url },
    openGraph: {
      title: post.t,
      description: post.e,
      url,
      type: 'article',
      images: post.img ? [post.img] : undefined,
    },
  };
}

export default async function InsightPostPage({ params }) {
  const { slug } = await params;
  const post = getArticle(slug);
  if (!post) notFound();

  const related = ARTICLES.filter((x) => x.s !== post.s).slice(0, 3);
  return <ArticleClient post={post} html={posts[slug]?.html ?? ''} related={related} />;
}

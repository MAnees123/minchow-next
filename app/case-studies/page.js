import CaseStudiesClient from './CaseStudiesClient';

export const metadata = {
  title: 'Case Studies | Minchow Coders',
  description:
    'See how Minchow Coders blends custom web builds, AI workflows, search strategies and high-performance ads to help businesses scale.',
  alternates: {
    canonical: 'https://minchowcoders.com/case-studies/',
  },
  openGraph: {
    title: 'Case Studies | Minchow Coders',
    description:
      'Real projects, real results: web development, AI automation, organic and paid marketing.',
    url: 'https://minchowcoders.com/case-studies/',
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}

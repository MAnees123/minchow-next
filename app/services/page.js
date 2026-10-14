import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'Services | Minchow Coders',
  description:
    'Custom & WordPress web development, AI agents and automation, organic marketing, UGC-style video ads and paid marketing, all under one roof at Minchow Coders.',
  alternates: {
    canonical: 'https://minchowcoders.com/services/',
  },
  openGraph: {
    title: 'Services | Minchow Coders',
    description:
      'Web development, AI automation, organic and paid marketing, and UGC-style video ads built to grow your business.',
    url: 'https://minchowcoders.com/services/',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}

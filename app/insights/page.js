import InsightsClient from './InsightsClient';

export const metadata = {
  title: 'Insights | Minchow Coders',
  description:
    'Explore expert tips and insights on digital marketing, business growth, AI automation, and tech trends from Minchow Coders.',
  alternates: {
    canonical: 'https://minchowcoders.com/insights/',
  },
  openGraph: {
    title: 'Insights | Minchow Coders',
    description:
      'Explore expert tips and insights on digital marketing, business growth, AI automation, and tech trends.',
    url: 'https://minchowcoders.com/insights/',
  },
};

export default function InsightsPage() {
  return <InsightsClient />;
}

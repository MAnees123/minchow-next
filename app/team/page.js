import TeamClient from './TeamClient';
import { getTeam } from '@/lib/cms';

export const metadata = {
  title: 'Our Team | Minchow Coders',
  description:
    'Meet the engineers, strategists and project leaders behind Minchow Coders, the team that builds, markets and automates your business.',
  alternates: {
    canonical: 'https://minchowcoders.com/team/',
  },
  openGraph: {
    title: 'Our Team | Minchow Coders',
    description: 'Meet the people behind your next successful launch.',
    url: 'https://minchowcoders.com/team/',
  },
};

export default async function TeamPage() {
  const members = await getTeam();
  return <TeamClient members={members} />;
}

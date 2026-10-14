import { notFound } from 'next/navigation';
import { SERVICES, getService } from '../data';
import ServiceDetailClient from '../ServiceDetailClient';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const url = `https://minchowcoders.com/services/${service.slug}/`;
  return {
    title: `${service.title} | Minchow Coders`,
    description: service.short,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | Minchow Coders`,
      description: service.short,
      url,
      images: [service.img],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const others = SERVICES.filter((s) => s.slug !== service.slug);
  return <ServiceDetailClient service={service} others={others} />;
}

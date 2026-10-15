import HomeShell from '@/components/HomeShell';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import TechTicker from '@/components/TechTicker';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Work from '@/components/Work';
import Team from '@/components/Team';
import WhyUs from '@/components/WhyUs';
import EndToEnd from '@/components/EndToEnd';
import Reviews from '@/components/Reviews';
import Faq from '@/components/Faq';
import LeadBanner from '@/components/LeadBanner';

export default function Home() {
  return (
    <HomeShell>
      <Hero />
      <Stats />
      <TechTicker />
      <Services />
      <Process />
      <Work />
      <Team />
      <WhyUs />
      <EndToEnd />
      <Reviews />
      <Faq />
      <LeadBanner />
    </HomeShell>
  );
}

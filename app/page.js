'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import TechTicker from '@/components/TechTicker';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Work from '@/components/Work';
import Team from '@/components/Team';
import WhyUs from '@/components/WhyUs';
import Reviews from '@/components/Reviews';
import Faq from '@/components/Faq';
import LeadBanner from '@/components/LeadBanner';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        (e.key === 'k' && (e.ctrlKey || e.metaKey)) ||
        (e.key === '/' && !/input|textarea|select/i.test(document.activeElement?.tagName || ''))
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      <main>
        <Hero />
        <Stats />
        <TechTicker />
        <Services />
        <Process />
        <Work />
        <Team />
        <WhyUs />
        <Reviews />
        <Faq />
        <LeadBanner />
      </main>
      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

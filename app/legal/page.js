'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

const LEGAL_PAGES = [
  {
    title: 'Privacy Policy',
    href: '/legal/privacy-policy',
    desc: 'How we collect, use, and protect your personal data. GDPR & CCPA compliant.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Terms of Service',
    href: '/legal/terms-of-service',
    desc: 'Service scope, payment milestones, client responsibilities, and project policies.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'Refund & Cancellation Policy',
    href: '/legal/refund-policy',
    desc: 'Milestone refund rules, cancellation terms, and retainer billing policies.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: 'Revision & Scope Change Policy',
    href: '/legal/revision-policy',
    desc: 'Free revision rounds, timeframes, and scope creep billing procedures.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-4.95" />
      </svg>
    ),
  },
  {
    title: 'Service Level Agreement',
    href: '/legal/sla',
    desc: 'Response times, support tiers, third-party outage liability, and tool costs.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Intellectual Property Rights',
    href: '/legal/ip-rights',
    desc: 'Ownership transfer, non-exclusive licensing, resale rights, and portfolio display.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
];

export default function LegalPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <header className="hero legal-hero" id="top">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="wrap">
          <div className="legal-badge">Legal</div>
          <h1>Legal &amp; Policies</h1>
          <div className="bar"></div>
          <p className="legal-meta">
            <span>Minchow Coders (minchowcoders.com)</span>
            <span className="legal-dot">·</span>
            <span>Effective Date: 10 October 2026</span>
          </p>
        </div>
      </header>

      <main className="wrap legal-wrap">
        <p className="legal-intro rv in">
          All Minchow Coders agreements, policies, and compliance documents are listed below.
          Click any document to read the full policy.
        </p>

        <div className="legal-grid">
          {LEGAL_PAGES.map((page) => (
            <Link key={page.href} href={page.href} className="legal-card rv in">
              <div className="legal-card-icon">{page.icon}</div>
              <h2>{page.title}</h2>
              <p>{page.desc}</p>
              <span className="legal-card-cta">Read Policy →</span>
            </Link>
          ))}
        </div>

        <div className="legal-contact rv in">
          <p>
            Questions about any policy? Email us at{' '}
            <a href="mailto:hello@minchowcoders.com">hello@minchowcoders.com</a>
          </p>
        </div>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

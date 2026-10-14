'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

export default function RevisionPolicyPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <header className="hero legal-hero" id="top">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="wrap">
          <div className="legal-badge">Legal</div>
          <h1>Revision &amp; Scope Change Policy</h1>
          <div className="bar"></div>
          <p className="legal-meta">
            <span>Agency: Minchow Coders (minchowcoders.com)</span>
            <span className="legal-dot">·</span>
            <span>Effective Date: 10 October 2026</span>
          </p>
        </div>
      </header>

      <main className="wrap legal-wrap">
        <div className="legal-body">
          <section className="legal-section rv in">
            <h2>1. Free Included Revisions &amp; Timeframe</h2>
            <ul>
              <li>
                <strong>Revision Limit:</strong> Each project includes 2 to 3 rounds of free revisions
                across Web Development, UGC Video Ads, and AI Automation setups as specified in the
                project agreement.
              </li>
              <li>
                <strong>Timeframe for Request:</strong> Free revision requests must be submitted within
                7 calendar days following the delivery of the draft or final project files. Requests
                submitted after 7 days will be treated as separate maintenance/support tasks.
              </li>
            </ul>
          </section>

          <section className="legal-section rv in">
            <h2>2. Scope Creep Policy</h2>
            <p>
              Any feature, additional webpage, revised script, or new AI automation logic requested
              beyond the initial agreed project proposal constitutes &quot;Scope Creep.&quot; Additional
              requirements will be quoted and billed separately as project add-ons before work begins.
            </p>
          </section>
        </div>

        <div className="legal-nav rv in">
          <a href="/legal/refund-policy" className="legal-nav-link">← Refund Policy</a>
          <a href="/legal/sla" className="legal-nav-link">SLA →</a>
        </div>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

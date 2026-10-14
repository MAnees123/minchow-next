'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

export default function RefundPolicyPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <header className="hero legal-hero" id="top">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="wrap">
          <div className="legal-badge">Legal</div>
          <h1>Refund &amp; Cancellation Policy</h1>
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
            <h2>1. Milestone Refunds</h2>
            <ul>
              <li>
                <strong>30% Upfront Deposit:</strong> Non-refundable once strategy, initial design, or
                development work has commenced.
              </li>
              <li>
                <strong>Mid-Project Cancellation:</strong> If a client cancels after the 50% completion
                milestone, the 70% paid up to that point (30% deposit + 40% milestone payment) is
                non-refundable to cover labor, resources, and overhead. Completed source code or design
                files up to that phase will be handed over to the client.
              </li>
              <li>
                <strong>100% Upfront Paid Projects:</strong> In the event of mid-project cancellation,
                refunds will be calculated proportionally based on uncompleted milestones.
              </li>
            </ul>
          </section>

          <section className="legal-section rv in">
            <h2>2. Retainers &amp; Custom Assets</h2>
            <ul>
              <li>
                Monthly marketing/maintenance retainers require a 14-day advance notice before the next
                billing cycle for cancellation. Paid fees for ongoing or past cycles are strictly
                non-refundable.
              </li>
              <li>
                Customized assets (such as finalized UGC Video Ads, custom web code, and tailored AI
                workflows) are non-refundable once delivered and approved.
              </li>
            </ul>
          </section>
        </div>

        <div className="legal-nav rv in">
          <a href="/legal/terms-of-service" className="legal-nav-link">← Terms of Service</a>
          <a href="/legal/revision-policy" className="legal-nav-link">Revision Policy →</a>
        </div>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

export default function SLAPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <header className="hero legal-hero" id="top">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="wrap">
          <div className="legal-badge">Legal</div>
          <h1>Service Level Agreement</h1>
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
            <h2>1. Tools, Hosting &amp; API Costs</h2>
            <ul>
              <li>
                Subscriptions for third-party tools and platforms (e.g., OpenAI API credits,
                Make.com/n8n hosting, Domain, Web Hosting, Ad Spend budgets) are not automatically
                included in standard service packages unless explicitly stated in the project
                proposal/invoice.
              </li>
              <li>
                Specific included/excluded tools and API limits will be clearly specified in each
                client&apos;s individual agreement.
              </li>
            </ul>
          </section>

          <section className="legal-section rv in">
            <h2>2. Support &amp; Response Times (Maintenance &amp; AI Agents)</h2>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <thead>
                  <tr>
                    <th>Issue Type</th>
                    <th>Initial Response</th>
                    <th>Target Resolution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Critical Outage (Website or AI Workflow Down)</td>
                    <td>1 – 3 hours</td>
                    <td>Within 24 hours</td>
                  </tr>
                  <tr>
                    <td>Standard Support &amp; Inquiries</td>
                    <td>Within 24 business hours</td>
                    <td>Varies by complexity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="legal-section rv in">
            <h2>3. Third-Party Outages</h2>
            <p>
              Minchow Coders is not liable for downtime, API suspensions, or service interruptions
              caused by third-party infrastructure providers (e.g., OpenAI API outages, hosting server
              downtime, or Meta ad network policy changes).
            </p>
          </section>
        </div>

        <div className="legal-nav rv in">
          <a href="/legal/revision-policy" className="legal-nav-link">← Revision Policy</a>
          <a href="/legal/ip-rights" className="legal-nav-link">IP Rights →</a>
        </div>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

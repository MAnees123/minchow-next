'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

export default function IPRightsPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <header className="hero legal-hero" id="top">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="wrap">
          <div className="legal-badge">Legal</div>
          <h1>Intellectual Property Rights Policy</h1>
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
            <h2>1. Ownership Transfer</h2>
            <p>
              All custom source codes, website designs, graphic creatives, UGC video ad files, and
              customized AI automation setups created for the Client remain the intellectual property of
              Minchow Coders until all invoice payments (100%) are fully settled. Full ownership rights
              transfer to the client upon final payment.
            </p>
          </section>

          <section className="legal-section rv in">
            <h2>2. Non-Exclusive Licensing for Pre-Built Automations &amp; Systems</h2>
            <p>
              Unless a project is explicitly commissioned as a 100% Exclusive Custom Build with a signed
              NDA/Exclusive IP Transfer Agreement, any pre-built AI Agent workflows, internal automation
              modules (e.g., agency management systems, lead generation tools), code components, or
              marketing frameworks developed by Minchow Coders are provided under a Non-Exclusive,
              Non-Transferable Perpetual License.
            </p>
            <p>
              <strong>Agency Ownership &amp; Resale Rights:</strong> Minchow Coders retains full ownership
              of its underlying core system architectures, reusable codebases, and automation logic.
              Minchow Coders reserves the absolute right to sell, market, re-license, deploy, and adapt
              these systems or modules for other companies, clients, or third parties.
            </p>
            <p>
              <strong>Data Privacy Protection:</strong> Any private client data, business credentials,
              sensitive knowledge bases, or custom-branded materials provided by the Client will remain
              strictly confidential and will <strong>NEVER</strong> be shared or reused in projects for other clients.
            </p>
          </section>

          <section className="legal-section rv in">
            <h2>3. Agency Portfolio &amp; Promotional Display</h2>
            <p>
              Unless a formal Non-Disclosure Agreement (NDA) is signed prior to project kickoff, Minchow
              Coders reserves the right to showcase completed project designs, UGC video ads, and
              non-sensitive performance metrics on minchowcoders.com and official agency promotional
              channels.
            </p>
          </section>
        </div>

        <div className="legal-nav rv in">
          <a href="/legal/sla" className="legal-nav-link">← Service Level Agreement</a>
          <a href="/legal/privacy-policy" className="legal-nav-link">Privacy Policy →</a>
        </div>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

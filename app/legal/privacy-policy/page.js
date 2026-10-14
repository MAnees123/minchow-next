'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

export default function PrivacyPolicyPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <header className="hero legal-hero" id="top">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="wrap">
          <div className="legal-badge">Legal</div>
          <h1>Privacy Policy</h1>
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
            <h2>1. Data Collection</h2>
            <p>
              We collect necessary client and business information (such as name, email address, phone
              number, payment transaction records, and platform access credentials) solely to execute
              requested agency services on minchowcoders.com.
            </p>
          </section>

          <section className="legal-section rv in">
            <h2>2. Use of Information</h2>
            <p>Collected data is strictly used for:</p>
            <ul>
              <li>Building and managing websites, AI workflows, and advertising campaigns.</li>
              <li>Direct project communication, invoicing, and support services.</li>
              <li>Technical integrations and automated operations.</li>
            </ul>
          </section>

          <section className="legal-section rv in">
            <h2>3. Data Protection &amp; Third-Party APIs</h2>
            <p>
              We maintain strict security protocols to safeguard client data and credentials. When
              configuring AI Automations or marketing tools, data may pass securely through end-to-end
              encrypted third-party APIs (e.g., OpenAI, Meta, Make.com, n8n). We never sell, lease, or
              share client or customer data with unauthorized third parties.
            </p>
          </section>

          <section className="legal-section rv in">
            <h2>4. GDPR &amp; CCPA Compliance</h2>
            <p>
              Clients retain full rights to request access to, updates for, or complete removal of their
              stored personal data from our internal records by emailing{' '}
              <a href="mailto:hello@minchowcoders.com">hello@minchowcoders.com</a>.
            </p>
          </section>
        </div>

        <div className="legal-nav rv in">
          <a href="/legal/terms-of-service" className="legal-nav-link">Terms of Service →</a>
          <a href="/legal/refund-policy" className="legal-nav-link">Refund &amp; Cancellation →</a>
        </div>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

export default function TermsOfServicePage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <header className="hero legal-hero" id="top">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="wrap">
          <div className="legal-badge">Legal</div>
          <h1>Terms of Service</h1>
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
            <h2>1. Scope of Services</h2>
            <p>Minchow Coders provides high-performance digital agency solutions, including:</p>
            <ul>
              <li>Custom &amp; WordPress Web Development</li>
              <li>AI Agents &amp; Automation Workflows</li>
              <li>Organic Marketing Strategy &amp; Growth</li>
              <li>UGC-Style Video Ads Production</li>
              <li>Paid Marketing (Meta, Google, TikTok, etc.)</li>
              <li>Reusable AI / System Automation Modules &amp; Digital Products</li>
            </ul>
            <p>
              The exact scope, technical specs, deliverables, and timelines for each project will be
              outlined in the individual project proposal, statement of work (SOW), or invoice agreement.
            </p>
          </section>

          <section className="legal-section rv in">
            <h2>2. Payment Terms &amp; Milestone Schedules</h2>
            <p>We offer flexible payment models to accommodate single projects, custom builds, and retainer clients:</p>

            <h3>Milestone-Based Payment Structure (Default for Projects)</h3>
            <ol>
              <li><strong>30% Upfront Deposit:</strong> Due prior to project initiation, research, and technical setup.</li>
              <li><strong>40% Mid-Project Milestone Payment:</strong> Due upon achieving 50% completion of agreed project deliverables.</li>
              <li><strong>30% Final Handover Payment:</strong> Due upon final project completion, prior to live deployment, source code transfer, or credential handover.</li>
            </ol>

            <ul>
              <li><strong>100% Upfront Payment:</strong> Clients may opt to pay the full project fee upfront before work commences.</li>
              <li><strong>Monthly Retainer Services:</strong> Recurring services (e.g., Monthly Paid Marketing management, Organic Content Growth, or Routine Maintenance) must be paid 100% in advance at the start of each billing cycle.</li>
            </ul>
          </section>

          <section className="legal-section rv in">
            <h2>3. Payment Methods &amp; Currency Conversion</h2>
            <ul>
              <li>Accepted payment gateways/methods include Binance (Crypto), Direct Bank Transfer, bKash, and Nagad.</li>
              <li><strong>Transaction &amp; Conversion Fees:</strong> Minchow Coders covers standard processing and foreign currency conversion fees. The client pays only the exact invoice amount unless explicitly agreed otherwise for custom foreign transfer setups.</li>
            </ul>
          </section>

          <section className="legal-section rv in">
            <h2>4. Late Payment &amp; Project Pause Policy</h2>
            <ul>
              <li>If a milestone payment (e.g., the 40% mid-project payment) is delayed by 7 consecutive calendar days or more, ongoing work, staging environments, and deployments will be automatically paused.</li>
              <li>Work will resume only after full milestone settlement. Project delivery timelines will be extended accordingly without late penalty fees.</li>
            </ul>
          </section>

          <section className="legal-section rv in">
            <h2>5. Client Responsibilities &amp; Asset Submissions</h2>
            <p>
              Clients must provide required access, brand materials, content, and feedback in a timely manner.
              Delays in client feedback exceeding 7 business days without prior notice will result in project
              rescheduling and deadline extensions.
            </p>
          </section>
        </div>

        <div className="legal-nav rv in">
          <a href="/legal/privacy-policy" className="legal-nav-link">← Privacy Policy</a>
          <a href="/legal/refund-policy" className="legal-nav-link">Refund &amp; Cancellation →</a>
        </div>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';
import { SERVICES } from './data';

const CATEGORIES = ['All Services', 'Web Development', 'AI & Automation', 'Marketing', 'Creative'];

const FAQ_ITEMS = [
  {
    q: 'How do I know which service is right for my business?',
    a: 'Book a free 30-minute strategy call. We look at your goals, budget and current setup, then recommend where to start, whether that is a new website, automation, or a marketing channel.',
  },
  {
    q: 'Can I combine multiple services?',
    a: 'Yes, and we recommend it. A fast website, paid ads, SEO and automated follow-up work best together, and we offer bundled packages that cost less than buying each one separately.',
  },
  {
    q: 'Do you work with startups or only enterprises?',
    a: 'Both. We work with startups, small businesses and established companies across Australia and worldwide, and scale the scope of the work to fit your stage.',
  },
  {
    q: 'What is your pricing model?',
    a: 'Every project is scoped around your goals. We give you a clear quote after the strategy call, with no hard sell and no obligation. Ongoing marketing is a monthly retainer, and builds are fixed-price.',
  },
];

export default function ServicesClient() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [category, setCategory] = useState('All Services');
  const [openIdx, setOpenIdx] = useState(0);

  const visible = SERVICES.filter((s) => category === 'All Services' || s.cat === category);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <main className="wrap" style={{ minHeight: '80vh', paddingBottom: '60px' }}>
        <header className="ih">
          <div className="glow g1"></div>
          <div className="glow g2"></div>
          <div className="eyebrow dash">Our Capabilities</div>
          <h1>
            5 Specialized <span className="grad">Digital Services</span>
          </h1>
          <p>
            Explore everything we do, from websites and AI automation to organic and paid marketing, designed for fast
            delivery, high scalability and clear business outcomes.
          </p>
        </header>

        <div className="tools" style={{ justifyContent: 'center' }}>
          <div className="chips" role="tablist" aria-label="Service categories">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={`chp ${category === c ? 'on' : ''}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="spg">
          {visible.map((s, idx) => (
            <Link
              key={s.id}
              href={`/services/${s.slug}`}
              className={`spc ${s.tone}`}
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="sph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="spimg" src={s.img} alt={s.title} loading="eager" decoding="async" />
              </div>
              <div className="spb">
                <div className="spr">
                  <span className="spi">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      {s.icon}
                    </svg>
                  </span>
                  <span className="spbadge">{s.badge}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.points.map((pt) => (
                    <li key={pt}>
                      <span aria-hidden="true">✓</span> {pt}
                    </li>
                  ))}
                </ul>
                <span className="spl">Explore Capability →</span>
              </div>
            </Link>
          ))}
        </div>

        <section className="spf">
          <div className="eyebrow dash">FAQ</div>
          <h2>
            Common Questions <br />
            About Our <span className="grad">Services</span>
          </h2>
          <div className="spq">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div className={`fq ${isOpen ? 'open' : ''} rv in`} key={item.q}>
                  <button
                    type="button"
                    className="fqb"
                    aria-expanded={isOpen}
                    aria-controls={`sfa-${idx}`}
                    id={`sfh-${idx}`}
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  >
                    <span className="fn">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="fqt">{item.q}</span>
                    <span className="fi" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14" />
                        <path className="v" d="M12 5v14" />
                      </svg>
                    </span>
                  </button>
                  <div className="fa" id={`sfa-${idx}`} role="region" aria-labelledby={`sfh-${idx}`}>
                    <div>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="cta" style={{ margin: '20px 0 0', textAlign: 'center' }}>
          <h2>
            Ready to grow with <span className="grad">Minchow Coders</span>?
          </h2>
          <p style={{ margin: '0 0 20px', color: 'var(--mu)' }}>
            Book a free consultation and we will show you where to start.
          </p>
          <Link className="btn" href="https://wa.me/8809638920244?text=Hi%20MinchowCoders%2C%20I%27d%20like%20to%20discuss%20a%20project.">
            Let’s talk
          </Link>
        </div>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

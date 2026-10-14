'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';
import { CASE_STUDIES, CS_CATEGORIES } from './data';

const COVER_ICONS = {
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" />
      <path d="M5 19c3-5 6-8 10-10" />
    </>
  ),
};

function Cover({ cs, tone }) {
  if (cs.img) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={cs.img} alt={cs.title} loading="lazy" />;
  }
  return (
    <div className={`cscv ${tone}`}>
      <span className="cg"></span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {COVER_ICONS[cs.icon] || COVER_ICONS.chip}
      </svg>
      <b>{cs.title}</b>
    </div>
  );
}

export default function CaseStudiesClient() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [category, setCategory] = useState('All Work');

  const visible = CASE_STUDIES.filter((c) => category === 'All Work' || c.cat === category);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <main className="wrap" style={{ minHeight: '80vh', paddingBottom: '60px' }}>
        <header className="ih">
          <div className="glow g1"></div>
          <div className="glow g2"></div>
          <div className="eyebrow dash" style={{ justifyContent: 'center' }}>
            Case Study
          </div>
          <h1>
            Where Intelligent Tech Meets <span className="grad">Real Business Growth.</span>
          </h1>
          <p style={{ maxWidth: 720 }}>
            Explore our latest work to see how we blend custom web builds, clever AI workflows, targeted search
            strategies, and high-performance ads to help businesses scale effortlessly. Curious about what we can
            build for you?{' '}
            <Link href="https://wa.me/8809638920244?text=Hi%20MinchowCoders%2C%20I%27d%20like%20to%20discuss%20a%20project." style={{ color: 'var(--ot)', fontWeight: 600 }}>
              Let’s talk.
            </Link>
          </p>
        </header>

        <div className="tools" style={{ justifyContent: 'center' }}>
          <div className="chips" role="tablist" aria-label="Case study categories">
            {CS_CATEGORIES.map((c) => (
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

        <div className="spg csg">
          {visible.length === 0 && <p className="empty">No case studies in this category yet.</p>}
          {visible.map((cs, idx) => {
            const tone = idx % 2 === 0 ? 'o' : 't';
            return (
              <article key={cs.id} className={`csc ${tone}`} style={{ animationDelay: `${idx * 60}ms` }}>
                <div className="csm">
                  <Cover cs={cs} tone={tone} />
                  <span className="wb">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="#f75307" aria-hidden="true">
                      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                    </svg>
                    {cs.location}
                  </span>
                </div>
                <div className="csb">
                  <h3>{cs.title}</h3>
                  <span className="cst">{cs.type}</span>
                  <p>{cs.desc}</p>
                  <div className="csv">
                    <b>Services:</b>
                    <div>
                      {cs.services.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="csbt">
                    {cs.url && (
                      <a className="btn" href={cs.url} target="_blank" rel="noopener">
                        Visit Website
                      </a>
                    )}
                    {cs.demo && (
                      <a className="btn sdgh" href={cs.demo} target="_blank" rel="noopener">
                        Live Demo ↗
                      </a>
                    )}
                    {!cs.url && !cs.demo && (
                      <Link className="btn" href="/contact">
                        Start a Similar Project
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="cta" style={{ margin: '20px 0 0', textAlign: 'center' }}>
          <h2>
            Want results like <span className="grad">these</span>?
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

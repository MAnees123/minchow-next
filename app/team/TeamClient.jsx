'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

export default function TeamClient({ members }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <main className="wrap" style={{ minHeight: '80vh', paddingBottom: '60px' }}>
        <header className="ih">
          <div className="glow g1"></div>
          <div className="glow g2"></div>
          <div className="eyebrow dash">Our Team</div>
          <h1>
            The People Behind <span className="grad">Minchow Coders</span>
          </h1>
          <p>
            Senior engineers, strategists and project leaders who care about your results as much as you do, working
            together to design, build and grow your business.
          </p>
        </header>

        <div className="tpg">
          {members.map((m) => (
            <article
              className="tpc rv in"
              key={m.id}
              style={{ '--c': m.color, '--ct': m.color === '#36b0b9' ? 'var(--tt)' : 'var(--ot)' }}
            >
              <div className="tpa">
                <div className="tav">
                  {m.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.photo} alt={m.name} loading="lazy" />
                  ) : (
                    <b>{m.initials}</b>
                  )}
                </div>
              </div>
              <div className="tpb">
                <span className="tn">{m.num}</span>
                <h2>{m.name}</h2>
                <span className="tpr">{m.role}</span>
                {m.bio && <p>{m.bio}</p>}
                {m.linkedin && (
                  <a className="tpl" href={m.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="cta" style={{ margin: '40px 0 0', textAlign: 'center' }}>
          <h2>
            Ready to work with <span className="grad">our team</span>?
          </h2>
          <p style={{ margin: '0 0 20px', color: 'var(--mu)' }}>
            Book a free consultation and we will show you where to start.
          </p>
          <Link className="btn" href="/contact">
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

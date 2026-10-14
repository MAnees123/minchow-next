'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

function VideoBlock({ service }) {
  const [playing, setPlaying] = useState(false);
  const id = service.youtubeId;

  return (
    <div className="sdv">
      {id && playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={`${service.title} video`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="sdp"
          onClick={() => id && setPlaying(true)}
          disabled={!id}
          aria-label={id ? `Play ${service.title} video` : 'Video coming soon'}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : service.img} alt="" />
          <span className="sdpl" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          {!id && <span className="sdsoon">Video coming soon</span>}
        </button>
      )}
    </div>
  );
}

export default function ServiceDetailClient({ service, others }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <main className={`sd ${service.tone}`}>
        {/* Hero */}
        <section className="sdh">
          <div className="glow g1"></div>
          <div className="glow g2"></div>
          <div className="wrap sdhg">
            <div>
              <div className="bcr" role="navigation" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/services">Services</Link>
                <span>/</span>
                {service.title}
              </div>
              <div className="eyebrow dash">{service.badge}</div>
              <h1>
                {service.lead} <span className="grad">{service.hl}</span>
              </h1>
              <p className="sdlead">{service.desc}</p>
              <div className="sdbtns">
                <Link className="btn" href="/contact">
                  Get Free Quote
                </Link>
                <a
                  className="btn sdgh"
                  href="https://wa.me/8801341663704"
                  target="_blank"
                  rel="noopener"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
            <div className="sdhi">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={service.img} alt={service.title} />
            </div>
          </div>
        </section>

        {/* What is */}
        <section className="wrap sds">
          <div className="sdw">
            <div>
              <div className="eyebrow dash">Overview</div>
              <h2>
                What Is <span className="grad">{service.hl}</span>?
              </h2>
              {service.about.map((para) => (
                <p key={para} className="sdp2">
                  {para}
                </p>
              ))}
              <ul className="sdck">
                {service.checks.map((c) => (
                  <li key={c}>
                    <span aria-hidden="true">✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="sdst">
              {service.stats.map((st) => (
                <div key={st.k} className="sdsc">
                  <b>{st.k}</b>
                  <span>{st.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video */}
        <section className="wrap sds">
          <div className="sdct">
            <div className="eyebrow dash">Watch</div>
            <h2>
              See It <span className="grad">In Action</span>
            </h2>
            <p>A quick look at how we approach {service.title.toLowerCase()} for our clients.</p>
          </div>
          <VideoBlock service={service} />
        </section>

        {/* Features */}
        <section className="wrap sds">
          <div className="sdct">
            <div className="eyebrow dash">What You Get</div>
            <h2>
              Key Features &amp; <span className="grad">Capabilities</span>
            </h2>
            <p>Everything included in our {service.title.toLowerCase()} service.</p>
          </div>
          <div className="sdfg">
            {service.features.map((f, i) => (
              <div key={f.t} className="sdf">
                <span className="sdfn">{String(i + 1).padStart(2, '0')}</span>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="wrap sds">
          <div className="sdpr">
            <div>
              <div className="eyebrow dash">Our Process</div>
              <h2>
                How We Deliver <span className="grad">{service.hl}</span>
              </h2>
              <ol className="sdsp">
                {service.steps.map((st, i) => (
                  <li key={st.t}>
                    <span className="sdn">{i + 1}</span>
                    <div>
                      <h3>{st.t}</h3>
                      <p>{st.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="sdpi">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={service.img} alt={`${service.title} process`} loading="lazy" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="wrap sds sdfaq">
          <div className="sdct">
            <div className="eyebrow dash">FAQ</div>
            <h2>
              Frequently Asked <span className="grad">Questions</span>
            </h2>
          </div>
          <div className="spq">
            {service.faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div className={`fq ${isOpen ? 'open' : ''} rv in`} key={item.q}>
                  <button
                    type="button"
                    className="fqb"
                    aria-expanded={isOpen}
                    aria-controls={`sdfa-${idx}`}
                    id={`sdfh-${idx}`}
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
                  <div className="fa" id={`sdfa-${idx}`} role="region" aria-labelledby={`sdfh-${idx}`}>
                    <div>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="wrap sds">
          <div className="cta" style={{ margin: 0, textAlign: 'center' }}>
            <h2>
              Ready to start with <span className="grad">{service.title}</span>?
            </h2>
            <p style={{ margin: '0 0 20px', color: 'var(--mu)' }}>
              Book a free consultation and we will show you where to start.
            </p>
            <Link className="btn" href="https://wa.me/8809638920244?text=Hi%20MinchowCoders%2C%20I%27d%20like%20to%20discuss%20a%20project.">
              Let’s talk
            </Link>
          </div>
        </section>

        {/* Other services */}
        <section className="wrap sds sdo">
          <h2>Explore other services</h2>
          <div className="sdol">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className={`sdoc ${o.tone}`}>
                <span className="spi">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {o.icon}
                  </svg>
                </span>
                <span>{o.title}</span>
                <em aria-hidden="true">→</em>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

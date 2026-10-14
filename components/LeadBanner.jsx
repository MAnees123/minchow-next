'use client';

import { useEffect, useRef } from 'react';

export default function LeadBanner() {
  const eyesRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyesRef.current) return;
      const x = ((e.clientX / window.innerWidth) - 0.5) * 14;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 8;
      eyesRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="quote" style={{ paddingTop: '20px' }}>
      <div className="wrap">
        <div className="final fsplit rv in">
          <div className="fc">
            <h2>
              Ready to build something <span className="grad">smarter</span>?
            </h2>
            <p>Tell us about your idea and get a free quote within 1 hours.</p>
            <a
              className="btn bo"
              href="mailto:support@minchowcoders.com?subject=Free%20quote%20request"
            >
              Get a free quote
            </a>
          </div>

          <div className="cv" aria-hidden="true">
            <svg className="co" viewBox="0 0 300 210" preserveAspectRatio="none">
              <ellipse cx="150" cy="105" rx="128" ry="78" />
              <ellipse cx="150" cy="105" rx="92" ry="52" transform="rotate(-18 150 105)" />
              <circle className="d1" cx="40" cy="150" r="3" />
              <circle className="d2" cx="236" cy="168" r="2.5" />
              <circle className="d1" cx="188" cy="30" r="2.5" />
            </svg>

            <span className="ct" style={{ left: '8%', top: '4%', background: '#36b0b9' }}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 20V11M12 20V5M19 20v-7" />
              </svg>
            </span>

            <div className="robot cbot">
              <svg viewBox="0 0 400 420" aria-hidden="true">
                <defs>
                  <clipPath id="vz4">
                    <rect x="118" y="118" width="164" height="94" rx="30" />
                  </clipPath>
                </defs>
                <line x1="200" y1="44" x2="200" y2="82" stroke="#36b0b9" strokeWidth="4" />
                <circle className="ant" cx="200" cy="34" r="11" fill="#f75307" />
                <rect x="62" y="142" width="24" height="58" rx="11" fill="#f75307" />
                <rect x="314" y="142" width="24" height="58" rx="11" fill="#f75307" />
                <rect x="90" y="80" width="220" height="170" rx="48" fill="#14232A" stroke="#36b0b9" strokeWidth="3" />
                <rect x="118" y="118" width="164" height="94" rx="30" fill="#081014" />
                <g clipPath="url(#vz4)">
                  <rect className="scan" x="118" y="110" width="164" height="14" fill="#36b0b9" opacity=".18" />
                </g>
                <g className="eyes" id="eyes4" ref={eyesRef}>
                  <circle className="eye" cx="162" cy="165" r="19" fill="#36b0b9" />
                  <circle className="eye" cx="238" cy="165" r="19" fill="#36b0b9" />
                  <circle cx="162" cy="165" r="7" fill="#fff" />
                  <circle cx="238" cy="165" r="7" fill="#fff" />
                </g>
                <g className="bars" fill="#f75307">
                  <rect x="176" y="226" width="10" height="14" rx="3" />
                  <rect x="195" y="226" width="10" height="14" rx="3" />
                  <rect x="214" y="226" width="10" height="14" rx="3" />
                </g>
                <rect x="175" y="250" width="50" height="22" fill="#26373F" />
                <rect x="108" y="270" width="184" height="132" rx="36" fill="#14232A" stroke="#f75307" strokeWidth="3" />
                <circle cx="200" cy="334" r="28" fill="none" stroke="#36b0b9" strokeWidth="3" />
                <circle className="ant" cx="200" cy="334" r="12" fill="#f75307" />
                <rect x="136" y="300" width="40" height="6" rx="3" fill="#36b0b9" />
                <rect x="224" y="300" width="40" height="6" rx="3" fill="#36b0b9" />
                <rect x="68" y="286" width="30" height="92" rx="15" fill="#26373F" />
                <rect x="302" y="286" width="30" height="92" rx="15" fill="#26373F" />
              </svg>
            </div>

            <span className="ct" style={{ right: '3%', top: '10%', background: '#36b0b9', animationDelay: '-3s' }}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="3" />
                <path d="M3.5 7l8.5 6 8.5-6" />
              </svg>
            </span>

            <span className="ct" style={{ left: '58%', bottom: 0, background: '#36b0b9', animationDelay: '-4s' }}>
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16v11H9l-5 4z" />
                <path d="M8.5 10h.01M12 10h.01M15.5 10h.01" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

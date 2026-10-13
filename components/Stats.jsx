'use client';

import { useEffect, useRef, useState } from 'react';

const STATS_DATA = [
  { target: 120, suffix: '+', label: 'Projects delivered' },
  { target: 60, suffix: '+', label: 'Happy clients' },
  { target: 98, suffix: '%', label: 'On-time delivery' },
  { target: 24, suffix: '/7', label: 'Support coverage' }
];

export default function Stats() {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(STATS_DATA.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            STATS_DATA.forEach((stat, idx) => {
              const step = Math.max(1, Math.round(stat.target / 45));
              let cur = 0;
              const timer = setInterval(() => {
                cur = Math.min(stat.target, cur + step);
                setCounts((prev) => {
                  const copy = [...prev];
                  copy[idx] = cur;
                  return copy;
                });
                if (cur >= stat.target) {
                  clearInterval(timer);
                }
              }, 30);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" id="stats" ref={sectionRef}>
      <div className="wrap sg">
        {STATS_DATA.map((item, idx) => (
          <div className="rv in" key={idx}>
            <b>
              {counts[idx]}
              {item.suffix}
            </b>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

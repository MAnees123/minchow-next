'use client';

import { useEffect, useRef, useState } from 'react';

const STATS_DATA = [
  { target: 98, suffix: '%', label: 'On-Time Delivery', decimals: 0 },
  { target: 415, suffix: '+', label: 'Services Delivered', decimals: 0 },
  { target: 4.9, suffix: '/5', label: 'Client Rating', decimals: 1 },
  { target: 24, suffix: '/7', label: 'Response Time', decimals: 0 }
];

export default function Stats() {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(
    STATS_DATA.map((item) => (item.decimals > 0 ? '0.0' : '0'))
  );
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const duration = 1800;
            const startTime = performance.now();

            const animate = (now) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease-out cubic for a fast start and smooth landing
              const ease = 1 - Math.pow(1 - progress, 3);

              setCounts(
                STATS_DATA.map((item) => {
                  const val = item.target * ease;
                  return item.decimals > 0
                    ? val.toFixed(item.decimals)
                    : Math.round(val);
                })
              );

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCounts(
                  STATS_DATA.map((item) =>
                    item.decimals > 0
                      ? item.target.toFixed(item.decimals)
                      : String(item.target)
                  )
                );
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" id="stats" ref={sectionRef} aria-label="Performance Statistics">
      <div className="wrap">
        <div className="sg">
          {STATS_DATA.map((item, idx) => (
            <div className="stat-item rv in" key={idx}>
              <b className="stat-num">
                {counts[idx]}
                <span className="stat-suffix">{item.suffix}</span>
              </b>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


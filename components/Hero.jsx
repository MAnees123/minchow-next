'use client';

import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const canvasRef = useRef(null);
  const eyesRef = useRef(null);
  const [typedText, setTypedText] = useState('');

  // Typing typewriter effect
  useEffect(() => {
    const lines = [
      'initializing minchow.ai ...',
      'loading automation engine ...',
      "ready: let's build your idea."
    ];
    let li = 0;
    let ci = 0;
    let del = false;
    let timerId = null;

    function tick() {
      const l = lines[li];
      if (!del) {
        ci++;
        setTypedText(l.slice(0, ci));
        if (ci === l.length) {
          del = true;
          timerId = setTimeout(tick, 1400);
          return;
        }
      } else {
        ci--;
        setTypedText(l.slice(0, ci));
        if (ci === 0) {
          del = false;
          li = (li + 1) % lines.length;
        }
      }
      timerId = setTimeout(tick, del ? 25 : 55);
    }

    tick();
    return () => clearTimeout(timerId);
  }, []);

  // Eye tracking mousemove
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!eyesRef.current) return;
      const x = ((e.clientX / window.innerWidth) - 0.5) * 16;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 10;
      eyesRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Connected particles canvas
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const cx = cv.getContext('2d');
    let W = 0;
    let H = 0;
    let P = [];
    let animId;

    function size() {
      if (!cv || !cv.parentNode) return;
      const r = cv.parentNode.getBoundingClientRect();
      W = cv.width = r.width;
      H = cv.height = r.height;
      const n = Math.min(70, Math.round((W * H) / 16000));
      P = [];
      for (let i = 0; i < n; i++) {
        P.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          r: Math.random() * 2 + 1,
          c: Math.random() < 0.5 ? '247,83,7' : '54,176,185'
        });
      }
    }

    function draw() {
      cx.clearRect(0, 0, W, H);
      for (let i = 0; i < P.length; i++) {
        const p = P[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        cx.beginPath();
        cx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        cx.fillStyle = `rgba(${p.c},.85)`;
        cx.fill();

        for (let j = i + 1; j < P.length; j++) {
          const q = P[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            cx.beginPath();
            cx.moveTo(p.x, p.y);
            cx.lineTo(q.x, q.y);
            cx.strokeStyle = `rgba(${p.c}, ${(1 - d / 120) * 0.35})`;
            cx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }

    size();
    window.addEventListener('resize', size);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      draw();
    }

    return () => {
      window.removeEventListener('resize', size);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <header className="hero" id="top">
      <div className="grid-bg"></div>
      <div className="glow g1"></div>
      <div className="glow g2"></div>
      <canvas id="dots" ref={canvasRef}></canvas>

      <div className="wrap">
        <div>
          <div className="badge">
            <span className="dot"></span>
            Trusted by 339+ Businesses Worldwide
          </div>

          <h1>
            Custom Software &amp; AI Solutions{' '}
            <span className="grad">That Drive Business Growth</span>
          </h1>

          <p className="lead">
            We help startups and enterprises ship faster with custom software development,
            intelligent automation, and AI systems engineered to scale from day one.
          </p>

          <div className="cta">
            <a className="btn bo" href="#services">
              Explore Our Solutions
            </a>
            <a
              className="btn bt"
              href="#quote"
            >
              Get a Free Consultation
            </a>
          </div>

          <div className="hrate">
            <div className="hav" aria-hidden="true">
              <span>
                <img src="/images/avatars/avatar-1.webp" alt="Client avatar" width="38" height="38" />
              </span>
              <span>
                <img src="/images/avatars/avatar-2.webp" alt="Client avatar" width="38" height="38" />
              </span>
              <span>
                <img src="/images/avatars/avatar-3.webp" alt="Client avatar" width="38" height="38" />
              </span>
              <span>
                <img src="/images/avatars/avatar-4.webp" alt="Client avatar" width="38" height="38" />
              </span>
              <span className="more">313+</span>
            </div>
            <div>
              <div className="hst" role="img" aria-label="4.9 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
                  </svg>
                ))}
              </div>
              <small>Rated 4.9/5 by our clients worldwide</small>
            </div>
          </div>

          <div className="term" id="term">
            &gt; <span id="typed">{typedText}</span>
            <i></i>
          </div>
        </div>

        <div className="robot">
          <div className="ring"></div>
          <div className="ring r2"></div>

          <div className="orbit">
            <div className="arm" style={{ '--a': '0deg', '--c': '#f75307' }}>
              <div className="oi">
                <span>&lt;/&gt;</span>
              </div>
            </div>
            <div className="arm" style={{ '--a': '120deg', '--c': '#36b0b9' }}>
              <div className="oi">
                <span>AI</span>
              </div>
            </div>
            <div className="arm" style={{ '--a': '240deg', '--c': '#f75307' }}>
              <div className="oi">
                <span>⚙</span>
              </div>
            </div>
          </div>

          <svg viewBox="0 0 400 420" aria-label="AI robot illustration" role="img">
            <defs>
              <clipPath id="vz">
                <rect x="118" y="118" width="164" height="94" rx="30" />
              </clipPath>
            </defs>
            <line x1="200" y1="44" x2="200" y2="82" stroke="#36b0b9" strokeWidth="4" />
            <circle className="ant" cx="200" cy="34" r="11" fill="#f75307" />
            <rect x="62" y="142" width="24" height="58" rx="11" fill="#f75307" />
            <rect x="314" y="142" width="24" height="58" rx="11" fill="#f75307" />
            <rect
              x="90"
              y="80"
              width="220"
              height="170"
              rx="48"
              fill="#14232A"
              stroke="#36b0b9"
              strokeWidth="3"
            />
            <rect x="118" y="118" width="164" height="94" rx="30" fill="#081014" />
            <g clipPath="url(#vz)">
              <rect className="scan" x="118" y="110" width="164" height="14" fill="#36b0b9" opacity=".18" />
            </g>
            <g className="eyes" id="eyes" ref={eyesRef}>
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
            <rect
              x="108"
              y="270"
              width="184"
              height="132"
              rx="36"
              fill="#14232A"
              stroke="#f75307"
              strokeWidth="3"
            />
            <circle cx="200" cy="334" r="28" fill="none" stroke="#36b0b9" strokeWidth="3" />
            <circle className="ant" cx="200" cy="334" r="12" fill="#f75307" />
            <rect x="136" y="300" width="40" height="6" rx="3" fill="#36b0b9" />
            <rect x="224" y="300" width="40" height="6" rx="3" fill="#36b0b9" />
            <rect x="68" y="286" width="30" height="92" rx="15" fill="#26373F" />
            <rect x="302" y="286" width="30" height="92" rx="15" fill="#26373F" />
          </svg>
        </div>
      </div>
    </header>
  );
}

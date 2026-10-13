'use client';

import { useState, useEffect, useRef } from 'react';

const SEARCH_INDEX = [
  { t: 'Home', d: 'Hero, rating, and agency overview', h: '#top', k: 'home hero start' },
  { t: 'Services', d: 'Web development, AI automation, marketing, UGC video ads', h: '#services', k: 'website nextjs laravel ai agent automation paid organic marketing ugc video ads' },
  { t: 'Our Process', d: 'Strategy call to launch, step by step', h: '#process', k: 'strategy audit growth plan build launch optimize steps' },
  { t: 'Our Work', d: 'Real projects and client case studies', h: '#work', k: 'projects portfolio seo meta ads google ads local seo ui ux design custom web development' },
  { t: 'Our Team', d: 'Meet the engineers and founders behind your project', h: '#team', k: 'team founder ceo coo manager osman sharmin easha arif' },
  { t: 'Why Choose Us', d: 'Reliability, speed, senior teams, measurable ROI', h: '#why', k: 'why choose uptime mvp experts results' },
  { t: 'Client Reviews', d: 'What international clients say about MinchowCoders', h: '#reviews', k: 'reviews testimonials feedback clients rating' },
  { t: 'FAQ', d: 'Pricing, timelines, support and tech stack', h: '#faq', k: 'faq questions pricing price timeline support industries existing team' },
  { t: 'Get a Free Quote', d: 'Tell us about your project or idea', h: '#quote', k: 'contact quote email start project' },
  { t: 'Insights & Articles', d: 'Technical guides on AI, Next.js, SEO and automation', h: 'https://minchowcoders.com/insights/', k: 'blog articles news ai agents seo', x: true },
  { t: 'Book Summaries', d: 'Top learning book summaries for founders', h: 'https://minchowcoders.com/insights/category/book-summaries/', k: 'books lean startup good to great', x: true },
  { t: 'Case Studies Full', d: 'Detailed metrics and results we delivered', h: 'https://minchowcoders.com/case-studies/', k: 'case studies results', x: true }
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 40);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Global shortcut listeners (Cmd+K / Ctrl+K and /)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const filtered = SEARCH_INDEX.filter((item) => {
    if (!trimmed) return true;
    return `${item.t} ${item.d} ${item.k}`.toLowerCase().includes(trimmed);
  });

  const handleSelect = (item) => {
    if (!item) return;
    onClose();
    if (item.h.startsWith('#')) {
      setTimeout(() => {
        const el = document.querySelector(item.h);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } else {
      window.open(item.h, '_blank', 'noopener');
    }
  };

  const handleKeyDown = (e) => {
    if (filtered.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect(filtered[selectedIndex]);
    }
  };

  return (
    <div
      className="smod"
      id="smod"
      onClick={(e) => {
        if (e.target.id === 'smod') onClose();
      }}
    >
      <div className="sp" role="dialog" aria-modal="true" aria-label="Search">
        <form
          className="sf"
          role="search"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            handleSelect(filtered[selectedIndex]);
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-4-4" />
          </svg>
          <input
            id="sin"
            ref={inputRef}
            type="search"
            placeholder="Search services, projects, FAQs…"
            aria-label="Search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
          />
          <button type="button" className="sx" onClick={onClose}>
            Esc
          </button>
        </form>

        <ul className="sres" id="sres">
          {filtered.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.h}
                className={selectedIndex === idx ? 'on' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(item);
                }}
              >
                <b>
                  {item.t} {item.x ? '↗' : ''}
                </b>
                <small>{item.d}</small>
              </a>
            </li>
          ))}

          {trimmed && (
            <li>
              <a
                className="web"
                href={`https://minchowcoders.com/?s=${encodeURIComponent(trimmed)}`}
                target="_blank"
                rel="noopener"
              >
                <b>Search “{trimmed}” on minchowcoders.com ↗</b>
                <small>Search the full website</small>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

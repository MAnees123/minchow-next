'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';
import { ARTICLES } from './articles';
import PostCard from './PostCard';

export default function InsightsClient() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredArticles = ARTICLES.filter((p) => {
    const matchCategory = selectedCategory === 'All' || p.c === selectedCategory;
    const matchSearch =
      !searchQuery ||
      (p.t + ' ' + p.e + ' ' + p.c + ' ' + p.k).toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const getCategoryCount = (cat) => {
    return ARTICLES.filter((p) => cat === 'All' || p.c === cat).length;
  };

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <main className="wrap" style={{ minHeight: '80vh', paddingBottom: '60px' }}>
        <header className="ih">
          <div className="glow g1"></div>
          <div className="glow g2"></div>
          <h1>Insights</h1>
          <p>Explore expert tips and insights on digital marketing, business growth, and tech trends.</p>
        </header>

        <div className="tools">
          <div className="chips">
            {['All', 'News', 'Book Summaries'].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`chp ${selectedCategory === cat ? 'on' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(9);
                }}
              >
                {cat}
                <small>{getCategoryCount(cat)}</small>
              </button>
            ))}
          </div>

          <div className="sbx">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
            <input
              id="q"
              type="search"
              placeholder="Search insights…"
              aria-label="Search insights"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(9);
              }}
            />
          </div>
        </div>

        <div className="pg">
          {filteredArticles.length === 0 ? (
            <p className="empty" style={{ gridColumn: '1 / -1' }}>
              No insights match your search.
            </p>
          ) : (
            filteredArticles.slice(0, visibleCount).map((p, idx) => <PostCard key={p.s} p={p} idx={idx} />)
          )}
        </div>

        <div className="lm">
          {filteredArticles.length > visibleCount && (
            <button
              type="button"
              className="btn"
              id="more"
              onClick={() => setVisibleCount((prev) => prev + 9)}
            >
              Load more insights
            </button>
          )}
          <span>
            Showing {Math.min(visibleCount, filteredArticles.length)} of {filteredArticles.length} insights.
          </span>
        </div>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

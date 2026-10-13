'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

const ARTICLES = [
  {
    s: 'ai-agents-in-2026',
    t: 'AI Agents in 2026: What They Are, How They Work, and How Businesses Can Use Them',
    c: 'News',
    e: 'A chatbot can answer a customer’s question. An automation can move information from one application to another. An AI…',
    k: 'AI Agents',
    i: 'robot',
  },
  {
    s: 'gpt-6-astra-agi',
    t: 'GPT-6 Astra AGI: Is This OpenAI’s AGI Era Moment',
    c: 'News',
    e: 'OpenAI did something no major AI lab had done before in such blunt terms: it stood in front of…',
    k: 'GPT-6 Astra',
    i: 'chip',
  },
  {
    s: 'the-lean-startup-summary',
    t: 'The Lean Startup Summary: The Complete Breakdown Every Founder Needs',
    c: 'Book Summaries',
    e: 'The Lean Startup by Eric Ries teaches entrepreneurs to test business ideas with a Minimum Viable Product instead of writing a long business plan. The lean startup methodology uses a Build-Measure-Learn loop to validate what customers actually want, so founders…',
    a: 'Sharmin Chowdhury',
    d: '29/08/2026',
    k: 'The Lean Startup',
    i: 'book',
  },
  {
    s: 'n8n-ai-automation-2026',
    t: 'n8n AI Automation 2026: What the Latest Update Means for Business Automation',
    c: 'News',
    e: 'Somewhere in your business right now, someone is copying data from one spreadsheet to another by hand. Or forwarding…',
    k: 'n8n AI Automation',
    i: 'gear',
  },
  {
    s: 'agi-vs-ai-2026',
    t: 'How Close Are We to AGI in 2026? What the Data Actually Shows (Not Just AI Hype)',
    c: 'News',
    e: 'Every few months, someone declares that AGI has arrived, or that it’s still decades away. Both can’t be right,…',
    k: 'AGI vs AI',
    i: 'brain',
  },
  {
    s: 'ai-citation-content',
    t: 'AI Citation Content Refresh: How Often Should You Update Content to Get Cited by AI',
    c: 'News',
    e: 'You publish a blog post. It ranks. Six months go by, and you notice something strange. ChatGPT recommends your…',
    k: 'AI Citation Content',
    i: 'search',
  },
  {
    s: 'meta-ads-conversions-drop-2026-update',
    t: 'Why Did Meta Ads Conversions Drop? The 2026 Attribution Change Explained',
    c: 'News',
    e: 'If your Meta ads conversions dropped in 2026, it’s most likely due to Meta’s attribution reclassification introduced in March…',
    k: 'Meta Ads Conversions',
    i: 'ads',
  },
  {
    s: 'ai-recommendations-in-2026',
    t: 'How to Optimize for AI Recommendations in 2026',
    c: 'News',
    e: 'Your next customer probably didn’t Google you. They asked ChatGPT, Gemini, or Perplexity a question, got three answers, and…',
    k: 'AI Recommendations',
    i: 'chip',
  },
  {
    s: 'good-to-great-summary',
    t: 'Good to Great Summary: The Framework Behind Jim Collins’ Bestselling Book',
    c: 'Book Summaries',
    e: 'Most business owners have heard someone quote “good is the enemy of great” at a conference and nod along without really knowing where it came from. It comes from this book. And once you understand the research behind that line,…',
    a: 'Sharmin Chowdhury',
    d: '25/07/2026',
    k: 'Good to Great',
    i: 'book',
  },
  {
    s: 'obviously-awesome-summary',
    t: 'Obviously Awesome Summary: April Dunford’s Guide to Product Positioning',
    c: 'Book Summaries',
    e: 'Obviously Awesome by April Dunford is a practical positioning book that teaches businesses how to make their product’s value clear the moment a customer sees it. The obviously awesome summary in one line: positioning isn’t a tagline exercise, it’s a…',
    a: 'Osman Goni',
    d: '15/07/2026',
    k: 'Obviously Awesome',
    i: 'book',
  },
  {
    s: 'the-power-of-moments-summary',
    t: 'The Power of Moments Summary: Why Certain Experiences Stick With Us Forever',
    c: 'Book Summaries',
    e: 'That’s the entire premise behind The Power of Moments: Why Certain Experiences Have Extraordinary Impact by Chip Heath and Dan Heath. This Power of Moments summary exists because the book itself is packed with dense, research-backed ideas, and business owners…',
    a: 'Sharmin Chowdhury',
    d: '11/07/2026',
    k: 'The Power of Moments',
    i: 'book',
  },
  {
    s: 'traction-book-summary',
    t: 'Traction Book Summary: The Complete Guide to Gino Wickman’s Entrepreneurial Operating System (EOS)',
    c: 'Book Summaries',
    e: 'Traction: Get a Grip on Your Business is a practical business operating manual by Gino Wickman that introduces the Entrepreneurial Operating System (EOS) – a six-part framework that helps small and mid-sized business owners fix the same five recurring frustrations:…',
    a: 'Sharmin Chowdhury',
    d: '07/07/2026',
    k: 'Traction',
    i: 'book',
  },
  {
    s: 'the-e-myth-revisited-summary',
    t: 'The E-Myth Revisited: Full Book Summary, Key Lessons & Actionable Takeaways (2026)',
    c: 'Book Summaries',
    e: 'If you’ve ever felt like your business owns you instead of the other way around, The E-Myth Revisited by Michael E. Gerber is probably the most important business book you haven’t finished reading yet. This guide breaks down the entire…',
    a: 'Sharmin Chowdhury',
    d: '01/07/2026',
    k: 'The E-Myth Revisited',
    i: 'book',
  },
  {
    s: 'building-a-storybrand-summary',
    t: 'Building a StoryBrand Summary: How Donald Miller’s Framework Helps You Clarify Your Brand Message',
    c: 'Book Summaries',
    e: 'If your website, ads, or pitch deck feel confusing even to you, you’re not alone — and that’s exactly the problem Donald Miller set out to fix. This Building a StoryBrand summary breaks down a book that has quietly become…',
    a: 'Sharmin Chowdhury',
    d: '21/06/2026',
    k: 'Building a StoryBrand',
    i: 'book',
  },
  {
    s: '100m-offers-summary-alex-hormozi',
    t: '$100M Offers Summary: How Alex Hormozi’s Grand Slam Offer Framework Can Change the Way You Sell Forever',
    c: 'Book Summaries',
    e: 'If you’ve ever built a product, a service, or a coaching program and watched people say “let me think about it” instead of “where do I pay?” — this book was written for that exact moment of frustration. What Is…',
    a: 'Sharmin Chowdhury',
    d: '19/06/2026',
    k: '$100M Offers',
    i: 'book',
  },
];

function renderSvgIcon(type) {
  switch (type) {
    case 'robot':
      return (
        <>
          <rect x="5" y="8" width="14" height="11" rx="3" />
          <path d="M12 8V4.5M9 13.5h.01M15 13.5h.01M9.5 16.5h5M3 12v3M21 12v3" />
          <circle cx="12" cy="3.5" r="1" />
        </>
      );
    case 'chip':
      return (
        <>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
        </>
      );
    case 'brain':
      return (
        <>
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="6" r="2" />
          <circle cx="19" cy="6" r="2" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" />
        </>
      );
    case 'book':
      return (
        <>
          <path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2z" />
          <path d="M5 18a2 2 0 0 1 2-2h12M9 8h6" />
        </>
      );
    case 'ads':
      return (
        <>
          <path d="M3 11v3h3l8 4V7L6 11H3z" />
          <path d="M17 9c1.5 1.5 1.5 4.5 0 6" />
        </>
      );
    case 'search':
      return (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-5-5" />
        </>
      );
    case 'gear':
    default:
      return (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
        </>
      );
  }
}

export default function InsightsClient() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(9);
  const [activeSlug, setActiveSlug] = useState(null);
  const [copyFeedback, setCopyFeedback] = useState('Copy link');

  useEffect(() => {
    // Check initial hash or category query
    const checkHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#\/post\/([\w-]+)/);
      if (match) {
        setActiveSlug(match[1]);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActiveSlug(null);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const openPost = (slug) => {
    window.location.hash = `#/post/${slug}`;
  };

  const closePost = () => {
    window.location.hash = '';
    setActiveSlug(null);
  };

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

  const activePost = activeSlug ? ARTICLES.find((p) => p.s === activeSlug) : null;

  const handleCopyLink = (url) => {
    try {
      navigator.clipboard.writeText(url).then(
        () => setCopyFeedback('Link copied ✓'),
        () => setCopyFeedback(url)
      );
    } catch {
      setCopyFeedback(url);
    }
    setTimeout(() => setCopyFeedback('Copy link'), 3000);
  };

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <main className="wrap" style={{ minHeight: '80vh', paddingBottom: '60px' }}>
        {activePost ? (
          // Single Article Detail View
          <article className="art">
            <nav className="bcr" aria-label="Breadcrumb">
              <a href="#" onClick={(e) => { e.preventDefault(); closePost(); }}>
                Home
              </a>
              <span>/</span>
              <a href="#" onClick={(e) => { e.preventDefault(); closePost(); }}>
                Insights
              </a>
              <span>/</span>
              {activePost.c}
            </nav>

            <span className={`tag ${activePost.c === 'News' ? 'n' : 'b'}`}>{activePost.c}</span>
            <h1>{activePost.t}</h1>

            <div className="meta">
              {activePost.a ? (
                <div className="au">
                  <i>{activePost.a.charAt(0)}</i>
                  <span>
                    {activePost.a}
                    {activePost.d ? ` · ${activePost.d}` : ''}
                  </span>
                </div>
              ) : (
                <span>MinchowCoders Insights</span>
              )}
            </div>

            <div className={`cvr ${activePost.c === 'News' ? 'n' : 'b'} big`}>
              <span className="cg"></span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {renderSvgIcon(activePost.i)}
              </svg>
              <b>{activePost.k}</b>
            </div>

            <p className="lead2">{activePost.e.replace(/…$/, '…')}</p>

            <div className="pv">
              <h2>Continue reading the full article</h2>
              <p>
                This insight is published in full on our main website. Open it there for the complete breakdown,
                actionable examples, and takeaways.
              </p>
              <a
                className="btn"
                href={`https://minchowcoders.com/insights/${activePost.s}/`}
                target="_blank"
                rel="noopener"
              >
                Read the full article ↗
              </a>
            </div>

            <div className="sh2">
              <b>Share:</b>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `https://minchowcoders.com/insights/${activePost.s}/`
                )}`}
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  `https://minchowcoders.com/insights/${activePost.s}/`
                )}`}
                target="_blank"
                rel="noopener"
              >
                Facebook
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `https://minchowcoders.com/insights/${activePost.s}/`
                )}`}
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </a>
              <button
                type="button"
                id="cp"
                onClick={() => handleCopyLink(`https://minchowcoders.com/insights/${activePost.s}/`)}
              >
                {copyFeedback}
              </button>
            </div>

            {/* Related articles */}
            <section className="rel">
              <h2>More insights</h2>
              <div className="pg">
                {ARTICLES.filter((x) => x.s !== activePost.s)
                  .slice(0, 3)
                  .map((p, idx) => (
                    <div
                      key={p.s}
                      className="pc"
                      style={{ cursor: 'pointer', animationDelay: `${idx * 60}ms` }}
                      onClick={() => openPost(p.s)}
                    >
                      <div className="pim">
                        <div className={`cvr ${p.c === 'News' ? 'n' : 'b'}`}>
                          <span className="cg"></span>
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            {renderSvgIcon(p.i)}
                          </svg>
                          <b>{p.k}</b>
                        </div>
                      </div>
                      <div className="pb">
                        <span className={`tag ${p.c === 'News' ? 'n' : 'b'}`}>{p.c}</span>
                        <h3>{p.t}</h3>
                        <p>{p.e}</p>
                        <div className="pm">
                          <div className="au">
                            {p.a ? (
                              <>
                                <i>{p.a.charAt(0)}</i>
                                <span>
                                  {p.a}
                                  {p.d ? ` · ${p.d}` : ''}
                                </span>
                              </>
                            ) : (
                              <span>{p.c}</span>
                            )}
                          </div>
                          <span className="rm">Read more →</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            <div className="cta" style={{ margin: '50px 0 0' }}>
              <h2>
                Want results like this for <span className="grad">your business</span>?
              </h2>
              <p style={{ margin: '0 0 20px', color: 'var(--mu)' }}>
                Book a free consultation and we will show you where to start.
              </p>
              <a
                className="btn"
                href={`https://wa.me/8809638920244?text=${encodeURIComponent(
                  `Hi MinchowCoders, I read ${activePost.t.replace(/&/g, 'and')} and I'd like to talk.`
                )}`}
                target="_blank"
                rel="noopener"
              >
                Talk to us on WhatsApp
              </a>
            </div>

            <button
              type="button"
              className="back"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onClick={closePost}
            >
              ← Back to all insights
            </button>
          </article>
        ) : (
          // All Insights List View
          <>
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
                filteredArticles.slice(0, visibleCount).map((p, idx) => (
                  <div
                    key={p.s}
                    className="pc"
                    style={{ cursor: 'pointer', animationDelay: `${idx * 60}ms` }}
                    onClick={() => openPost(p.s)}
                  >
                    <div className="pim">
                      <div className={`cvr ${p.c === 'News' ? 'n' : 'b'}`}>
                        <span className="cg"></span>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          {renderSvgIcon(p.i)}
                        </svg>
                        <b>{p.k}</b>
                      </div>
                    </div>
                    <div className="pb">
                      <span className={`tag ${p.c === 'News' ? 'n' : 'b'}`}>{p.c}</span>
                      <h3>{p.t}</h3>
                      <p>{p.e}</p>
                      <div className="pm">
                        <div className="au">
                          {p.a ? (
                            <>
                              <i>{p.a.charAt(0)}</i>
                              <span>
                                {p.a}
                                {p.d ? ` · ${p.d}` : ''}
                              </span>
                            </>
                          ) : (
                            <span>{p.c}</span>
                          )}
                        </div>
                        <span className="rm">Read more →</span>
                      </div>
                    </div>
                  </div>
                ))
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
                Showing {Math.min(visibleCount, filteredArticles.length)} of {filteredArticles.length} insights here.{' '}
                <a
                  className="rm"
                  href="https://minchowcoders.com/insights/"
                  target="_blank"
                  rel="noopener"
                >
                  Browse every article on minchowcoders.com ↗
                </a>
              </span>
            </div>
          </>
        )}
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

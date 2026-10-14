'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';
import PostCard, { Cover } from './PostCard';

export default function ArticleClient({ post, html, related }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState('Copy link');

  const url = `https://minchowcoders.com/insights/${post.s}/`;

  const handleCopyLink = () => {
    const value = window.location.href;
    navigator.clipboard.writeText(value).then(
      () => setCopyFeedback('Link copied ✓'),
      () => setCopyFeedback(value)
    );
    setTimeout(() => setCopyFeedback('Copy link'), 3000);
  };

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <main className="wrap" style={{ minHeight: '80vh', paddingBottom: '60px' }}>
        <article className="art">
          <div className="bcr" role="navigation" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/insights">Insights</Link>
            <span>/</span>
            {post.c}
          </div>

          <span className={`tag ${post.c === 'News' ? 'n' : 'b'}`}>{post.c}</span>
          <h1>{post.t}</h1>

          <div className="meta">
            {post.a ? (
              <div className="au">
                <i>{post.a.charAt(0)}</i>
                <span>
                  {post.a}
                  {post.d ? ` · ${post.d}` : ''}
                </span>
              </div>
            ) : (
              <span>MinchowCoders Insights</span>
            )}
          </div>

          <Cover p={post} big priority />

          <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />

          <div className="sh2">
            <b>Share:</b>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
              target="_blank"
              rel="noopener"
            >
              Facebook
            </a>
            <a href={`https://wa.me/?text=${encodeURIComponent(url)}`} target="_blank" rel="noopener">
              WhatsApp
            </a>
            <button type="button" id="cp" onClick={handleCopyLink}>
              {copyFeedback}
            </button>
          </div>

          <section className="rel">
            <h2>More insights</h2>
            <div className="pg">
              {related.map((p, idx) => (
                <PostCard key={p.s} p={p} idx={idx} />
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
                `Hi MinchowCoders, I read ${post.t.replace(/&/g, 'and')} and I'd like to talk.`
              )}`}
              target="_blank"
              rel="noopener"
            >
              Talk to us on WhatsApp
            </a>
          </div>

          <Link href="/insights" className="back">
            ← Back to all insights
          </Link>
        </article>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

export default function AboutPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      
      <header className="hero" id="top">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="wrap">
          <h1>About Minchow Coders</h1>
          <div className="bar"></div>
        </div>
      </header>

      <main className="wrap">
        <h2 className="sh rv in">Our Story — Where a Name Became a Mission.</h2>
        <div className="story">
          <article className="txt">
            <p className="b rv in">Some names are chosen. Some names are discovered. Minchow was both.</p>
            <p className="rv in">
              When we first came across it, something stopped us. A name this rare — held by fewer than 300
              people across the entire United States — felt less like a coincidence and more like a calling.
            </p>
            <p className="rv in">But the deeper we dug, the more layers we found.</p>
            <p className="rv in">
              <em>The surname Minchow</em> carries a German origin rooted in the meaning “from the manor
              farm” — a place of belonging. A place where things are built with care, grown with patience,
              and passed down with pride. A home.
            </p>
            <p className="rv in">And then there was something else.</p>
            <p className="rv in">
              Say it out loud: Min-chow. Hear it? That quiet, unmistakable echo of a cat’s call — “meow.”
              It wasn’t an accident. It felt like a signature.
            </p>
            <p className="rv in">
              Because the cat, across cultures and centuries, has always represented something rare:
              independence, precision, and an almost supernatural agility. A cat doesn’t chase — it waits,
              it calculates, and then it moves with speed that leaves everything else behind. Silent in
              preparation. Unstoppable in execution.
            </p>
            <p className="pq rv in">That is exactly how we work.</p>
            <p className="rv in">
              We build with the care of a craftsman tending a family farm. And we move with the sharp,
              unstoppable focus of a feline on the hunt.
            </p>
            <p className="end rv in">
              Minchow Coders was never just a company name.<br />
              It is a promise. Of a digital home built to endure — and the fierce, quiet mastery behind every line of code.
            </p>
          </article>
          <aside className="pic rv in">
            <figure>
              <img
                src="/images/about-story.webp"
                alt="A lone vehicle driving a winding road toward the sunrise"
                width={900}
                height={900}
              />
            </figure>
          </aside>
        </div>
        <div className="cta rv in">
          <h2>
            Ready to build your <span className="grad">digital home</span>?
          </h2>
          <a
            className="btn"
            href="https://wa.me/8801341663704"
            target="_blank"
            rel="noopener"
          >
            Start Your Project
          </a>
        </div>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

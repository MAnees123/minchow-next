'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ onOpenSearch }) {
  const [theme, setTheme] = useState('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSec, setActiveSec] = useState('top');
  const pathname = usePathname();

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mc-theme');
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const initial = saved || (prefersLight ? 'light' : 'dark');
      setTheme(initial);
      document.documentElement.setAttribute('data-theme', initial);
    } catch {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('mc-theme', next);
    } catch { }
  };

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSec('');
      return;
    }

    const navLinks = [
      { id: 'top' },
      { id: 'services' },
      { id: 'quote' }
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 140;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSec(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleLinkClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (pathname !== '/') {
        return;
      }
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const isHomeActive = pathname === '/' && activeSec === 'top';
  const isServicesActive = pathname === '/services';
  const isAboutActive = pathname === '/about';
  const isBundleActive = pathname === '/bundle';
  const isCaseActive = pathname === '/case-studies';
  const isInsightsActive = pathname === '/insights';
  const isContactActive = pathname === '/contact' || (pathname === '/' && activeSec === 'quote');

  return (
    <nav>
      <div className="wrap">
        <Link className="logo" href="/" onClick={(e) => handleLinkClick(e, '#top')} aria-label="MinchowCoders home">
          <img
            className="logoimg"
            src="/images/logo.webp"
            alt="MinchowCoders"
            width={520}
            height={129}
          />
        </Link>

        <div className={`links ${mobileMenuOpen ? 'open' : ''}`}>
          <Link
            href="/"
            className={isHomeActive ? 'active' : ''}
            onClick={(e) => handleLinkClick(e, '#top')}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={isServicesActive ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/case-studies"
            className={isCaseActive ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            Case Study
          </Link>
          <Link
            href="/bundle"
            className={isBundleActive ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            Bundle
          </Link>
          <Link
            href="/insights"
            className={isInsightsActive ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className={isContactActive ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={isAboutActive ? 'active' : ''}
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
        </div>

        <div className="navr">
          <button
            className="tg"
            id="tg"
            type="button"
            aria-label="Switch between light and dark mode"
            title="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>

          <button
            className="sb"
            id="sb"
            type="button"
            aria-label="Search"
            title="Search (Ctrl+K)"
            onClick={onOpenSearch}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
          </button>

          <Link
            className="btn bo navcta"
            href="https://wa.me/8809638920244?text=Hi%20MinchowCoders%2C%20I%27d%20like%20to%20discuss%20a%20project."
            style={{ padding: '10px 18px' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Let’s talk
          </Link>

          <button
            className="burger"
            id="bg"
            type="button"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

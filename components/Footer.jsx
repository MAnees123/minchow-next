import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="fw">
        <div className="ftg">
          <div className="ftb">
            <Link href="/">
              <img
                className="ftlogo"
                src="/images/footer-logo.webp"
                alt="MinchowCoders logo"
                width={150}
                height={83}
              />
            </Link>
            <p>
              We are a multidisciplinary team of AI specialists, software engineers, marketers,
              designers and consultants united by a shared mission to scale businesses.
            </p>
            <div className="fsoc">
              <a
                href="https://www.facebook.com/minchowcoders"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.5V11H7v4h2.5v6h4v-6H16l.5-4h-3V8.8c0-.5.3-.8 1-.8z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/minchowcoders"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/minchowcoders"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M6.5 9.5h2.7V18H6.5zM7.9 5.5a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2zM11 9.5h2.6v1.2c.4-.8 1.4-1.4 2.7-1.4 2.7 0 3.2 1.8 3.2 4.1V18h-2.7v-4.2c0-1-.02-2.2-1.4-2.2s-1.6 1.1-1.6 2.2V18H11z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link href="/services">
                  Web &amp; Next.js Development
                </Link>
              </li>
              <li>
                <Link href="/services">
                  SEO &amp; Growth Marketing
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Free Strategy Consultation
                </Link>
              </li>
              <li>
                <Link href="/services">
                  AI &amp; Workflow Automation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Company &amp; Quick Links</h4>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/bundle">Bundle Packages</Link>
              </li>
              <li>
                <Link href="/insights">Insights &amp; Articles</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Legal &amp; Policies</h4>
            <ul>
              <li>
                <Link href="/legal/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/legal/terms-of-service">Terms of Service</Link>
              </li>
              <li>
                <Link href="/legal/refund-policy">Refund &amp; Cancellation</Link>
              </li>
              <li>
                <Link href="/legal/revision-policy">Revision &amp; Scope</Link>
              </li>
              <li>
                <Link href="/legal/sla">Service Level Agreement</Link>
              </li>
              <li>
                <Link href="/legal/ip-rights">IP Rights Policy</Link>
              </li>
            </ul>
          </div>

          <div className="ftc">
            <h4>Get In Touch</h4>
            <p>
              <span>Phone:</span>{' '}
              <a href="tel:+8801341663704">+8801341663704</a>
              <br />
              <span>Email:</span>{' '}
              <a href="mailto:support@minchowcoders.com">support@minchowcoders.com</a>
            </p>
            <p className="fo">
              <b>
                CQQF+R23, Manik Fakirer Gali, Haruya, Kishoreganj Sadar 2300, Bangladesh
                <br />
                Specialized in Digital Services for the Australian &amp; Global Market
              </b>
            </p>
            <p className="fa2">
              <em>Operating in AEST (Australian Eastern Standard Time)</em>
            </p>
          </div>
        </div>

        <div className="fcp">
          Copyright © 2026 MinchowCoders | All rights reserved
        </div>
      </div>
    </footer>
  );
}

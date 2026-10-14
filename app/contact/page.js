'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchModal from '@/components/SearchModal';
import BackToTop from '@/components/BackToTop';

export default function ContactPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setFormSubmitted(true);
    // Ready for Laravel backend POST /api/contact
  };

  const faqs = [
    {
      q: 'What happens after I submit the contact form?',
      a: 'We review your message and reply within 1 hours, usually sooner. We will ask any follow-up questions and suggest the next step, such as a short call or a written quote.',
    },
    {
      q: 'Do you offer free consultations?',
      a: 'Yes. Book a free 30-minute strategy call. We listen to your business, tell you what would move the needle, and give you an honest quote with no hard sell and no obligation.',
    },
    {
      q: 'What information should I include in my message?',
      a: 'Tell us about your business, what you want to achieve, the services you are interested in, your timeline and a rough budget range. Links to your current website or examples you like also help.',
    },
    {
      q: 'Can we schedule a video call?',
      a: 'Absolutely. Mention it in your message or contact us on WhatsApp, and we will arrange a time that suits you. We work AEST-friendly hours.',
    },
  ];

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      <header className="hero" id="top">
        <div className="glow g1"></div>
        <div className="glow g2"></div>
        <div className="wrap">
          <h1>Contact Us</h1>
          <div className="bar"></div>
          <p className="hs">Tell us about your idea and get a free quote within 1 hours.</p>
        </div>
      </header>

      <main className="wrap">
        <div className="cg">
          <section className="card cf rv in">
            <h2>Send Us a Message</h2>
            <p className="s2">Fill out the form below and we’ll get back to you within 1 hours.</p>
            <hr className="hr" />

            {formSubmitted ? (
              <div style={{ padding: '40px 20px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--tx)' }}>
                  Thank You, {formData.name}!
                </h3>
                <p style={{ color: 'var(--mu)', maxWidth: '460px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                  Your message has been received. Our team will review your project details and get back to you at{' '}
                  <strong style={{ color: 'var(--ot)' }}>{formData.email}</strong> within 1 hours.
                </p>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form id="cform" onSubmit={handleSubmit} noValidate>
                <div className="r2">
                  <div className="fld">
                    <label htmlFor="fn">
                      Full Name <i>*</i>
                    </label>
                    <input
                      id="fn"
                      name="name"
                      required
                      placeholder="John Doe"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="fld">
                    <label htmlFor="fe">
                      Email Address <i>*</i>
                    </label>
                    <input
                      id="fe"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="r2">
                  <div className="fld">
                    <label htmlFor="fc">Company</label>
                    <input
                      id="fc"
                      name="company"
                      placeholder="Your Company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="fld">
                    <label htmlFor="fs">Service Interested In</label>
                    <div className="sel">
                      <select id="fs" name="service" value={formData.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="AI & Business Automation">AI & Business Automation</option>
                        <option value="Paid & Organic Marketing">Paid & Organic Marketing</option>
                        <option value="Local SEO">Local SEO</option>
                        <option value="UGC Style Video Ads">UGC Style Video Ads</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Free Consultation">Free Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="fld">
                  <label htmlFor="fb">Estimated Budget</label>
                  <div className="sel">
                    <select id="fb" name="budget" value={formData.budget} onChange={handleChange}>
                      <option value="">Select a range</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000 – $5,000">$1,000 – $5,000</option>
                      <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div className="fld">
                  <label htmlFor="fm">
                    Project Details <i>*</i>
                  </label>
                  <textarea
                    id="fm"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="acts">
                  <button className="btn" type="submit">
                    Send Message{' '}
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 12h15M13 5l7 7-7 7" />
                    </svg>
                  </button>
                  <a
                    className="btn wab"
                    id="wab"
                    href="https://wa.me/8809638920244?text=Hi%20MinchowCoders%2C%20I%27d%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </section>

          <div className="side">
            <aside className="card ci rv in">
              <span className="pill">Contact details</span>
              <h2>Contact Information</h2>
              <p className="s2">Reach out directly or fill out the form. We typically respond within a few hours.</p>
              <ul className="cl">
                <li>
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="3" />
                      <path d="M3.5 7l8.5 6 8.5-6" />
                    </svg>
                  </span>
                  <div>
                    <small>EMAIL</small>
                    <a href="mailto:support@minchowcoders.com">support@minchowcoders.com</a>
                  </div>
                </li>
                <li>
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                    </svg>
                  </span>
                  <div>
                    <small>PHONE</small>
                    <a href="tel:+8801341663704">+8801341663704</a>
                  </div>
                </li>
                <li>
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 20l1.3-4A8 8 0 1 1 8.200 18.700z" />
                      <path d="M9 9.500c.5 2 2 3.500 4.500 4.500l1.200-1.200-1.700-1-.8.600c-.8-.4-1.400-1-1.800-1.800l.6-.8-1-1.700z" />
                    </svg>
                  </span>
                  <div>
                    <small>WHATSAPP</small>
                    <a href="https://wa.me/8809638920244" target="_blank" rel="noopener">
                      +8801341663704
                    </a>
                  </div>
                </li>
                <li>
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.500" />
                    </svg>
                  </span>
                  <div>
                    <small>LOCATION</small>
                    <span>CQQF+R23, Manik Fakirer Gali, Haruya, Kishoreganj Sadar 2300, Bangladesh</span>
                  </div>
                </li>
                <li>
                  <span className="ico">
                    <svg
                      viewBox="0 0 24 24"
                      width="22"
                      height="22"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <div>
                    <small>RESPONSE TIME</small>
                    <span>within 1 hours</span>
                  </div>
                </li>
              </ul>
            </aside>

            <aside className="card ql rv in">
              <h2>Quick Links</h2>
              <a href="/#services">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 12h15M13 5l7 7-7 7" />
                </svg>
                <span>Browse All Services</span>
              </a>
              <a href="/about">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 12h15M13 5l7 7-7 7" />
                </svg>
                <span>Learn About Us</span>
              </a>
            </aside>
          </div>
        </div>

        <section className="qs">
          <div className="qh rv in">
            <div className="ql2">FAQ</div>
            <h2>
              Common <span className="grad">Questions</span>
            </h2>
          </div>
          <div className="qwrap">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div className={`qi rv in ${isOpen ? 'open' : ''}`} key={index}>
                  <button
                    className="qb"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="qn">{`0${index + 1}`}</span>
                    <span className="qt">{faq.q}</span>
                    <span className="qx">
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        {!isOpen && <path className="v" d="M12 5v14" />}
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="qa" style={{ display: 'block' }}>
                      <div>
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <BackToTop />
    </>
  );
}

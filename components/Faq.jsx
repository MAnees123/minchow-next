'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    num: '01',
    question: 'What industries do you serve?',
    answer: 'We work with businesses across healthcare, real estate, fintech, retail, SaaS, education, logistics, and more. Our solutions are tailored to your specific industry needs and challenges.'
  },
  {
    num: '02',
    question: 'How do you price your services?',
    answer: 'Every project is scoped around your goals, so pricing depends on the work involved. Book a free 30-minute strategy call and we will listen to your business and give you an honest quote, with no hard sell and no obligation.'
  },
  {
    num: '03',
    question: 'What is your typical project timeline?',
    answer: 'It depends on the scope. Websites and campaigns can often launch within a few weeks, while larger custom builds take longer. Before we start, we share a clear roadmap and cost estimate so you always know where your project stands.'
  },
  {
    num: '04',
    question: 'Do you offer post-launch support?',
    answer: 'Yes. Our commitment does not end at delivery, it begins there. We keep supporting, monitoring and improving your website, campaigns and automations after launch as your needs evolve.'
  },
  {
    num: '05',
    question: 'Can you work with our existing team?',
    answer: 'Absolutely. We collaborate with your in-house team or other vendors, and we work AEST-friendly hours so communication stays smooth and transparent.'
  }
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0); // first item open by default

  const handleToggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" style={{ paddingTop: '20px' }}>
      <div className="wrap faq">
        <div className="fql rv in">
          <div className="fl">FAQ</div>
          <h2>
            Frequently Asked
            <br />
            <span className="grad">Questions</span>
          </h2>
          <p className="sub" style={{ margin: 0 }}>
            Got questions? We’ve got answers. Here are some common questions about working with us.
          </p>
          <div className="fcta">
            <p>Can’t find what you’re looking for?</p>
            <a
              className="fbtn"
              href="mailto:support@minchowcoders.com?subject=Question%20about%20services"
            >
              Ask our team directly
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="fqs">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div className={`fq ${isOpen ? 'open' : ''} rv in`} key={idx}>
                <button
                  type="button"
                  className="fqb"
                  aria-expanded={isOpen}
                  aria-controls={`fa-${idx}`}
                  id={`fh-${idx}`}
                  onClick={() => handleToggle(idx)}
                >
                  <span className="fn">{item.num}</span>
                  <span className="ft">{item.question}</span>
                  <span className="fi" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14" />
                      <path className="v" d="M12 5v14" />
                    </svg>
                  </span>
                </button>
                <div
                  className="fa"
                  id={`fa-${idx}`}
                  role="region"
                  aria-labelledby={`fh-${idx}`}
                >
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

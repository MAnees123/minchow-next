export default function Services() {
  const services = [
    {
      title: 'Custom / Next.js Web Development',
      description: 'Modern, fast and scalable web applications that grow with your business and convert visitors.',
      color: '#f75307',
      link: 'https://minchowcoders.com/services/',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
        </svg>
      )
    },
    {
      title: 'AI Agents & Workflow Automation',
      description: 'Automate daily operations, customer support, data pipelines, and boost team productivity with intelligent AI agents.',
      color: '#36b0b9',
      link: 'https://minchowcoders.com/services/',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="5" y="8" width="14" height="11" rx="3" />
          <path d="M12 8V5M9 13h.01M15 13h.01M9 16.5h6" />
          <circle cx="12" cy="4" r="1" />
        </svg>
      )
    },
    {
      title: 'Paid & Organic SEO Marketing',
      description: 'Get predictable traffic, qualified leads, and measurable revenue with technical SEO and data-driven ad funnels.',
      color: '#f75307',
      link: 'https://minchowcoders.com/services/',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 11v3h3l8 4V7L6 11H3z" />
          <path d="M17 9c1.5 1.5 1.5 4.5 0 6" />
        </svg>
      )
    },
    {
      title: 'UGC Style Video Ads & Creative',
      description: 'Real-looking, creator-style video ads engineered for TikTok, Meta & YouTube, from scriptwriting to final cut.',
      color: '#36b0b9',
      link: 'https://minchowcoders.com/services/',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="6" width="14" height="12" rx="3" />
          <path d="M17 10l4-2v8l-4-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services">
      <div className="wrap sv">
        <div className="svl rv in">
          <div className="eyebrow dash">Our Services</div>
          <h2>Everything You Need Under One Roof</h2>
          <p className="sub">
            We provide end-to-end digital engineering services to help you build, market, and automate
            your business for long-term compounding growth.
          </p>
          <a
            className="btn bt"
            href="https://minchowcoders.com/services/"
            target="_blank"
            rel="noopener"
          >
            Explore All Services →
          </a>
        </div>

        <div className="svr">
          {services.map((item, idx) => (
            <a
              className="sc rv in"
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener"
            >
              <div className="si" style={{ '--c': item.color }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="ar">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 12h15M13 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

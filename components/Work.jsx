import Link from 'next/link';

export default function Work() {
  const projects = [
    {
      title: 'Website Development + SEO',
      category: 'E-commerce websites',
      features: ['Fast, responsive pages', 'Search-ready structure'],
      img: '/images/work-web-seo.webp',
      alt: 'Website Development and SEO Case Study',
      location: 'Australia',
      link: '/case-studies'
    },
    {
      title: 'AI Automation & Agents',
      category: 'Lead generation for B2B operations',
      features: ['70% less manual work', 'Automated lead workflows'],
      img: '/images/work-ai-automation.webp',
      alt: 'AI Automation Case Study',
      location: 'Australia',
      link: '/case-studies'
    },
    {
      title: 'Meta Ads & Paid Funnels',
      category: 'Facebook & Instagram campaigns',
      features: ['Focused audience targeting', 'Clear campaign tracking'],
      img: '/images/work-meta-ads.webp',
      alt: 'Meta Ads Case Study',
      location: 'Australia',
      link: '/case-studies'
    },
    {
      title: 'Custom Web Engineering',
      category: 'Web applications built around your business',
      features: ['Custom business features', 'Mobile-first layouts'],
      img: '/images/work-custom-web.webp',
      alt: 'Custom Web Development Case Study',
      location: 'Australia',
      link: '/case-studies'
    },
    {
      title: 'Local SEO Dominance',
      category: 'Helping nearby customers discover your brand',
      features: ['Local search visibility', 'High intent enquiries'],
      img: '/images/work-local-seo.webp',
      alt: 'Local SEO Case Study',
      location: 'Australia',
      link: '/case-studies'
    },
    {
      title: 'High-Intent Google Ads',
      category: 'Reaching high-intent searchers ready to buy',
      features: ['Relevant search campaigns', 'Live performance tracking'],
      img: '/images/work-google-ads.webp',
      alt: 'Google Ads Case Study',
      location: 'Australia',
      link: '/case-studies'
    },
    {
      title: 'UI/UX Design Systems',
      category: 'Intuitive, conversion-optimized user experiences',
      features: ['Frictionless user journeys', 'Consistent brand design'],
      img: '/images/work-ui-ux.webp',
      alt: 'UI/UX Design Case Study',
      location: 'Australia',
      link: '/case-studies'
    }
  ];

  return (
    <section id="work" style={{ paddingTop: '20px' }}>
      <div className="wrap wk">
        <div className="wkl rv in">
          <div className="eyebrow dash">Our Work</div>
          <h2>
            Real Projects.
            <br />
            Real Results.
          </h2>
          <p className="sub" style={{ marginBottom: '26px' }}>
            We build websites, automate daily workflows, and help international brands reach more high-value customers.
          </p>
          <Link className="btn bt" style={{ borderRadius: '99px' }} href="/case-studies">
            View More Case Studies →
          </Link>
        </div>

        {projects.map((proj, idx) => (
          <Link className="wc rv in" key={idx} href={proj.link}>
            <div className="wa">
              <img
                src={proj.img}
                alt={proj.alt}
                loading="lazy"
                width={700}
                height={382}
              />
              <span className="wb">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="#f75307" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
                {proj.location}
              </span>
            </div>
            <div className="wbd">
              <h3>{proj.title}</h3>
              <p>{proj.category}</p>
              <div className="wf">
                {proj.features.map((feat, fIdx) => (
                  <span key={fIdx}>{feat}</span>
                ))}
              </div>
              <span className="wl">
                View Details <i>→</i>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

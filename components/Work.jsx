import Link from 'next/link';
import { getHomeCaseStudies } from '@/lib/cms';

export default async function Work() {
  const projects = await getHomeCaseStudies();

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

        {projects.map((proj) => (
          <Link className="wc rv in" key={proj.id} href="/case-studies">
            <div className="wa">
              {proj.img && (
                <img
                  src={proj.img}
                  alt={`${proj.title} Case Study`}
                  loading="lazy"
                  width={700}
                  height={382}
                />
              )}
              <span className="wb">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="#f75307" aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
                {proj.location}
              </span>
            </div>
            <div className="wbd">
              <h3>{proj.title}</h3>
              <p>{proj.type}</p>
              <div className="wf">
                {proj.services.map((feat, fIdx) => (
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

import Link from 'next/link';
import { getServices } from '@/lib/cms';

export default async function EndToEnd() {
  const services = await getServices();

  return (
    <section id="growth-services" style={{ paddingTop: '20px' }}>
      <div className="wrap">
        <div className="wyh rv in">
          <h2>
            End-to-End <span className="grad">Growth</span> Services.
          </h2>
          <p className="sub" style={{ margin: '16px auto 0' }}>
            From websites to AI, SEO to ads, everything your business needs to get customers and beat the competition.
          </p>
        </div>

        <div className="eg">
          {services.map((s, idx) => (
            <Link
              key={s.id}
              href={`/services/${s.slug}`}
              className={`egc rv in ${idx % 2 === 0 ? 'o' : 't'}`}
            >
              {s.img && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.img} alt={s.title} loading="lazy" decoding="async" />
              )}
              <span className="egi">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: s.icon || '' }}
                />
              </span>
              <div className="egb">
                <h3>{s.title}</h3>
                <p>{s.short}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="egf">
          <Link className="btn bt" href="/services">
            Explore All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}

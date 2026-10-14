import Link from 'next/link';
import { getHomeServices } from '@/lib/cms';

export default async function Services() {
  const services = await getHomeServices();

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
          <Link className="btn bt" href="/services">
            Explore All Services →
          </Link>
        </div>

        <div className="svr">
          {services.map((item) => (
            <Link className="sc rv in" key={item.id} href={item.link || '/services'}>
              <div className="si" style={{ '--c': item.color }}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: item.icon || '' }}
                />
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

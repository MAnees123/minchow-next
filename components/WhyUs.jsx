export default function WhyUs() {
  const cards = [
    {
      metric: '99.9%',
      metricLabel: 'UPTIME',
      title: 'Enterprise-Grade Reliability',
      description: 'Every solution we deliver is built with security-first architecture and monitored for 99.9% uptime.',
      color: '#36b0b9',
      colorText: 'var(--tt)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
        </svg>
      )
    },
    {
      metric: '<30',
      metricLabel: 'DAYS MVP',
      title: 'Ship Faster Than Competitors',
      description: 'We move fast without cutting corners. Most MVPs are in your hands within 30 days of kickoff.',
      color: '#f75307',
      colorText: 'var(--ot)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    },
    {
      metric: '20+',
      metricLabel: 'EXPERTS',
      title: 'Dedicated Senior Teams',
      description: 'You get skilled engineers, designers, and strategists fully focused on your business success.',
      color: '#36b0b9',
      colorText: 'var(--tt)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M17 14c2.5 0 4.5 1.8 4.5 5" />
        </svg>
      )
    },
    {
      metric: '40%',
      metricLabel: 'AVG. GAINS',
      title: 'Results You Can Measure',
      description: 'We track the metrics that matter and tie every engagement to real business revenue outcomes.',
      color: '#f75307',
      colorText: 'var(--ot)',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 3v18h18" />
          <path d="M7 15l4-4 3 3 6-7" />
        </svg>
      )
    }
  ];

  return (
    <section id="why" style={{ paddingTop: '20px' }}>
      <div className="wrap">
        <div className="wyh rv in">
          <h2>
            Why International Businesses
            <br />
            <span className="grad">Choose Minchowcoders</span>
          </h2>
          <p className="sub" style={{ margin: '16px auto 0' }}>
            We combine deep technical expertise with genuine accountability so you always know where your project stands.
          </p>
        </div>

        <div className="wyg">
          {cards.map((card, idx) => (
            <div
              className="wy rv in"
              key={idx}
              style={{ '--c': card.color, '--ct': card.colorText }}
            >
              <div className="wyt">
                <div className="wyi">{card.icon}</div>
                <div className="wys">
                  <b>{card.metric}</b>
                  <span>{card.metricLabel}</span>
                </div>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

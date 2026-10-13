export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Strategy Call',
      description: 'Understand your goals and needs',
      color: '#f75307',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 18h6M10 21h4" />
          <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'Business Audit',
      description: 'Analyze your current setup & opportunities',
      color: '#36b0b9',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-5-5" />
        </svg>
      )
    },
    {
      num: '03',
      title: 'Growth Plan',
      description: 'Custom strategy for your business',
      color: '#36b0b9',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      )
    },
    {
      num: '04',
      title: 'Build & Implement',
      description: 'Develop, automate and launch',
      color: '#f75307',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
        </svg>
      )
    },
    {
      num: '05',
      title: 'Launch & Optimize',
      description: 'Track, improve and scale',
      color: '#36b0b9',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 20v-7M12 20V5M19 20v-10" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" style={{ paddingTop: '20px' }}>
      <div className="wrap">
        <div className="process-card">
          <div className="pr">
            <div className="prl rv in">
              <div className="eyebrow dash">Our Process</div>
              <h2>From Strategy to Growth — Step by Step.</h2>
              <p className="sub" style={{ margin: 0 }}>
                A clear and proven process to turn your vision into real measurable results.
              </p>
            </div>

            <div className="pst">
              {steps.map((step, idx) => (
                <div className="ps rv in" key={idx}>
                  <div className="pi" style={{ '--c': step.color }}>
                    {step.icon}
                    <i className="pn">{step.num}</i>
                  </div>
                  <div className="pt">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

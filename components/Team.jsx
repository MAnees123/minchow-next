export default function Team() {
  const members = [
    {
      num: '01',
      initials: 'OGP',
      name: 'Osman Goni Peyas',
      role: 'Founder & CEO',
      color: '#36b0b9',
      colorText: 'var(--tt)'
    },
    {
      num: '02',
      initials: 'SC',
      name: 'Sharmin Chowdhury',
      role: 'Co-Founder & COO',
      color: '#f75307',
      colorText: 'var(--ot)'
    },
    {
      num: '03',
      initials: 'EA',
      name: 'Easha Ahmed',
      role: 'Client Relationship Officer',
      color: '#36b0b9',
      colorText: 'var(--tt)'
    },
    {
      num: '04',
      initials: 'AK',
      name: 'Arif Khan',
      role: 'Project Manager',
      color: '#f75307',
      colorText: 'var(--ot)'
    }
  ];

  return (
    <section id="team" style={{ paddingTop: '20px' }}>
      <div className="wrap">
        <div className="tmh rv in">
          <div>
            <div className="eyebrow" style={{ color: 'var(--tt)' }}>
              Our Team
            </div>
            <h2 style={{ marginBottom: '10px' }}>Meet Our Leadership</h2>
            <p className="sub" style={{ margin: 0 }}>
              The senior engineers and strategists behind your next successful launch.
            </p>
          </div>
          <a
            className="tml"
            href="https://minchowcoders.com/about/"
            target="_blank"
            rel="noopener"
          >
            More About Our Team <span>↗</span>
          </a>
        </div>

        <div className="tmg">
          {members.map((m, idx) => (
            <div
              className="tm rv in"
              key={idx}
              style={{ '--c': m.color, '--ct': m.colorText }}
            >
              <div className="tmm">
                <span className="tn">{m.num}</span>
                <div className="tav">
                  <b>{m.initials}</b>
                </div>
                <span className="tmc">MC</span>
              </div>
              <div className="tmb">
                <h3>{m.name}</h3>
                <p>{m.role}</p>
                <div className="tmf">
                  <i></i>Minchow Coders
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

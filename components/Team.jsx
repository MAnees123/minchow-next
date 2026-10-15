import Link from 'next/link';
import { getTeam } from '@/lib/cms';

export default async function Team() {
  const members = await getTeam();

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
          <Link className="tml" href="/team">
            More About Our Team <span>→</span>
          </Link>
        </div>

        <div className="tmg">
          {members.map((m) => (
            <div
              className="tm rv in"
              key={m.id}
              style={{ '--c': m.color, '--ct': m.color === '#36b0b9' ? 'var(--tt)' : 'var(--ot)' }}
            >
              <div className="tmm">
                <span className="tn">{m.num}</span>
                <div className="tav">
                  {m.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.photo} alt={m.name} />
                  ) : (
                    <b>{m.initials}</b>
                  )}
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

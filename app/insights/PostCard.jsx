import Link from 'next/link';

function renderSvgIcon(type) {
  switch (type) {
    case 'robot':
      return (
        <>
          <rect x="5" y="8" width="14" height="11" rx="3" />
          <path d="M12 8V4.5M9 13.5h.01M15 13.5h.01M9.5 16.5h5M3 12v3M21 12v3" />
          <circle cx="12" cy="3.5" r="1" />
        </>
      );
    case 'chip':
      return (
        <>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
        </>
      );
    case 'brain':
      return (
        <>
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="6" r="2" />
          <circle cx="19" cy="6" r="2" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3" />
        </>
      );
    case 'book':
      return (
        <>
          <path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2z" />
          <path d="M5 18a2 2 0 0 1 2-2h12M9 8h6" />
        </>
      );
    case 'ads':
      return (
        <>
          <path d="M3 11v3h3l8 4V7L6 11H3z" />
          <path d="M17 9c1.5 1.5 1.5 4.5 0 6" />
        </>
      );
    case 'search':
      return (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-5-5" />
        </>
      );
    case 'gear':
    default:
      return (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9L7 7M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
        </>
      );
  }
}

export function Cover({ p, big = false, priority = false }) {
  const tone = p.c === 'News' ? 'n' : 'b';
  if (p.img) {
    return (
      <div className={`cvr img ${tone}${big ? ' big' : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.img} alt={p.k} loading={priority ? 'eager' : 'lazy'} decoding="async" />
      </div>
    );
  }
  return (
    <div className={`cvr ${tone}${big ? ' big' : ''}`}>
      <span className="cg"></span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {renderSvgIcon(p.i)}
      </svg>
      <b>{p.k}</b>
    </div>
  );
}

export default function PostCard({ p, idx = 0 }) {
  return (
    <Link href={`/insights/${p.s}`} className="pc" style={{ animationDelay: `${idx * 60}ms` }}>
      <div className="pim">
        <Cover p={p} />
      </div>
      <div className="pb">
        <span className={`tag ${p.c === 'News' ? 'n' : 'b'}`}>{p.c}</span>
        <h3>{p.t}</h3>
        <p>{p.e}</p>
        <div className="pm">
          <div className="au">
            {p.a ? (
              <>
                <i>{p.a.charAt(0)}</i>
                <span>
                  {p.a}
                  {p.d ? ` · ${p.d}` : ''}
                </span>
              </>
            ) : (
              <span>{p.c}</span>
            )}
          </div>
          <span className="rm">Read more →</span>
        </div>
      </div>
    </Link>
  );
}

'use client';

const TECH_ITEMS = [
  {
    name: 'React',
    svg: (
      <g fill="none" stroke="#2aa8c9" strokeWidth="2">
        <ellipse cx="16" cy="16" rx="13" ry="5" />
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
        <circle cx="16" cy="16" r="2.5" fill="#2aa8c9" />
      </g>
    )
  },
  {
    name: 'Next.js',
    svg: (
      <>
        <circle cx="16" cy="16" r="14" fill="currentColor" />
        <path
          d="M12 10v12M12 10l9 12M21 10v7"
          style={{ stroke: 'var(--ink2)' }}
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
      </>
    )
  },
  {
    name: 'Node.js',
    svg: (
      <>
        <path d="M16 2l12 7v14l-12 7-12-7V9z" fill="#3c873a" />
        <path
          d="M12 21V11l8 10V11"
          stroke="#fff"
          strokeWidth="2.4"
          fill="none"
          strokeLinejoin="round"
        />
      </>
    )
  },
  {
    name: 'Python',
    svg: (
      <>
        <path
          d="M16 3c-6 0-6 2.5-6 4v3h6v1H8c-3 0-5 2-5 6s2 6 5 6h2v-3c0-2 2-4 4-4h6c2 0 3-1 3-3V7c0-2-3-4-8-4z"
          fill="#3776ab"
        />
        <path
          d="M16 29c6 0 6-2.5 6-4v-3h-6v-1h8c3 0 5-2 5-6s-2-6-5-6h-2v3c0 2-2 4-4 4h-6c-2 0-3 1-3 3v6c0 2 3 4 8 4z"
          fill="#ffc331"
        />
        <circle cx="12.5" cy="7" r="1.2" fill="#fff" />
        <circle cx="19.5" cy="25" r="1.2" fill="#fff" />
      </>
    )
  },
  {
    name: 'Laravel',
    svg: (
      <path
        d="M6 8l10-5 10 5v14l-10 5-10-5V8z"
        fill="#ff2d20"
      />
    )
  },
  {
    name: 'OpenAI',
    svg: (
      <>
        <circle cx="16" cy="16" r="14" fill="#10a37f" />
        <path
          d="M16 7l7.8 4.5v9L16 25l-7.8-4.5v-9z"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <circle cx="16" cy="16" r="2.5" fill="#fff" />
      </>
    )
  },
  {
    name: 'TensorFlow',
    svg: (
      <path
        d="M5 9l7-4v6l4 2.3V7l5 3v5l-5-3v13l-4 2.3V14L5 17z"
        fill="#ff6f00"
      />
    )
  },
  {
    name: 'Figma',
    svg: (
      <>
        <path d="M11 1h5v10h-5a5 5 0 0 1 0-10z" fill="#f24e1e" />
        <path d="M16 1h5a5 5 0 0 1 0 10h-5z" fill="#ff7262" />
        <path d="M11 11h5v10h-5a5 5 0 0 1 0-10z" fill="#a259ff" />
        <circle cx="21" cy="16" r="5" fill="#1abcfe" />
        <path d="M11 21h5v5a5 5 0 1 1-5-5z" fill="#0acf83" />
      </>
    )
  },
  {
    name: 'AWS',
    svg: (
      <>
        <circle cx="16" cy="16" r="14" fill="#ff9900" />
        <path
          d="M8 18c5 3.5 11 3.5 16 0"
          stroke="#0E1A1F"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
        />
      </>
    )
  },
  {
    name: 'Docker',
    svg: (
      <g fill="#2496ed">
        <rect x="6" y="11" width="4" height="4" />
        <rect x="11" y="11" width="4" height="4" />
        <rect x="16" y="11" width="4" height="4" />
        <rect x="21" y="11" width="4" height="4" />
        <rect x="11" y="6" width="4" height="4" />
        <path d="M2 17h27c0 6-5 10-12 10S3 24 2 17z" />
      </g>
    )
  },
  {
    name: 'Tailwind CSS',
    svg: (
      <g fill="#38bdf8">
        <path d="M16 7c-4 0-6.5 2-7.5 6 1.5-2 3.2-2.8 5-2.3 1.1.3 1.8 1.1 2.6 1.9 1.3 1.3 2.8 2.8 6.4 2.8 4 0 6.5-2 7.5-6-1.5 2-3.2 2.8-5 2.3-1.1-.3-1.8-1.1-2.6-1.9C21.1 8.5 19.6 7 16 7z" />
        <path d="M8.5 16c-4 0-6.5 2-7.5 6 1.5-2 3.2-2.8 5-2.3 1.1.3 1.8 1.1 2.6 1.9 1.3 1.3 2.8 2.8 6.4 2.8 4 0 6.5-2 7.5-6-1.5 2-3.2 2.8-5 2.3-1.1-.3-1.8-1.1-2.6-1.9C13.6 17.5 12.1 16 8.5 16z" />
      </g>
    )
  },
  {
    name: 'PostgreSQL',
    svg: (
      <>
        <ellipse cx="16" cy="8" rx="10" ry="4" fill="#336791" />
        <path
          d="M6 8v15c0 2.2 4.5 4 10 4s10-1.8 10-4V8c0 2.2-4.5 4-10 4S6 10.2 6 8z"
          fill="#336791"
          opacity=".85"
        />
        <path
          d="M6 15c0 2.2 4.5 4 10 4s10-1.8 10-4"
          stroke="#fff"
          strokeWidth="1.5"
          fill="none"
          opacity=".6"
        />
      </>
    )
  },
  {
    name: 'Flutter',
    svg: (
      <>
        <path d="M18 2h8L10 18l-4-4z" fill="#42a5f5" />
        <path d="M18 14h8l-6 6 6 6h-8l-6-6z" fill="#0d47a1" />
      </>
    )
  }
];

export default function TechTicker() {
  // Repeat 3 times to ensure infinite smooth seamless scroll
  const chips = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="marq">
      <p className="mt">Modern tech stack &amp; frameworks we build with</p>
      <div className="mw">
        <div className="track" id="track">
          {chips.map((item, idx) => (
            <div className="chip" key={idx}>
              <svg viewBox="0 0 32 32" aria-hidden="true">
                {item.svg}
              </svg>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

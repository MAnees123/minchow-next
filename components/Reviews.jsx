import { getReviews } from '@/lib/cms';

export default async function Reviews() {
  const reviews = await getReviews();

  return (
    <section id="reviews" style={{ paddingTop: '20px' }}>
      <div className="wrap">
        <div className="wyh rv in">
          <h2>
            Client Feedback About <span className="grad">Minchow Coders</span>
          </h2>
          <p className="sub" style={{ margin: '16px auto 0' }}>
            Because we value our work, our customers have a great impact on us.
          </p>
        </div>
      </div>

      <div className="rmq" role="region" aria-label="Client reviews">
        <div className="rtrack">
          {[...reviews, ...reviews].map((rev, idx) => (
            <div className="rsl" key={idx}>
              <figure className="rt" style={{ '--c': rev.color, '--ct': rev.color === '#36b0b9' ? 'var(--tt)' : 'var(--ot)' }}>
                <span className="rq" aria-hidden="true">“</span>
                <div className="rs" role="img" aria-label={`${rev.rating} out of 5 stars`}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
                    </svg>
                  ))}
                </div>
                <blockquote>“{rev.quote}”</blockquote>
                <figcaption>
                  <span className="ra">{rev.initial}</span>
                  <span>
                    <b>{rev.name}</b>
                    <small>{rev.location}</small>
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Reviews() {
  const reviews = [
  {
    "color": "#36b0b9",
    "quote": "Outstanding work by MinchowCoders! They built our e-commerce site from scratch \u2014 clean code, fast load, and exactly what we envisioned.",
    "initial": "J",
    "name": "James Thornton",
    "location": "Sydney, AU"
  },
  {
    "color": "#f75307",
    "quote": "MinchowCoders' SEO audit was incredibly detailed. Within 2 months our Google rankings improved dramatically. The team really knows their stuff.",
    "initial": "E",
    "name": "Emily Carter",
    "location": "Melbourne, AU"
  },
  {
    "color": "#36b0b9",
    "quote": "Our Facebook and Instagram ads now generate 3x more leads. MinchowCoders crafted a brilliant campaign strategy tailored for our Australian audience.",
    "initial": "R",
    "name": "Ryan Mitchell",
    "location": "Brisbane, AU"
  },
  {
    "color": "#f75307",
    "quote": "The UX/UI redesign by MinchowCoders was phenomenal. User engagement went up 60% after launch. They truly listened and delivered.",
    "initial": "S",
    "name": "Sophie Williams",
    "location": "Perth, AU"
  },
  {
    "color": "#36b0b9",
    "quote": "MinchowCoders built a custom CRM that saved us 20+ hours a week. Professional, on time, and great communication throughout the project.",
    "initial": "D",
    "name": "Daniel Brooks",
    "location": "Adelaide, AU"
  },
  {
    "color": "#f75307",
    "quote": "Our Google Ads ROI doubled in the first month with MinchowCoders. They know how to target the right audience and minimise wasted spend.",
    "initial": "O",
    "name": "Olivia Hansen",
    "location": "Gold Coast, AU"
  },
  {
    "color": "#36b0b9",
    "quote": "The AI chatbot MinchowCoders built handles 70% of our customer queries automatically. Seamlessly integrated and works perfectly.",
    "initial": "L",
    "name": "Liam Foster",
    "location": "Canberra, AU"
  },
  {
    "color": "#f75307",
    "quote": "MinchowCoders' AI content strategy transformed our blog. Organic traffic grew 85% in 3 months. Exceptional and consistent work!",
    "initial": "M",
    "name": "Mia Thompson",
    "location": "Hobart, AU"
  },
  {
    "color": "#36b0b9",
    "quote": "MinchowCoders' virtual assistant support has been a game-changer for our small business. Reliable, professional, and worth every cent.",
    "initial": "N",
    "name": "Noah Anderson",
    "location": "Darwin, AU"
  },
  {
    "color": "#36b0b9",
    "quote": "Outstanding work by MinchowCoders! They built our e-commerce site from scratch \u2014 clean code, fast load, and exactly what we envisioned.",
    "initial": "J",
    "name": "James Thornton",
    "location": "Sydney, AU"
  },
  {
    "color": "#f75307",
    "quote": "MinchowCoders' SEO audit was incredibly detailed. Within 2 months our Google rankings improved dramatically. The team really knows their stuff.",
    "initial": "E",
    "name": "Emily Carter",
    "location": "Melbourne, AU"
  },
  {
    "color": "#36b0b9",
    "quote": "Our Facebook and Instagram ads now generate 3x more leads. MinchowCoders crafted a brilliant campaign strategy tailored for our Australian audience.",
    "initial": "R",
    "name": "Ryan Mitchell",
    "location": "Brisbane, AU"
  },
  {
    "color": "#f75307",
    "quote": "The UX/UI redesign by MinchowCoders was phenomenal. User engagement went up 60% after launch. They truly listened and delivered.",
    "initial": "S",
    "name": "Sophie Williams",
    "location": "Perth, AU"
  },
  {
    "color": "#36b0b9",
    "quote": "MinchowCoders built a custom CRM that saved us 20+ hours a week. Professional, on time, and great communication throughout the project.",
    "initial": "D",
    "name": "Daniel Brooks",
    "location": "Adelaide, AU"
  },
  {
    "color": "#f75307",
    "quote": "Our Google Ads ROI doubled in the first month with MinchowCoders. They know how to target the right audience and minimise wasted spend.",
    "initial": "O",
    "name": "Olivia Hansen",
    "location": "Gold Coast, AU"
  },
  {
    "color": "#36b0b9",
    "quote": "The AI chatbot MinchowCoders built handles 70% of our customer queries automatically. Seamlessly integrated and works perfectly.",
    "initial": "L",
    "name": "Liam Foster",
    "location": "Canberra, AU"
  },
  {
    "color": "#f75307",
    "quote": "MinchowCoders' AI content strategy transformed our blog. Organic traffic grew 85% in 3 months. Exceptional and consistent work!",
    "initial": "M",
    "name": "Mia Thompson",
    "location": "Hobart, AU"
  },
  {
    "color": "#36b0b9",
    "quote": "MinchowCoders' virtual assistant support has been a game-changer for our small business. Reliable, professional, and worth every cent.",
    "initial": "N",
    "name": "Noah Anderson",
    "location": "Darwin, AU"
  }
];

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
                <div className="rs" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
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

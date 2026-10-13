import './globals.css';

export const metadata = {
  title: 'MinchowCoders | AI & Software Development Studio',
  description:
    'MinchowCoders engineers custom AI agents, automated workflows, and high-performance Next.js & Laravel web applications that scale businesses.',
  keywords: [
    'AI development',
    'software development',
    'AI agents',
    'Next.js development',
    'Laravel backend',
    'custom software',
    'workflow automation',
    'SEO services',
    'full stack developer',
    'web development agency'
  ],
  authors: [{ name: 'MinchowCoders', url: 'https://minchowcoders.com' }],
  creator: 'MinchowCoders',
  publisher: 'MinchowCoders',
  metadataBase: new URL('https://minchowcoders.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'MinchowCoders | AI & Software Development Studio',
    description:
      'We help startups and businesses ship faster with custom software development, intelligent automation, and AI systems built to scale.',
    url: 'https://minchowcoders.com',
    siteName: 'MinchowCoders',
    images: [
      {
        url: '/images/logo.webp',
        width: 1200,
        height: 630,
        alt: 'MinchowCoders - AI & Software Development'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MinchowCoders | AI & Software Development',
    description:
      'High-performance software development, AI agents, and automated growth systems engineered for modern businesses.',
    images: ['/images/logo.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://minchowcoders.com/#organization',
      name: 'MinchowCoders',
      url: 'https://minchowcoders.com',
      logo: 'https://minchowcoders.com/images/logo.webp',
      description: 'AI & Software Development Studio specialized in Next.js, Laravel, and intelligent automation.',
      sameAs: [
        'https://www.facebook.com/minchowcoders',
        'https://www.instagram.com/minchowcoders',
        'https://linkedin.com/company/minchowcoders'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+8809638920244',
        contactType: 'customer service',
        availableLanguage: ['English', 'Bengali']
      }
    },
    {
      '@type': 'WebSite',
      '@id': 'https://minchowcoders.com/#website',
      url: 'https://minchowcoders.com',
      name: 'MinchowCoders',
      publisher: {
        '@id': 'https://minchowcoders.com/#organization'
      }
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://minchowcoders.com/#service',
      name: 'MinchowCoders Software Development',
      url: 'https://minchowcoders.com',
      priceRange: '$$',
      image: 'https://minchowcoders.com/images/logo.webp',
      telephone: '+8809638920244',
      serviceType: [
        'Custom Web Development',
        'AI Agents & Automation',
        'SEO & Performance Marketing',
        'Full Stack Software Engineering'
      ]
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What industries do you serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We work with businesses across healthcare, real estate, fintech, retail, SaaS, education, logistics, and more. Our solutions are tailored to your specific industry needs.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do you price your services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every project is scoped around your goals, so pricing depends on the work involved. Book a free 30-minute strategy call and we will give you an honest quote with no obligation.'
          }
        },
        {
          '@type': 'Question',
          name: 'What is your typical project timeline?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Websites and campaigns often launch within a few weeks, while larger custom software builds take longer. We share a clear roadmap and cost estimate before starting.'
          }
        },
        {
          '@type': 'Question',
          name: 'Do you offer post-launch support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our commitment begins at delivery. We keep supporting, monitoring, and optimizing your website, campaigns, and automations after launch.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can you work with our existing team?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We collaborate with your in-house team or other vendors, working AEST-friendly hours for seamless transparency.'
          }
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Poppins:wght@500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var s=localStorage.getItem("mc-theme");document.documentElement.setAttribute("data-theme",s||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"))}catch(e){document.documentElement.setAttribute("data-theme","dark")}`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

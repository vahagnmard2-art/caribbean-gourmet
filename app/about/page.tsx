import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Meet Yonette Alleyne — "Auntie Yonette" — the Guyanese chef behind Caribbean Gourmet at Blossom Market Hall in San Gabriel. 10 years of authentic Guyanese and Caribbean food.',
}

const timeline = [
  {
    year: '1988',
    event: 'A Birthday Request',
    detail:
      "At 11 years old in Guyana, Yonette asks her mother for a chef's coat, hat, mittens, and cookbook for her birthday. Her mother obliges — and everything begins.",
  },
  {
    year: '1998',
    event: 'Supplying Bakeries',
    detail:
      'By 18, Yonette has contracts supplying two bakeries with handmade pastries. Her mother had told her to find a nice office job. She did not listen.',
  },
  {
    year: '2001',
    event: 'Arriving in Los Angeles',
    detail:
      'Yonette immigrates to LA with her husband and three children. After nine months of searching, she finds work as a cake decorator at Pavilions supermarket — and advances to bakery manager within nine months.',
  },
  {
    year: '2015',
    event: 'Caribbean Gourmet Begins',
    detail:
      'Yonette launches Caribbean Gourmet at the Crenshaw/Baldwin Hills and Atwater Village farmers markets simultaneously. The first six months are grueling. The following seven years build a loyal community that travels significant distances to see her.',
  },
  {
    year: '2021',
    event: 'Blossom Market Hall',
    detail:
      "December 2021 — Yonette opens her first brick-and-mortar location at San Gabriel's Blossom Market Hall. The grand opening exceeds all expectations. The longest line in the hall leads to Caribbean Gourmet.",
  },
  {
    year: '2025',
    event: '10 Years & Growing',
    detail:
      "Caribbean Gourmet celebrates a decade. The Infatuation gives it 8.3/10. PureWow calls it one of the best Caribbean restaurants in LA. ABC7 runs a feature. Auntie Yonette still rolls every roti by hand.",
  },
]

const pressFeatures = [
  {
    outlet: 'The Infatuation',
    description: '"The longest line at Blossom Market Hall always leads to Caribbean Gourmet." — 8.3/10',
    href: 'https://www.theinfatuation.com/los-angeles/reviews/caribbean-gourmet',
  },
  {
    outlet: 'ABC7 Community Eats',
    description: "Feature story on Chef Yonette Alleyne and Caribbean Gourmet's Guyanese kitchen in San Gabriel.",
    href: 'https://abc7.com/post/caribbean-gourmets-cozy-kitchen-is-where-guyanas-rich-flavors-come-together-san-gabriel-calif-abc7-community-eats/16798570/',
  },
  {
    outlet: 'PureWow',
    description: 'Named one of the Best Caribbean Restaurants in Los Angeles.',
    href: 'https://www.purewow.com/',
  },
  {
    outlet: 'MySGV',
    description: 'Full profile and interview with Chef Yonette Alleyne.',
    href: 'https://mysgv.net/businesses/caribbean-gourmet/',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div
        style={{
          backgroundColor: 'var(--color-obsidian)',
          paddingTop: 'calc(4.5rem + 3rem)',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid var(--color-border-dark)',
        }}
      >
        <div className="container">
          <span className="section-label" style={{ marginBottom: '0.75rem' }}>
            Our Story
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              color: 'var(--color-coconut)',
              maxWidth: '20ch',
            }}
          >
            From Guyana to San Gabriel — 10 Years of Cooking from Scratch
          </h1>
        </div>
      </div>

      {/* Chef portrait + intro */}
      <section
        className="section-pad"
        style={{ backgroundColor: 'var(--color-roti)' }}
        aria-labelledby="chef-intro-heading"
      >
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              aspectRatio: '4/5',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(26,14,5,0.2)',
            }}
          >
            <Image
              src="/images/yonette-alleyne.jpg"
              alt="Chef Yonette Alleyne, owner and founder of Caribbean Gourmet, in the Blossom Market Hall kitchen in San Gabriel, CA"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>

          <div>
            <h2
              id="chef-intro-heading"
              style={{
                fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
                color: 'var(--color-text-dark)',
                marginBottom: '1.25rem',
              }}
            >
              Meet Auntie Yonette
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Yonette Alleyne grew up in Guyana, on the northeastern coast of South
              America, in a privileged environment — first on a sugar estate where
              her father managed personnel, later at a bauxite mining community. Her
              mother was an accomplished baker who discouraged her daughter from the
              kitchen, insisting she pursue a respectable office career.
            </p>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
              Young Yonette watched anyway. She absorbed techniques through observation.
              And on her 11th birthday, she asked for a chef&rsquo;s coat, a chef&rsquo;s hat,
              mittens, and a cookbook. Her mother obliged. Yonette began baking
              immediately. By 18, she had contracts supplying two bakeries.
            </p>
            <p style={{ fontSize: '1.0625rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Twenty-five years and an ocean later, her customers call her Auntie Yonette
              — and they travel from across Los Angeles to eat her food. Everything is
              still made from scratch. Every roti is still rolled by hand.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-block',
                paddingBlock: '0.75rem',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.9375rem',
                fontWeight: 700,
                color: 'var(--color-saffron)',
              }}
            >
              Contact Yonette about catering →
            </Link>
          </div>
        </div>
      </section>

      {/* What is Guyanese cuisine */}
      <section
        className="section-pad"
        aria-labelledby="guyanese-cuisine-heading"
      >
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="section-label" style={{ marginBottom: '0.75rem' }}>
            Cultural Context
          </span>
          <h2
            id="guyanese-cuisine-heading"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: 'var(--color-coconut)',
              marginBottom: '1.5rem',
            }}
          >
            What Makes Guyanese Food Different?
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              "Guyana sits on the northeastern coast of South America — the only English-speaking country on the continent. Its food reflects centuries of influence from the Indigenous Guyanese, African, Indian, Chinese, Portuguese, and Dutch communities that shaped the country.",
              "The result is a cuisine unlike any other in the Caribbean. Where Jamaican food leans toward scotch bonnet heat, Guyanese cooking builds depth through spice layering — curry isn't Jamaican curry, it's a distinct Guyanese preparation rooted in Indo-Guyanese tradition. The pepper sauce is mild enough to eat by the spoonful. The roti is thicker and chewier. The pastries — pine tarts, cheese rolls, cassava pone — are entirely their own.",
              "Yonette serves dishes from across the Caribbean — oxtail and jerk chicken from Jamaica, doubles from Trinidad — but the heart of this kitchen is Guyanese. And in the San Gabriel Valley, there is nowhere else quite like it.",
            ].map((p, i) => (
              <p key={i} style={{ fontSize: '1.0625rem', color: 'rgba(250,248,242,0.78)', lineHeight: 1.6 }}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="section-pad"
        style={{ backgroundColor: 'var(--color-obsidian)' }}
        aria-labelledby="timeline-heading"
      >
        <div className="container">
          <h2
            id="timeline-heading"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: 'var(--color-coconut)',
              marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            The Caribbean Gourmet Timeline
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timeline.map(({ year, event, detail }, i) => (
              <div
                key={year}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '72px 1fr',
                  gap: '1.5rem',
                  paddingBottom: i < timeline.length - 1 ? '2.5rem' : 0,
                  position: 'relative',
                }}
              >
                {/* Year column */}
                <div style={{ paddingTop: '0.125rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: 'var(--color-gold)',
                    }}
                  >
                    {year}
                  </span>
                  {/* Connector line */}
                  {i < timeline.length - 1 && (
                    <div
                      aria-hidden="true"
                      style={{
                        width: '1px',
                        height: 'calc(100% - 1.75rem)',
                        backgroundColor: 'var(--color-border-dark)',
                        marginTop: '0.5rem',
                        marginLeft: '0.5rem',
                      }}
                    />
                  )}
                </div>

                {/* Content column */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.25rem',
                      color: 'var(--color-coconut)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {event}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section
        id="press"
        className="section-pad"
        aria-labelledby="press-heading"
      >
        <div className="container">
          <span className="section-label" style={{ marginBottom: '0.75rem' }}>Press &amp; Media</span>
          <h2
            id="press-heading"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: 'var(--color-coconut)',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            What People Are Writing About Us
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {pressFeatures.map(({ outlet, description, href }) => (
              <a
                key={outlet}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="press-card"
              >
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--color-coconut)',
                    marginBottom: '0.625rem',
                  }}
                >
                  {outlet}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {description}
                </p>
                <span
                  style={{
                    display: 'block',
                    marginTop: '1rem',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--color-gold)',
                    letterSpacing: '0.06em',
                  }}
                >
                  Read Feature →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

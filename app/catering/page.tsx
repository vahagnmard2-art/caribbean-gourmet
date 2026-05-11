import type { Metadata } from 'next'
import { CateringForm } from './CateringForm'

export const metadata: Metadata = {
  title: 'Catering',
  description:
    'Caribbean and Guyanese catering for events across Los Angeles. Oxtail, jerk chicken, roti, handmade patties, and more. Halal, vegan, and gluten-free available. Request a custom quote.',
}

const packages = [
  {
    name: 'Small Gathering',
    guests: 'Up to 25 guests',
    description:
      'Perfect for birthday parties, family get-togethers, and intimate celebrations. A curated selection of plates, patties, and pastries.',
  },
  {
    name: 'Family Feast',
    guests: '25–75 guests',
    description:
      'Full spread for larger family events, community gatherings, and celebrations. Custom menu built around your group\'s preferences.',
  },
  {
    name: 'Full Event',
    guests: '75+ guests',
    description:
      'Corporate events, wedding receptions, and large celebrations. Full service including menu planning and dietary accommodations.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Tell us about your event',
    body: 'Fill out the inquiry form with your event date, guest count, and dietary needs.',
  },
  {
    number: '02',
    title: 'We build a custom menu',
    body: "Auntie Yonette works with you to create a menu that fits your event — and your guests' needs.",
  },
  {
    number: '03',
    title: 'Everything is cooked fresh',
    body: 'No shortcuts. Every dish is made from scratch on the day of your event.',
  },
  {
    number: '04',
    title: 'Your guests remember it',
    body: "They'll be asking who catered it before they finish their first plate.",
  },
]

export default function CateringPage() {
  return (
    <>
      {/* Hero */}
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
            Catering
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              color: 'var(--color-coconut)',
              maxWidth: '16ch',
              marginBottom: '1.25rem',
            }}
          >
            Bring the Caribbean to Your Table
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'rgba(250,248,242,0.76)',
              maxWidth: '52ch',
              lineHeight: 1.6,
            }}
          >
            Authentic Guyanese and Caribbean cuisine for family gatherings, corporate
            events, and celebrations of all sizes. Halal available. Vegan and
            gluten-free menus on request.
          </p>
        </div>
      </div>

      {/* Packages */}
      <section
        className="section-pad"
        aria-labelledby="packages-heading"
      >
        <div className="container">
          <h2
            id="packages-heading"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: 'var(--color-coconut)',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            Catering Packages
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
            }}
          >
            {packages.map(({ name, guests, description }) => (
              <div
                key={name}
                style={{
                  backgroundColor: 'var(--color-obsidian)',
                  border: '1px solid var(--color-border-dark)',
                  borderRadius: '8px',
                  padding: '2rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    color: 'var(--color-coconut)',
                    marginBottom: '0.375rem',
                  }}
                >
                  {name}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--color-gold)',
                    marginBottom: '1rem',
                    letterSpacing: '0.04em',
                  }}
                >
                  {guests}
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust signals */}
          <div
            style={{
              backgroundColor: 'var(--color-obsidian)',
              border: '1px solid var(--color-border-dark)',
              borderRadius: '8px',
              padding: '2rem',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
            }}
          >
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Accommodations</p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
              }}
            >
              {['Halal meats available', 'Fully vegan menus', 'Gluten-free options', 'Nut allergy accommodations'].map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-coconut)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ color: 'var(--color-gold)' }}>✓</span> {item}
                </span>
              ))}
            </div>
          </div>

          {/* Process */}
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              color: 'var(--color-coconut)',
              lineHeight: 1.3,
              marginBottom: '2rem',
            }}
          >
            How It Works
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
            }}
          >
            {steps.map(({ number, title, body }) => (
              <div key={number} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: 'var(--color-border-dark)',
                    lineHeight: 1,
                  }}
                >
                  {number}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.125rem',
                    color: 'var(--color-coconut)',
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-body-compact)', lineHeight: 1.6 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <blockquote
            style={{
              backgroundColor: 'var(--color-obsidian)',
              border: '1px solid var(--color-border-dark)',
              borderLeft: '4px solid var(--color-gold)',
              borderRadius: '0 8px 8px 0',
              padding: '2rem',
              marginBottom: 'clamp(3rem, 6vw, 5rem)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.375rem)',
                fontStyle: 'italic',
                color: 'rgba(250,248,242,0.9)',
                lineHeight: 1.6,
                marginBottom: '1rem',
              }}
            >
              &ldquo;Yonette proposed the full menu, adjusted for our dairy-free guests,
              and was warm and responsive throughout the entire process. The food was
              the highlight of the night — every single person asked for her contact info.&rdquo;
            </p>
            <footer
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-gold)',
                letterSpacing: '0.06em',
              }}
            >
              — Verified Yelp Review
            </footer>
          </blockquote>

          {/* Inquiry form */}
          <div id="inquiry">
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                color: 'var(--color-coconut)',
                lineHeight: 1.3,
                marginBottom: '0.5rem',
              }}
            >
              Request a Catering Quote
            </h2>
            <p style={{ color: 'var(--color-text-body-compact)', marginBottom: '2rem' }}>
              Fill out the form and Yonette will be in touch within 1–2 business days.
            </p>
            <CateringForm />
          </div>
        </div>
      </section>
    </>
  )
}

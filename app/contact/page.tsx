import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Find Caribbean Gourmet at 264 S Mission Dr, Blossom Market Hall, San Gabriel, CA. Hours, phone, directions, and general inquiries.',
}

const hours = [
  { days: 'Wednesday – Thursday', time: '11am – 8pm' },
  { days: 'Friday – Saturday',    time: '11am – 9pm' },
  { days: 'Sunday',               time: '11am – 8pm' },
  { days: 'Monday – Tuesday',     time: 'Closed', muted: true },
]

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div
        style={{
          backgroundColor: 'var(--color-obsidian)',
          paddingTop: 'calc(4.5rem + 3rem)',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--color-border-dark)',
        }}
      >
        <div className="container">
          <span className="section-label" style={{ marginBottom: '0.75rem' }}>
            Visit Us
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              color: 'var(--color-coconut)',
            }}
          >
            Find Us at Blossom Market Hall
          </h1>
        </div>
      </div>

      <section className="section-pad">
        <div
          className="container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
          }}
        >
          {/* Info column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Address */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--color-coconut)',
                  marginBottom: '0.75rem',
                }}
              >
                Location
              </h2>
              <address
                style={{
                  fontStyle: 'normal',
                  fontSize: '1rem',
                  color: 'rgba(250,248,242,0.8)',
                  lineHeight: 1.7,
                }}
              >
                <p>264 S Mission Dr</p>
                <p>Blossom Market Hall</p>
                <p>San Gabriel, CA 91776</p>
              </address>
              <a
                href="https://maps.google.com/?q=264+S+Mission+Dr+San+Gabriel+CA+91776"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '0.875rem',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-gold)',
                }}
              >
                Get Directions →
              </a>
            </div>

            {/* Phone */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--color-coconut)',
                  marginBottom: '0.75rem',
                }}
              >
                Phone
              </h2>
              <a
                href="tel:+16267704004"
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: 'var(--color-coconut)',
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
              >
                (626) 770-4004
              </a>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                Best reached during business hours. For catering inquiries, please use
                our{' '}
                <Link href="/catering#inquiry" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>
                  catering form
                </Link>
                .
              </p>
            </div>

            {/* Hours */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--color-coconut)',
                  marginBottom: '0.875rem',
                }}
              >
                Hours
              </h2>
              <dl>
                {hours.map(({ days, time, muted }) => (
                  <div
                    key={days}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '2rem',
                      paddingBlock: '0.5rem',
                      borderBottom: '1px solid var(--color-border-dark)',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.9375rem',
                      color: muted ? 'var(--color-text-muted)' : 'rgba(250,248,242,0.85)',
                    }}
                  >
                    <dt>{days}</dt>
                    <dd style={{ margin: 0, fontWeight: 600 }}>{time}</dd>
                  </div>
                ))}
              </dl>
              <p
                style={{
                  marginTop: '0.75rem',
                  fontSize: '0.8125rem',
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-ui)',
                }}
              >
                Weekend specials (doubles, crab soup, baked mac &amp; cheese) available Friday–Sunday.
              </p>
            </div>

            {/* Social */}
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: 'var(--color-coconut)',
                  marginBottom: '0.75rem',
                }}
              >
                Follow Along
              </h2>
              <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                <a
                  href="https://www.instagram.com/caribbeangourmet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}
                >
                  Instagram
                </a>
                <a
                  href="https://www.yelp.com/biz/caribbean-gourmet-san-gabriel-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}
                >
                  Yelp
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            style={{
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--color-border-dark)',
              minHeight: '400px',
              position: 'relative',
            }}
          >
            <iframe
              title="Caribbean Gourmet at Blossom Market Hall, 264 S Mission Dr, San Gabriel, CA 91776"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.68!2d-118.1058!3d34.0992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d49b5a40b9a3%3A0x1234567890abcdef!2s264+S+Mission+Dr%2C+San+Gabriel%2C+CA+91776!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* VIP signup anchor */}
      <section
        id="vip"
        style={{
          backgroundColor: 'var(--color-obsidian)',
          borderTop: '1px solid var(--color-border-dark)',
          paddingBlock: 'clamp(3rem, 6vw, 5rem)',
        }}
        aria-labelledby="contact-vip-heading"
      >
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <h2
            id="contact-vip-heading"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              color: 'var(--color-coconut)',
              marginBottom: '0.75rem',
            }}
          >
            Join the VIP List
          </h2>
          <p style={{ color: 'rgba(250,248,242,0.72)', marginBottom: '1.75rem', lineHeight: 1.65 }}>
            Get early access to Guyana Night tickets, secret menus, weekend specials,
            and exclusive loyalty rewards. No spam.
          </p>
          <Link href="/#vip" className="btn-primary" style={{ fontSize: '1rem' }}>
            Join Auntie Yonette&rsquo;s Inner Circle
          </Link>
        </div>
      </section>
    </>
  )
}

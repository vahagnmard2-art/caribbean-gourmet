import Link from 'next/link'
import { navLinks, hours, BUSINESS } from '@/lib/site-config'
import { CurrentYear } from './CurrentYear'

const socialLinks = [
  { href: BUSINESS.instagram, label: 'Instagram' },
  { href: BUSINESS.yelp,      label: 'Yelp' },
]

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-obsidian)',
        borderTop: '1px solid var(--color-border-dark)',
      }}
    >
      <div className="container" style={{ paddingBlock: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem 3rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--color-coconut)',
                marginBottom: '0.75rem',
                lineHeight: 1.2,
              }}
            >
              Caribbean Gourmet
            </p>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-primary-muted)',
                lineHeight: 1.6,
                maxWidth: '26ch',
              }}
            >
              Authentic Guyanese and Caribbean cuisine, cooked from scratch by
              Chef Yonette Alleyne since 2015.
            </p>
          </div>

          {/* Hours */}
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>
              Hours
            </p>
            <dl>
              {hours.map(({ days, time, muted }) => (
                <div
                  key={days}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                    marginBottom: '0.4rem',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.875rem',
                    color: muted ? 'var(--color-text-primary-muted)' : 'rgba(250,248,242,0.82)',
                  }}
                >
                  <dt>{days}</dt>
                  <dd style={{ margin: 0 }}>{time}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label" style={{ marginBottom: '1rem' }}>
              Find Us
            </p>
            <address
              style={{
                fontStyle: 'normal',
                fontSize: '0.875rem',
                color: 'rgba(250,248,242,0.8)',
                lineHeight: 1.6,
              }}
            >
              <p>{BUSINESS.address}</p>
              <p>{BUSINESS.venue}</p>
              <p>{BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}</p>
              <a
                href={BUSINESS.phoneHref}
                style={{
                  display: 'block',
                  marginTop: '0.75rem',
                  fontFamily: 'var(--font-ui)',
                  fontWeight: 600,
                  color: 'var(--color-coconut)',
                  transition: 'color 150ms ease',
                }}
              >
                {BUSINESS.phone}
              </a>
            </address>

            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1.25rem' }}>
              {socialLinks.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="muted-link"
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-border-dark)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <nav aria-label="Footer navigation">
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem 1.75rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="muted-link"
                    style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8125rem' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="muted-link"
                  style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8125rem' }}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.8125rem',
              color: 'var(--color-text-primary-muted)',
            }}
          >
            &copy; <CurrentYear /> Caribbean Gourmet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

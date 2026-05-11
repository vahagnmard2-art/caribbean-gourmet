import type { Metadata } from 'next'
import Link from 'next/link'
import { MenuClient } from './MenuClient'

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Slow-braised oxtail, jerk chicken, chicken curry with roti, handmade patties, Guyanese pastries and more. At Blossom Market Hall, San Gabriel. Wed–Sun, made from scratch daily.',
  alternates: { canonical: '/menu' },
}

export default function MenuPage() {
  return (
    <>
      {/* Page header */}
      <div
        style={{
          backgroundColor: 'var(--color-obsidian)',
          borderBottom: '1px solid var(--color-border-dark)',
          paddingTop: 'calc(4.5rem + 2.5rem)',
          paddingBottom: '2.5rem',
        }}
      >
        <div className="container">
          <span className="section-label" style={{ marginBottom: '0.5rem' }}>
            Our Food
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              color: 'var(--color-coconut)',
              marginBottom: '1rem',
            }}
          >
            The Menu
          </h1>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '50ch',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}
          >
            Everything is made from scratch. Weekend specials — doubles, crab soup,
            and baked mac &amp; cheese — are available Friday through Sunday only.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.875rem', color: 'var(--color-text-primary-muted)' }}>
              Dietary key:
            </span>
            {[
              { label: '🌿 Vegan', color: 'var(--color-callaloo)' },
              { label: '🕌 Halal', color: 'var(--color-saffron)' },
              { label: '🌾 GF', color: 'var(--color-text-primary-muted)' },
            ].map(({ label, color }) => (
              <span
                key={label}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '3px',
                  backgroundColor: 'rgba(250,248,242,0.06)',
                  border: '1px solid var(--color-border-dark)',
                  color,
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive menu — client component handles filtering */}
      <MenuClient />

      {/* Order CTA */}
      <section
        style={{
          backgroundColor: 'var(--color-obsidian)',
          borderTop: '1px solid var(--color-border-dark)',
          paddingBlock: 'clamp(3rem, 6vw, 5rem)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: 'var(--color-coconut)',
              lineHeight: 1.3,
              marginBottom: '0.75rem',
            }}
          >
            Ready to Order?
          </h2>
          <p
            style={{
              color: 'var(--color-text-secondary)',
              maxWidth: '40ch',
              margin: '0 auto 1.75rem',
            }}
          >
            Call ahead to confirm availability.
            The oxtail sells out early — don&apos;t miss it.
          </p>
          <a href="tel:+16267704004" className="btn-primary" style={{ fontSize: '1rem' }}>
            Call to Order: (626) 770-4004
          </a>
          <p
            style={{
              marginTop: '1.25rem',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.875rem',
              color: 'var(--color-text-primary-muted)',
            }}
          >
            Want to plan a full event?{' '}
            <Link href="/catering" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>
              Inquire about catering →
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}

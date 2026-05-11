import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section
      aria-label="Caribbean Gourmet — Guyanese and Caribbean food in San Gabriel"
      style={{
        position: 'relative',
        minHeight: 'max(100vh, 100svh)',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        overflow: 'hidden',
      }}
    >
      {/* Hero image — swap src for real food photo */}
      <Image
        src="/images/hero.jpg"
        alt="Caribbean Gourmet jerk chicken with smoky char, caramelized plantains, rice and peas at Blossom Market Hall"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
      />

      {/* Gradient overlay: food visible at top, text legible at bottom */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(13,7,2,0.97) 0%, rgba(13,7,2,0.55) 45%, rgba(13,7,2,0.15) 100%)',
        }}
      />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="section-label" style={{ marginBottom: '1rem' }}>
          Blossom Market Hall · San Gabriel, CA
        </span>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            color: 'var(--color-coconut)',
            maxWidth: '16ch',
            marginTop: '0.75rem',
            marginBottom: '1.25rem',
          }}
        >
          A Taste of Guyana in the Heart of{' '}
          <em style={{ fontStyle: 'italic', color: 'var(--color-gold)' }}>
            San Gabriel
          </em>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(250,248,242,0.82)',
            maxWidth: '48ch',
            marginBottom: '2.25rem',
            lineHeight: 1.6,
          }}
        >
          Slow-braised oxtail, handmade roti, jerk chicken, and fresh Guyanese
          pastries — made from scratch by Auntie Yonette since 2015.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            href="/menu"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}
          >
            Order Now
          </Link>
          <Link
            href="/catering"
            className="btn-outline"
            style={{ fontSize: '1rem', padding: '0.875rem 2rem' }}
          >
            Plan Your Event
          </Link>
        </div>

        <p
          style={{
            marginTop: '2rem',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.875rem',
            color: 'var(--color-text-body-compact)',
            letterSpacing: '0.03em',
          }}
        >
          Wed–Thu &amp; Sun 11am–8pm &nbsp;·&nbsp; Fri–Sat 11am–9pm &nbsp;·&nbsp; Mon–Tue Closed
        </p>
      </div>
    </section>
  )
}

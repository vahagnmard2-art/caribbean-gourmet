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
        paddingBottom: 'clamp(5rem, 10vw, 8rem)',
        overflow: 'hidden',
      }}
    >
      {/* Hero image */}
      <Image
        src="/images/hero.jpg"
        alt="Caribbean Gourmet jerk chicken with smoky char, caramelized plantains, rice and peas at Blossom Market Hall"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
      />

      {/* Premium gradient overlay with multiple layers for depth */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to top, rgba(13,7,2,0.98) 0%, rgba(13,7,2,0.85) 25%, rgba(13,7,2,0.4) 55%, rgba(13,7,2,0.1) 100%),
            linear-gradient(135deg, rgba(200,150,12,0.03) 0%, transparent 50%)
          `,
        }}
      />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span 
          className="section-label" 
          style={{ 
            marginBottom: '0.75rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span 
            style={{ 
              width: '24px', 
              height: '1px', 
              backgroundColor: 'var(--color-gold)',
              opacity: 0.6,
            }} 
            aria-hidden="true"
          />
          Blossom Market Hall · San Gabriel, CA
        </span>

        <h1
          style={{
            fontSize: 'clamp(2.75rem, 7vw, 5rem)',
            fontWeight: 700,
            color: 'var(--color-coconut)',
            maxWidth: '15ch',
            marginTop: '0.75rem',
            marginBottom: '1.5rem',
            lineHeight: 1.05,
          }}
        >
          A Taste of Guyana in the Heart of{' '}
          <em 
            style={{ 
              fontStyle: 'italic', 
              color: 'var(--color-gold)',
              display: 'inline-block',
            }}
          >
            San Gabriel
          </em>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
            color: 'rgba(250,248,242,0.8)',
            maxWidth: '46ch',
            marginBottom: '2.5rem',
            lineHeight: 1.7,
          }}
        >
          Slow-braised oxtail, handmade roti, jerk chicken, and fresh Guyanese
          pastries — made from scratch by Auntie Yonette since 2015.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}>
          <Link
            href="/menu"
            className="btn-primary"
            style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}
          >
            Order Now
          </Link>
          <Link
            href="/catering"
            className="btn-outline"
            style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}
          >
            Plan Your Event
          </Link>
        </div>

        <div
          style={{
            marginTop: '2.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(250,248,242,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.8125rem',
              color: 'rgba(250,248,242,0.5)',
              letterSpacing: '0.02em',
            }}
          >
            Wed–Thu &amp; Sun 11am–8pm &nbsp;·&nbsp; Fri–Sat 11am–9pm
          </p>
          <span
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.6875rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-pepper)',
              backgroundColor: 'rgba(168,40,30,0.15)',
              padding: '0.25rem 0.625rem',
              borderRadius: '4px',
            }}
          >
            Mon–Tue Closed
          </span>
        </div>
      </div>
    </section>
  )
}

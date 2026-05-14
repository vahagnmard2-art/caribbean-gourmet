import Link from 'next/link'

export function GuyanaNight() {
  const now = new Date()
  // Flip to next year starting July 27 — show current year's date on the day itself
  const dayAfterEvent = new Date(now.getFullYear(), 6, 27)
  const eventYear = now >= dayAfterEvent ? now.getFullYear() + 1 : now.getFullYear()

  return (
    <section
      aria-labelledby="guyana-night-heading"
      style={{
        backgroundColor: 'var(--color-callaloo)',
        paddingBlock: 'clamp(3.5rem, 7vw, 6rem)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        <div style={{ maxWidth: '520px' }}>
          <span
            className="section-label"
            style={{ color: 'var(--color-gold-light)', marginBottom: '0.75rem' }}
          >
            Annual Event
          </span>
          <h2
            id="guyana-night-heading"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: 'var(--color-coconut)',
              marginTop: '0.25rem',
              marginBottom: '1rem',
            }}
          >
            Guyana Night — July 26, {eventYear}
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(250,248,242,0.82)',
              lineHeight: 1.6,
            }}
          >
            Every year on Guyanese Independence Day, we go all in — rare dishes,
            full cultural spread, live music, and the whole community together.
            Join our VIP list to be first to know when tickets drop.
          </p>
        </div>

        <Link href="/contact#vip" className="btn-primary" style={{ fontSize: '1rem' }}>
          Join the VIP List
        </Link>
      </div>
    </section>
  )
}

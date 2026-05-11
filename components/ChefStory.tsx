import Image from 'next/image'
import Link from 'next/link'

export function ChefStory() {
  return (
    <section
      className="section-pad"
      aria-labelledby="chef-story-heading"
      style={{ backgroundColor: 'var(--color-roti)' }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Copy — left on desktop */}
          <div>
            <span
              className="section-label"
              style={{ color: 'var(--color-saffron)', marginBottom: '1rem' }}
            >
              The Cook Behind the Kitchen
            </span>

            <h2
              id="chef-story-heading"
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
                marginTop: '0.5rem',
                marginBottom: '1.5rem',
                maxWidth: '18ch',
              }}
            >
              She asked for a chef&rsquo;s coat on her{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-saffron)' }}>
                11th birthday.
              </em>
            </h2>

            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                marginBottom: '1rem',
              }}
            >
              Yonette Alleyne grew up in Guyana, watching her mother bake while being
              told to pursue &ldquo;a nice office job.&rdquo; She did not listen. By 18,
              she was supplying two bakeries with handmade pastries. Her mother obliged
              that childhood birthday request — and in doing so, set everything in motion.
            </p>

            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--color-text-muted)',
                lineHeight: 1.6,
                marginBottom: '2rem',
              }}
            >
              After 25 years in Los Angeles — including 14 years running supermarket
              bakeries and seven more building a devoted following at the Crenshaw and
              Atwater Village farmers markets — Auntie Yonette opened her first
              brick-and-mortar at Blossom Market Hall in December 2021.
              Every roti is still rolled by hand. Nothing about that has changed.
            </p>

            <Link
              href="/about"
              style={{
                display: 'inline-block',
                paddingBlock: '0.75rem',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.9375rem',
                fontWeight: 700,
                color: 'var(--color-saffron)',
                letterSpacing: '0.03em',
                transition: 'opacity 150ms ease',
              }}
            >
              Read Her Full Story →
            </Link>
          </div>

          {/* Portrait — right on desktop */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '4/5',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 24px 60px rgba(26,14,5,0.25)',
            }}
          >
            <Image
              src="/images/yonette-alleyne.jpg"
              alt="Chef Yonette Alleyne, owner of Caribbean Gourmet, at work in the Blossom Market Hall kitchen in San Gabriel, CA"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'top center' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

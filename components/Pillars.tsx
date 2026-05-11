import Image from 'next/image'
import Link from 'next/link'

const pillars = [
  {
    id: 'dine-in',
    image: '/images/pillar-dine-in.jpg',
    imageAlt: 'Oxtail stew platter with rice and plantains at Caribbean Gourmet',
    label: 'Dine In',
    headline: 'Walk In & Eat Well',
    body: 'Find us at Blossom Market Hall Wednesday through Sunday. The oxtail sells out early. Come hungry.',
    cta: 'View Menu',
    href: '/menu',
  },
  {
    id: 'catering',
    image: '/images/pillar-catering.jpg',
    imageAlt: 'Caribbean food spread for a catered event by Caribbean Gourmet',
    label: 'Catering',
    headline: 'Your Event, Our Kitchen',
    body: 'From family reunions to corporate lunches, we bring the Caribbean to your table. Halal, vegan, and gluten-free options available.',
    cta: 'Get a Quote',
    href: '/catering',
  },
  {
    id: 'products',
    image: '/images/pillar-products.jpg',
    imageAlt: 'Caribbean Gourmet house-made pepper sauce and packaged pastries',
    label: 'Food Products',
    headline: 'Take the Flavors Home',
    body: 'House-made pepper sauce, Guyanese seasonings, and packaged pastries — available for purchase at the stall.',
    cta: 'Learn More',
    href: '/menu#products',
  },
]

export function Pillars() {
  return (
    <section className="section-pad" aria-labelledby="pillars-heading">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
          How We Serve You
        </p>
        <h2
          id="pillars-heading"
          style={{
            textAlign: 'center',
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            color: 'var(--color-coconut)',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
          }}
        >
          Three Ways to Experience Caribbean Gourmet
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {pillars.map(({ id, image, imageAlt, label, headline, body, cta, href }) => (
            <article
              key={id}
              style={{
                backgroundColor: 'var(--color-obsidian)',
                border: '1px solid var(--color-border-dark)',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3' }}>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span className="section-label" style={{ marginBottom: '0.5rem' }}>
                  {label}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    color: 'var(--color-coconut)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.2,
                  }}
                >
                  {headline}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                    flexGrow: 1,
                    marginBottom: '1.5rem',
                  }}
                >
                  {body}
                </p>
                <Link
                  href={href}
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    alignSelf: 'flex-start',
                    paddingBlock: '0.75rem',
                  }}
                  className="gold-link"
                >
                  {cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

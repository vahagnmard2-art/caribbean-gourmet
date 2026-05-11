import Image from 'next/image'
import Link from 'next/link'

const dishes = [
  {
    id: 'oxtail',
    name: 'Oxtail Stew',
    description:
      'Slow-braised until the meat falls from the bone. Served with bean-flecked rice, caramelized plantains, and stewed cabbage. The housemade habanero sauce is not mild.',
    image: '/images/dish-oxtail.jpg',
    imageAlt: 'Slow-braised oxtail stew served over rice with plantains and cabbage at Caribbean Gourmet',
    tag: 'Most Ordered',
    tagColor: 'var(--color-pepper)',
  },
  {
    id: 'jerk-chicken',
    name: 'Jerk Chicken',
    description:
      "An enormous portion of dark meat — smoky exterior, peppery rub, juicy throughout. Auntie Yonette's recipe since the Crenshaw Market days.",
    image: '/images/dish-jerk-chicken.jpg',
    imageAlt: 'Caribbean jerk chicken with smoky skin and peppery rub at Caribbean Gourmet San Gabriel',
    tag: null,
    tagColor: null,
  },
  {
    id: 'curry-roti',
    name: 'Chicken Curry with Roti',
    description:
      'Guyanese curry — the spice balance is deeper and more layered than Jamaican style. The roti is rolled to order, every time.',
    image: '/images/dish-curry-roti.jpg',
    imageAlt: 'Guyanese chicken curry served with freshly rolled roti at Caribbean Gourmet',
    tag: 'Guyanese Classic',
    tagColor: 'var(--color-callaloo)',
  },
  {
    id: 'cheese-roll',
    name: 'Cheese Roll',
    description:
      'Buttery, tube-shaped pastry with subtly funky sharp white cheddar. Shatters when you bite it. Made fresh. One is never enough.',
    image: '/images/dish-cheese-roll.jpg',
    imageAlt: 'Freshly baked Guyanese cheese rolls at Caribbean Gourmet San Gabriel',
    tag: 'House-Baked',
    tagColor: 'var(--color-saffron)',
  },
]

export function MenuPreview() {
  return (
    <section className="section-pad" aria-labelledby="menu-preview-heading">
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: '0.5rem' }}>
              What to Order
            </p>
            <h2
              id="menu-preview-heading"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                color: 'var(--color-coconut)',
              }}
            >
              Signature Dishes
            </h2>
          </div>
          <Link
            href="/menu"
            className="btn-outline"
            style={{ fontSize: '0.875rem', padding: '0.75rem 1.25rem' }}
          >
            See Full Menu
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {dishes.map(({ id, name, description, image, imageAlt, tag, tagColor }) => (
            <article
              key={id}
              style={{
                backgroundColor: 'var(--color-obsidian)',
                border: '1px solid var(--color-border-dark)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '4/3' }}>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
                {tag && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      backgroundColor: tagColor ?? 'var(--color-gold)',
                      color: 'var(--color-coconut)',
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.25rem 0.625rem',
                      borderRadius: '3px',
                    }}
                  >
                    {tag}
                  </span>
                )}
              </div>

              <div style={{ padding: '1.25rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--color-coconut)',
                    marginBottom: '0.5rem',
                    lineHeight: 1.2,
                  }}
                >
                  {name}
                </h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link href="/menu" className="btn-primary" style={{ fontSize: '1rem' }}>
            View Full Menu &amp; Order Online
          </Link>
        </div>
      </div>
    </section>
  )
}

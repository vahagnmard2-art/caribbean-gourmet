'use client'
import { useState } from 'react'
import { menuItems, categoryLabels, dietaryLabels, type MenuCategory } from '@/lib/menu-data'

const ALL = 'all' as const
type Filter = typeof ALL | MenuCategory

const filters: { value: Filter; label: string }[] = [
  { value: 'all',      label: 'All' },
  { value: 'plates',   label: 'Plates' },
  { value: 'patties',  label: 'Patties' },
  { value: 'pastries', label: 'Pastries' },
  { value: 'beverages',label: 'Beverages' },
  { value: 'specials', label: 'Weekend Specials' },
]

export function MenuClient() {
  const [active, setActive] = useState<Filter>('all')

  const visible = active === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === active)

  return (
    <div style={{ paddingBlock: '2.5rem' }}>
      {/* Sticky filter bar */}
      <div
        className="scrollbar-none"
        style={{
          position: 'sticky',
          top: '4.5rem',
          zIndex: 10,
          backgroundColor: 'var(--color-molasses)',
          borderBottom: '1px solid var(--color-border-dark)',
          overflowX: 'auto',
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', gap: '0', padding: '0 clamp(1.25rem, 5vw, 3rem)' }}
        >
          {filters.map(({ value, label }) => {
            const isActive = active === value
            return (
              <button
                key={value}
                onClick={() => setActive(value)}
                style={{
                  padding: '0.875rem 1.25rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '2px solid var(--color-gold)' : '2px solid transparent',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--color-gold)' : 'rgba(250,248,242,0.6)',
                  whiteSpace: 'nowrap',
                  transition: 'color 150ms ease, border-color 150ms ease',
                }}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Items */}
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        {/* Group by category when showing all */}
        {active === 'all' ? (
          Object.entries(categoryLabels).map(([cat, catLabel]) => {
            const items = menuItems.filter((item) => item.category === cat)
            if (items.length === 0) return null
            return (
              <div key={cat} style={{ marginBottom: '3.5rem' }}>
                <h2
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.375rem',
                    color: 'var(--color-coconut)',
                    marginBottom: '1.5rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--color-border-dark)',
                  }}
                >
                  {catLabel}
                  {cat === 'specials' && (
                    <span
                      style={{
                        marginLeft: '0.75rem',
                        fontFamily: 'var(--font-ui)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--color-saffron)',
                      }}
                    >
                      Fri–Sun Only
                    </span>
                  )}
                </h2>
                <MenuGrid items={items} />
              </div>
            )
          })
        ) : (
          <MenuGrid items={visible} />
        )}
      </div>
    </div>
  )
}

function MenuGrid({ items }: { items: typeof menuItems }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.25rem',
      }}
    >
      {items.map((item) => (
        <article
          key={item.id}
          className="menu-card card"
          style={{
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            opacity: item.soldOut ? 0.5 : 1,
          }}
        >
          <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            {item.weekendOnly && (
              <span
                style={{
                  alignSelf: 'flex-start',
                  marginBottom: '0.5rem',
                  backgroundColor: 'var(--color-saffron)',
                  color: 'var(--color-coconut)',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '3px',
                }}
              >
                Fri–Sun
              </span>
            )}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: 'var(--color-coconut)',
                  lineHeight: 1.2,
                }}
              >
                {item.name}
              </h3>
              {item.price !== null && (
                <span
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-gold)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  ${item.price.toFixed(2)}
                </span>
              )}
            </div>

            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-body-compact)',
                lineHeight: 1.6,
                flexGrow: 1,
                marginBottom: (item.tags.length > 0 || item.soldOut) ? '1rem' : 0,
              }}
            >
              {item.description}
            </p>

            {(item.tags.length > 0 || item.soldOut) && (
              <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                {item.soldOut && (
                  <span
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '3px',
                      backgroundColor: 'rgba(250,248,242,0.06)',
                      border: '1px solid var(--color-border-dark)',
                      color: 'var(--color-text-primary-muted)',
                    }}
                  >
                    Sold Out
                  </span>
                )}
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-ui)',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '3px',
                      backgroundColor: 'rgba(250,248,242,0.06)',
                      border: '1px solid var(--color-border-dark)',
                      color: tag === 'vegan'
                        ? 'var(--color-callaloo)'
                        : tag === 'halal'
                        ? 'var(--color-saffron)'
                        : 'var(--color-text-primary-muted)',
                    }}
                  >
                    {dietaryLabels[tag]}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}

'use client'
import { useState } from 'react'
import Image from 'next/image'

type GalleryCategory = 'all' | 'food' | 'events'

const photos = [
  {
    id: 'g1',
    src: '/images/gallery/oxtail-closeup.jpg',
    alt: 'Slow-braised oxtail stew with rich gravy, rice, plantains, and coleslaw at Caribbean Gourmet',
    category: 'food' as const,
    span: 'wide',
  },
  {
    id: 'g2',
    src: '/images/gallery/jerk-chicken-plate.jpg',
    alt: 'Jerk chicken with smoky crust, plantains, rice and peas, and coleslaw at Caribbean Gourmet',
    category: 'food' as const,
    span: 'normal',
  },
  {
    id: 'g3',
    src: '/images/gallery/cheese-roll-bite.jpg',
    alt: 'Freshly baked Guyanese pastry split open to show the filling at Caribbean Gourmet',
    category: 'food' as const,
    span: 'normal',
  },
  {
    id: 'g4',
    src: '/images/gallery/guyana-night.jpg',
    alt: 'Blossom Market Hall in San Gabriel — home of Caribbean Gourmet and the annual Guyana Night celebration',
    category: 'events' as const,
    span: 'wide',
  },
  {
    id: 'g5',
    src: '/images/gallery/catering-spread.jpg',
    alt: 'Caribbean Gourmet jerk chicken plate served at a catering event',
    category: 'events' as const,
    span: 'normal',
  },
  {
    id: 'g6',
    src: '/images/gallery/sorrel-drinks.jpg',
    alt: 'Slow-braised oxtail served in a bowl with housemade bread at Caribbean Gourmet',
    category: 'food' as const,
    span: 'normal',
  },
  {
    id: 'g7',
    src: '/images/gallery/pine-tarts.jpg',
    alt: 'Fresh Guyanese pine tarts — flaky pastry with pineapple jam filling — at Caribbean Gourmet',
    category: 'food' as const,
    span: 'normal',
  },
]

const filters: { value: GalleryCategory; label: string }[] = [
  { value: 'all',    label: 'All Photos' },
  { value: 'food',   label: 'Food' },
  { value: 'events', label: 'Events' },
]

export function GalleryClient() {
  const [active, setActive] = useState<GalleryCategory>('all')

  const visible = active === 'all' ? photos : photos.filter((p) => p.category === active)

  return (
    <div style={{ paddingBlock: '2.5rem' }}>
      {/* Filter tabs */}
      <div
        className="scrollbar-none"
        style={{
          position: 'sticky',
          top: 'var(--nav-height)',
          zIndex: 10,
          backgroundColor: 'var(--color-molasses)',
          borderBottom: '1px solid var(--color-border-dark)',
          overflowX: 'auto',
        }}
      >
        <div
          role="tablist"
          aria-label="Filter photos by category"
          className="container"
          style={{ display: 'flex', padding: '0 clamp(1.25rem, 5vw, 3rem)' }}
        >
          {filters.map(({ value, label }) => {
            const isActive = active === value
            return (
              <button
                key={value}
                role="tab"
                aria-selected={isActive}
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

      {/* Editorial grid — left-to-right, row-by-row ordering */}
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {visible.map(({ id, src, alt, span }) => (
            <div
              key={id}
              className="gallery-card"
              style={{
                gridColumn: span === 'wide' ? 'span 2' : undefined,
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: 'var(--color-obsidian)',
              }}
            >
              <Image
                src={src}
                alt={alt}
                width={600}
                height={450}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

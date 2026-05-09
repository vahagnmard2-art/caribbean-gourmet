'use client'
import { useState } from 'react'
import Image from 'next/image'

type GalleryCategory = 'all' | 'food' | 'events' | 'kitchen'

const photos = [
  {
    id: 'g1',
    src: '/images/gallery/oxtail-closeup.jpg',
    alt: 'Close-up of slow-braised oxtail stew with rich gravy at Caribbean Gourmet',
    category: 'food' as const,
    span: 'wide',
  },
  {
    id: 'g2',
    src: '/images/gallery/roti-hands.jpg',
    alt: 'Auntie Yonette rolling fresh roti dough by hand at Caribbean Gourmet',
    category: 'kitchen' as const,
    span: 'normal',
  },
  {
    id: 'g3',
    src: '/images/gallery/patties-tray.jpg',
    alt: 'Freshly baked Caribbean beef and chicken patties on a tray at Caribbean Gourmet',
    category: 'food' as const,
    span: 'normal',
  },
  {
    id: 'g4',
    src: '/images/gallery/guyana-night.jpg',
    alt: 'Caribbean Gourmet Guyana Night event at Blossom Market Hall San Gabriel',
    category: 'events' as const,
    span: 'wide',
  },
  {
    id: 'g5',
    src: '/images/gallery/cheese-roll-bite.jpg',
    alt: 'Guyanese cheese roll showing the flaky crust and sharp cheddar filling',
    category: 'food' as const,
    span: 'normal',
  },
  {
    id: 'g6',
    src: '/images/gallery/jerk-chicken-plate.jpg',
    alt: 'Caribbean jerk chicken plated with rice and peas at Caribbean Gourmet',
    category: 'food' as const,
    span: 'normal',
  },
  {
    id: 'g7',
    src: '/images/gallery/yonette-market.jpg',
    alt: 'Chef Yonette Alleyne serving customers at the Caribbean Gourmet stall in Blossom Market Hall',
    category: 'kitchen' as const,
    span: 'normal',
  },
  {
    id: 'g8',
    src: '/images/gallery/catering-spread.jpg',
    alt: 'Full Caribbean catering spread by Caribbean Gourmet for a large event',
    category: 'events' as const,
    span: 'wide',
  },
  {
    id: 'g9',
    src: '/images/gallery/sorrel-drinks.jpg',
    alt: 'Caribbean sorrel and tamarind drinks in glasses at Caribbean Gourmet',
    category: 'food' as const,
    span: 'normal',
  },
  {
    id: 'g10',
    src: '/images/gallery/pine-tarts.jpg',
    alt: 'Fresh Guyanese pine tarts ready to serve at Caribbean Gourmet',
    category: 'food' as const,
    span: 'normal',
  },
]

const filters: { value: GalleryCategory; label: string }[] = [
  { value: 'all',     label: 'All Photos' },
  { value: 'food',    label: 'Food' },
  { value: 'kitchen', label: 'Behind the Scenes' },
  { value: 'events',  label: 'Events' },
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
          top: '4.5rem',
          zIndex: 10,
          backgroundColor: 'var(--color-molasses)',
          borderBottom: '1px solid var(--color-border-dark)',
          overflowX: 'auto',
        }}
      >
        <div className="container" style={{ display: 'flex', padding: '0 clamp(1.25rem, 5vw, 3rem)' }}>
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

      {/* Masonry-style grid */}
      <div className="container" style={{ paddingTop: '2rem' }}>
        <div
          style={{
            columns: 'auto 280px',
            columnGap: '1rem',
            gap: '1rem',
          }}
        >
          {visible.map(({ id, src, alt }) => (
            <div
              key={id}
              style={{
                breakInside: 'avoid',
                marginBottom: '1rem',
                borderRadius: '6px',
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

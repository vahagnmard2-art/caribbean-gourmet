import type { Metadata } from 'next'
import { GalleryClient } from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos of oxtail stew, jerk chicken, handmade roti, Guyanese pastries, and events at Caribbean Gourmet — Blossom Market Hall, San Gabriel, CA.',
}

export default function GalleryPage() {
  return (
    <>
      <div
        style={{
          backgroundColor: 'var(--color-obsidian)',
          paddingTop: 'calc(4.5rem + 3rem)',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--color-border-dark)',
        }}
      >
        <div className="container">
          <span className="section-label" style={{ marginBottom: '0.75rem' }}>
            Gallery
          </span>
          <h1
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              color: 'var(--color-coconut)',
            }}
          >
            The Food, The Kitchen, The Community
          </h1>
        </div>
      </div>

      <GalleryClient />
    </>
  )
}

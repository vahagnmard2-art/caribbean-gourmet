import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'var(--nav-height)',
        paddingInline: 'clamp(1.25rem, 5vw, 3rem)',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(5rem, 15vw, 10rem)',
          fontWeight: 700,
          lineHeight: 1,
          color: 'var(--color-border-dark)',
          display: 'block',
          marginBottom: '1rem',
        }}
      >
        404
      </span>

      <span className="section-label" style={{ marginBottom: '0.75rem' }}>
        Page Not Found
      </span>

      <h1
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: 'var(--color-coconut)',
          marginBottom: '1rem',
          marginTop: '0.25rem',
        }}
      >
        That page doesn&rsquo;t exist.
      </h1>

      <p
        style={{
          fontSize: '1.0625rem',
          color: 'var(--color-text-secondary)',
          maxWidth: '38ch',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
        }}
      >
        Try the menu, or head back home and start from there.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <Link href="/" className="btn-primary">
          Back Home
        </Link>
        <Link href="/menu" className="btn-outline">
          View Menu
        </Link>
      </div>

      <p
        style={{
          marginTop: '3rem',
          fontFamily: 'var(--font-ui)',
          fontSize: '0.875rem',
          color: 'var(--color-text-primary-muted)',
        }}
      >
        Looking for catering?{' '}
        <Link href="/catering" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>
          Request a quote →
        </Link>
      </p>
    </div>
  )
}

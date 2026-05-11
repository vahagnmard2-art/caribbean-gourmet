'use client'
import Link from 'next/link'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
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
      <span className="section-label" style={{ marginBottom: '0.75rem' }}>
        Something Went Wrong
      </span>

      <h1
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          color: 'var(--color-coconut)',
          marginBottom: '1rem',
          marginTop: '0.25rem',
        }}
      >
        An unexpected error occurred.
      </h1>

      <p
        style={{
          fontSize: '1.0625rem',
          color: 'var(--color-text-secondary)',
          maxWidth: '42ch',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
        }}
      >
        We&rsquo;re sorry about that. Try again, or reach us directly at{' '}
        <a href="tel:+16267704004" style={{ color: 'var(--color-gold)' }}>
          (626) 770-4004
        </a>
        .
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <button onClick={reset} className="btn-primary">
          Try Again
        </button>
        <Link href="/" className="btn-outline">
          Back Home
        </Link>
      </div>
    </div>
  )
}

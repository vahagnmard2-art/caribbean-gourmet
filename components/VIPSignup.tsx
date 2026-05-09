'use client'
import { useState } from 'react'

export function VIPSignup() {
  const [email, setEmail]   = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/vip-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      aria-labelledby="vip-heading"
      style={{
        paddingBlock: 'clamp(4rem, 8vw, 7rem)',
        backgroundColor: 'var(--color-obsidian)',
        borderTop: '1px solid var(--color-border-dark)',
      }}
    >
      <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
        <span className="section-label" style={{ color: 'var(--color-gold-light)', marginBottom: '0.75rem' }}>
          VIP Members
        </span>

        <h2
          id="vip-heading"
          style={{
            fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
            color: 'var(--color-coconut)',
            marginTop: '0.25rem',
            marginBottom: '1rem',
          }}
        >
          Auntie Yonette&rsquo;s Inner Circle
        </h2>

        <p
          style={{
            fontSize: '1.0625rem',
            color: 'rgba(250,248,242,0.78)',
            lineHeight: 1.65,
            marginBottom: '2rem',
          }}
        >
          Be first for secret menus, early access to weekend specials, Guyana Night
          tickets, and exclusive loyalty rewards. No spam — just good food news.
        </p>

        {status === 'success' ? (
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '1.125rem',
              fontWeight: 600,
              color: 'var(--color-gold-light)',
            }}
            role="status"
          >
            Welcome to the family. Watch your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              maxWidth: '480px',
              margin: '0 auto',
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <label htmlFor="vip-email" className="sr-only">
                Email address
              </label>
              <input
                id="vip-email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '0.75rem 1rem',
                  borderRadius: '4px',
                  border: '1.5px solid var(--color-border-dark)',
                  backgroundColor: 'rgba(250,248,242,0.06)',
                  color: 'var(--color-coconut)',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.9375rem',
                  outline: 'none',
                  transition: 'border-color 150ms ease',
                }}
                onFocus={(e) => { e.target.style.borderColor = 'var(--color-gold)' }}
                onBlur={(e)  => { e.target.style.borderColor = 'var(--color-border-dark)' }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary"
              >
                {status === 'loading' ? 'Joining…' : 'Join VIP — Free'}
              </button>
            </div>

            {status === 'error' && (
              <p
                role="alert"
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(250,248,242,0.6)',
                  textAlign: 'left',
                }}
              >
                Something went wrong. Email us at{' '}
                <a
                  href="mailto:hello@caribbeangourmet.co"
                  style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}
                >
                  hello@caribbeangourmet.co
                </a>
              </p>
            )}
          </form>
        )}

        <p
          style={{
            marginTop: '1.25rem',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.75rem',
            color: 'rgba(250,248,242,0.35)',
          }}
        >
          We will never share your email. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

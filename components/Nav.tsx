'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { href: '/menu',     label: 'Menu' },
  { href: '/catering', label: 'Catering' },
  { href: '/about',    label: 'Our Story' },
  { href: '/gallery',  label: 'Gallery' },
  { href: '/contact',  label: 'Contact' },
]

export function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color 300ms ease, box-shadow 300ms ease',
        backgroundColor: scrolled ? 'rgba(26,14,5,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(61,36,16,0.6)' : 'none',
      }}
    >
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4.5rem' }}>
        {/* Logo */}
        <Link
          href="/"
          aria-label="Caribbean Gourmet — Home"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--color-coconut)',
            letterSpacing: '-0.02em',
          }}
        >
          Caribbean Gourmet
        </Link>

        {/* Desktop nav */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'rgba(250,248,242,0.8)',
                  transition: 'color 150ms ease',
                }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--color-gold)' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(250,248,242,0.8)' }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/menu" className="btn-primary hidden-mobile" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem' }}>
            Order Now
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="show-mobile"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: 'var(--color-coconut)',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'currentColor',
                transition: 'transform 200ms ease',
                transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'currentColor',
                transition: 'opacity 200ms ease',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                backgroundColor: 'currentColor',
                transition: 'transform 200ms ease',
                transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="show-mobile"
        style={{
          display: open ? 'block' : 'none',
          backgroundColor: 'var(--color-obsidian)',
          borderTop: '1px solid var(--color-border-dark)',
          padding: '1.5rem',
        }}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--font-ui)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--color-coconut)',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/menu"
          className="btn-primary"
          onClick={() => setOpen(false)}
          style={{ marginTop: '1.5rem', width: '100%' }}
        >
          Order Now
        </Link>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile   { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: flex !important; }
        }
      `}</style>
    </header>
  )
}

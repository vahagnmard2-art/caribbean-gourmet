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
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background-color 400ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 400ms cubic-bezier(0.16, 1, 0.3, 1), backdrop-filter 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(26,14,5,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(180%)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(61,36,16,0.5), 0 4px 20px rgba(0,0,0,0.15)' : 'none',
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
            transition: 'opacity 150ms ease',
          }}
        >
          Caribbean Gourmet
        </Link>

        {/* Desktop nav */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.25rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: isActive ? 'var(--color-gold)' : 'rgba(250,248,242,0.75)',
                    transition: 'color 150ms cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    paddingBottom: '2px',
                  }}
                  onMouseEnter={(e) => { if (!isActive) (e.target as HTMLElement).style.color = 'var(--color-coconut)' }}
                  onMouseLeave={(e) => { if (!isActive) (e.target as HTMLElement).style.color = 'rgba(250,248,242,0.75)' }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/menu" className="btn-primary hidden-mobile" style={{ fontSize: '0.8125rem', padding: '0.625rem 1.25rem' }}>
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
              padding: '0.625rem',
              color: 'var(--color-coconut)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '44px',
              height: '44px',
              gap: '6px',
              borderRadius: '8px',
              transition: 'background-color 150ms ease',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: 'currentColor',
                borderRadius: '1px',
                transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1), opacity 250ms cubic-bezier(0.16, 1, 0.3, 1)',
                transform: open ? 'rotate(45deg) translate(5.5px, 5.5px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: 'currentColor',
                borderRadius: '1px',
                transition: 'opacity 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: 'currentColor',
                borderRadius: '1px',
                transition: 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1), opacity 250ms cubic-bezier(0.16, 1, 0.3, 1)',
                transform: open ? 'rotate(-45deg) translate(5.5px, -5.5px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu with slide animation */}
      <div
        id="mobile-menu"
        className="show-mobile"
        style={{
          position: 'fixed',
          top: '4.5rem',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'var(--color-obsidian)',
          borderTop: '1px solid var(--color-border-dark)',
          padding: '2rem 1.5rem',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          opacity: open ? 1 : 0,
          transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1), opacity 250ms cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {links.map(({ href, label }, index) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--color-gold)' : 'var(--color-coconut)',
                    padding: '0.875rem 0',
                    borderBottom: '1px solid rgba(61,36,16,0.4)',
                    transition: 'color 150ms ease',
                    transitionDelay: open ? `${index * 50}ms` : '0ms',
                  }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
        <Link
          href="/menu"
          className="btn-primary"
          onClick={() => setOpen(false)}
          style={{ marginTop: '2rem', width: '100%', justifyContent: 'center' }}
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

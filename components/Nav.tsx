'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { navLinks } from '@/lib/site-config'

export function Nav() {
  const pathname    = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const firstLinkRef            = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-compiler/react-compiler
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open && firstLinkRef.current) {
      firstLinkRef.current.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

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
      <nav
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'var(--nav-height)' }}
      >
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
            padding: '0.75rem 0.25rem',
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
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.875rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? 'var(--color-gold)' : 'rgba(250,248,242,0.8)',
                    transition: 'color 150ms ease',
                  }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link href="/menu" className="btn-primary hidden-mobile" style={{ fontSize: '0.875rem', padding: '0.6875rem 1.25rem' }}>
            View Menu
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
              padding: '0.875rem',
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

      {/* Mobile menu — animated with max-height + opacity */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        inert={!open}
        style={{
          overflow: 'hidden',
          maxHeight: open ? '480px' : '0',
          opacity: open ? 1 : 0,
          transition: 'max-height 280ms ease, opacity 200ms ease',
          backgroundColor: 'var(--color-obsidian)',
          borderTop: '1px solid var(--color-border-dark)',
        }}
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {navLinks.map(({ href, label }, i) => (
            <li key={href}>
              <Link
                href={href}
                ref={i === 0 ? firstLinkRef : undefined}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  paddingBlock: '0.75rem',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: pathname === href ? 'var(--color-gold)' : 'var(--color-coconut)',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ padding: '0 1.5rem 1.5rem' }}>
          <Link
            href="/menu"
            className="btn-primary"
            onClick={() => setOpen(false)}
            style={{ width: '100%' }}
          >
            View Menu
          </Link>
        </div>
      </div>
    </header>
  )
}

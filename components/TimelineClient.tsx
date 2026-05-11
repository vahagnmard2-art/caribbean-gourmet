'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  {
    year: '1988',
    event: 'A Birthday Request',
    detail:
      "At 11 years old in Guyana, Yonette asks her mother for a chef's coat, hat, mittens, and cookbook for her birthday. Her mother obliges — and everything begins.",
  },
  {
    year: '1998',
    event: 'Supplying Bakeries',
    detail:
      'By 18, Yonette has contracts supplying two bakeries with handmade pastries. Her mother had told her to find a nice office job. She did not listen.',
  },
  {
    year: '2001',
    event: 'Arriving in Los Angeles',
    detail:
      'Yonette immigrates to LA with her husband and three children. After nine months of searching, she finds work as a cake decorator at Pavilions supermarket — and advances to bakery manager within nine months.',
  },
  {
    year: '2015',
    event: 'Caribbean Gourmet Begins',
    detail:
      'Yonette launches Caribbean Gourmet at the Crenshaw/Baldwin Hills and Atwater Village farmers markets simultaneously. The first six months are grueling. The following seven years build a loyal community that travels significant distances to see her.',
  },
  {
    year: '2021',
    event: 'Blossom Market Hall',
    detail:
      "December 2021 — Yonette opens her first brick-and-mortar location at San Gabriel's Blossom Market Hall. The grand opening exceeds all expectations. The longest line in the hall leads to Caribbean Gourmet.",
  },
  {
    year: '2025',
    event: '10 Years & Growing',
    detail:
      "Caribbean Gourmet celebrates a decade. The Infatuation gives it 8.3/10. PureWow calls it one of the best Caribbean restaurants in LA. ABC7 runs a feature. Auntie Yonette still rolls every roti by hand.",
  },
]

export function TimelineClient() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const entries    = container.querySelectorAll<HTMLElement>('[data-entry]')
    const connectors = container.querySelectorAll<HTMLElement>('[data-connector]')

    const ctx = gsap.context(() => {
      entries.forEach((entry) => {
        gsap.fromTo(
          entry,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: entry,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      connectors.forEach((connector) => {
        gsap.fromTo(
          connector,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            duration: 0.65,
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: connector,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column' }}>
      {timeline.map(({ year, event, detail }, i) => (
        <div
          key={year}
          data-entry
          style={{
            display: 'grid',
            gridTemplateColumns: '72px 1fr',
            gap: '1.5rem',
            paddingBottom: i < timeline.length - 1 ? '2.5rem' : 0,
            position: 'relative',
          }}
        >
          {/* Year + connector */}
          <div style={{ paddingTop: '0.125rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-ui)',
                fontSize: '1.125rem',
                fontWeight: 700,
                color: 'var(--color-gold)',
              }}
            >
              {year}
            </span>
            {i < timeline.length - 1 && (
              <div
                data-connector
                aria-hidden="true"
                style={{
                  width: '1px',
                  height: 'calc(100% - 1.75rem)',
                  backgroundColor: 'var(--color-border-dark)',
                  marginTop: '0.5rem',
                  marginLeft: '0.5rem',
                }}
              />
            )}
          </div>

          {/* Content */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: 'var(--color-coconut)',
                marginBottom: '0.5rem',
              }}
            >
              {event}
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
              {detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

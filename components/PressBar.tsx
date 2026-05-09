const pressItems = [
  { outlet: 'The Infatuation', detail: '8.3 / 10' },
  { outlet: 'ABC7 Community Eats', detail: 'Featured' },
  { outlet: 'PureWow', detail: 'Best Caribbean in LA' },
  { outlet: 'MySGV', detail: 'Featured' },
]

export function PressBar() {
  return (
    <section
      aria-label="Press and media recognition"
      style={{
        backgroundColor: 'var(--color-obsidian)',
        borderTop: '1px solid var(--color-border-dark)',
        borderBottom: '1px solid var(--color-border-dark)',
        paddingBlock: '3.5rem',
      }}
    >
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          As Featured In
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem 3rem',
            marginBottom: '2.5rem',
          }}
        >
          {pressItems.map(({ outlet, detail }) => (
            <div key={outlet} style={{ textAlign: 'center' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'rgba(250,248,242,0.9)',
                }}
              >
                {outlet}
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-ui)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-gold)',
                  marginTop: '0.25rem',
                }}
              >
                {detail}
              </span>
            </div>
          ))}
        </div>

        <blockquote
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
            borderTop: '1px solid var(--color-border-dark)',
            paddingTop: '2rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.375rem)',
              fontStyle: 'italic',
              color: 'rgba(250,248,242,0.92)',
              lineHeight: 1.5,
              marginBottom: '0.75rem',
            }}
          >
            &ldquo;The longest line at San Gabriel&rsquo;s Blossom Market Hall always
            leads to Caribbean Gourmet.&rdquo;
          </p>
          <footer
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              color: 'var(--color-gold)',
            }}
          >
            — The Infatuation
          </footer>
        </blockquote>
      </div>
    </section>
  )
}

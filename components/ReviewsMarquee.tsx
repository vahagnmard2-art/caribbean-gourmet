const reviews = [
  {
    text: 'The food is cooked with heart and soul. Every bite tastes authentic and home-cooked.',
    source: 'Google Review',
    stars: 5,
  },
  {
    text: 'Traveled from Glendale just for the oxtail. Worth every single mile.',
    source: 'Yelp Review',
    stars: 5,
  },
  {
    text: 'Auntie Yonette catered our family reunion. Every person asked for her contact info. Warm, responsive, and the food was the highlight of the night.',
    source: 'Yelp Review',
    stars: 5,
  },
  {
    text: 'The longest line in the hall. Now I know exactly why.',
    source: 'Google Review',
    stars: 5,
  },
  {
    text: 'The oxtail is so tender it falls apart before your fork even touches it.',
    source: 'Yelp Review',
    stars: 5,
  },
  {
    text: "Been coming every weekend since 2022. The roti alone is worth the drive from the Westside.",
    source: 'Google Review',
    stars: 5,
  },
  {
    text: 'The cheese rolls are dangerous. I bought six and ate four in the parking lot.',
    source: 'Yelp Review',
    stars: 5,
  },
  {
    text: 'Genuine Guyanese cooking — you can taste the difference immediately. This is the real thing.',
    source: 'Google Review',
    stars: 5,
  },
]

function ReviewCard({ text, source, stars }: { text: string; source: string; stars: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        flexShrink: 0,
        width: '320px',
        backgroundColor: 'var(--color-obsidian)',
        border: '1px solid var(--color-border-dark)',
        borderRadius: '8px',
        padding: '1.5rem',
        marginRight: '1.25rem',
      }}
    >
      <div
        style={{ display: 'flex', gap: '2px', marginBottom: '0.875rem' }}
      >
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i} style={{ color: 'var(--color-gold)', fontSize: '0.875rem' }}>
            ★
          </span>
        ))}
      </div>
      <p
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1rem',
          fontStyle: 'italic',
          color: 'rgba(250,248,242,0.88)',
          lineHeight: 1.6,
          marginBottom: '1rem',
        }}
      >
        &ldquo;{text}&rdquo;
      </p>
      <p
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.06em',
          color: 'var(--color-text-primary-muted)',
          textTransform: 'uppercase',
        }}
      >
        {source}
      </p>
    </div>
  )
}

const doubled = [...reviews, ...reviews]

export function ReviewsMarquee() {

  return (
    <section
      className="section-pad"
      aria-labelledby="reviews-heading"
      style={{ overflow: 'hidden' }}
    >
      <div className="container" style={{ marginBottom: '2.5rem' }}>
        <p className="section-label" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          What Guests Are Saying
        </p>
        <p
          id="reviews-heading"
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.9375rem',
            color: 'var(--color-text-primary-muted)',
          }}
        >
          <span style={{ color: 'var(--color-gold)' }}>★★★★★</span>&ensp;
          4.8 average across 471+ reviews on Google &amp; Yelp
        </p>
      </div>

      {/* Live region for screen readers — shows first two reviews statically */}
      <div className="sr-only" role="region" aria-label="Customer reviews">
        {reviews.slice(0, 3).map((r, i) => (
          <blockquote key={i}>
            <p>{r.text}</p>
            <footer>{r.source} — {r.stars} stars</footer>
          </blockquote>
        ))}
      </div>

      <div className="marquee-track" aria-hidden="true">
        {doubled.map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>
    </section>
  )
}

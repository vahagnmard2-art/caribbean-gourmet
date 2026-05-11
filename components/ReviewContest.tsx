export function ReviewContest() {
  return (
    <section
      aria-labelledby="reviews-cta-heading"
      style={{
        backgroundColor: 'var(--color-molasses)',
        borderTop: '1px solid var(--color-border-dark)',
        paddingBlock: 'clamp(3rem, 6vw, 5rem)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        <div>
          <span className="section-label" style={{ marginBottom: '0.5rem' }}>
            Leave a Review
          </span>
          <h2
            id="reviews-cta-heading"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
              color: 'var(--color-coconut)',
              lineHeight: 1.3,
              marginTop: '0.25rem',
              marginBottom: '0.75rem',
            }}
          >
            Loved Your Meal? Tell Someone.
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
              maxWidth: '44ch',
            }}
          >
            Your honest review helps more people discover authentic Caribbean cooking.
            We read every single one.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
          <a
            href="https://www.google.com/maps/search/Caribbean+Gourmet+Blossom+Market+Hall+San+Gabriel+CA/@34.0992,-118.1082,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '1rem' }}
          >
            Leave a Google Review
          </a>
          <a
            href="https://www.yelp.com/writeareview/biz/caribbean-gourmet-san-gabriel-3"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: '1rem' }}
          >
            Leave a Yelp Review
          </a>
        </div>
      </div>
    </section>
  )
}

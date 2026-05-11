import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Caribbean Gourmet — how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <>
      <div
        style={{
          backgroundColor: 'var(--color-obsidian)',
          paddingTop: 'calc(4.5rem + 3rem)',
          paddingBottom: '3rem',
          borderBottom: '1px solid var(--color-border-dark)',
        }}
      >
        <div className="container">
          <span className="section-label" style={{ marginBottom: '0.75rem' }}>
            Legal
          </span>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-coconut)',
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              marginTop: '0.75rem',
              fontFamily: 'var(--font-ui)',
              fontSize: '0.875rem',
              color: 'var(--color-text-primary-muted)',
            }}
          >
            Effective January 1, 2026 · Last updated January 1, 2026
          </p>
        </div>
      </div>

      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div
          className="container"
          style={{
            maxWidth: '720px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          <div>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              Caribbean Gourmet (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates{' '}
              <strong style={{ color: 'var(--color-coconut)' }}>caribbeangourmet.co</strong>. This
              policy explains what personal information we collect, how we use it, and
              your rights under California law (CCPA/CPRA).
            </p>
          </div>

          <PolicySection title="Information We Collect">
            <p>We collect personal information in two ways:</p>
            <ul>
              <li>
                <strong>VIP email signup</strong> — email address only.
              </li>
              <li>
                <strong>Catering inquiry form</strong> — name, email address, phone number,
                event type, event date, guest count, dietary requirements, and any details
                you include in your message.
              </li>
            </ul>
            <p>
              We do not collect payment information, install tracking cookies, or use
              advertising networks on this website.
            </p>
          </PolicySection>

          <PolicySection title="How We Use Your Information">
            <ul>
              <li>
                <strong>VIP signups</strong> — to send occasional updates about new menu
                items, weekend specials, and our annual Guyana Night event. You may
                unsubscribe at any time via the link in any email.
              </li>
              <li>
                <strong>Catering inquiries</strong> — to respond to your request, discuss
                your event, and provide a custom quote. We do not use catering inquiry
                data for marketing.
              </li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties.</p>
          </PolicySection>

          <PolicySection title="Third-Party Service Providers">
            <p>
              We use <strong>Resend</strong> (resend.com) to deliver transactional and
              marketing emails. Resend processes email addresses on our behalf under a
              data processing agreement. Your email may be stored on Resend&rsquo;s
              servers, which are located in the United States.
            </p>
            <p>
              This website is hosted on <strong>Vercel</strong> (vercel.com). Vercel
              may log standard server request data (IP address, browser type, pages
              visited) for security and performance purposes. Vercel is not authorized
              to use this data for advertising.
            </p>
          </PolicySection>

          <PolicySection title="Data Retention">
            <p>
              VIP email addresses are retained until you unsubscribe or request deletion.
              Catering inquiry data is retained for up to 24 months to support follow-up
              and booking history, then deleted.
            </p>
          </PolicySection>

          <PolicySection title="Your California Privacy Rights (CCPA/CPRA)">
            <p>If you are a California resident, you have the right to:</p>
            <ul>
              <li>
                <strong>Know</strong> — request disclosure of the personal information we
                have collected about you and how it is used.
              </li>
              <li>
                <strong>Delete</strong> — request deletion of personal information we hold
                about you, subject to limited exceptions.
              </li>
              <li>
                <strong>Correct</strong> — request correction of inaccurate personal
                information.
              </li>
              <li>
                <strong>Opt out of sale</strong> — we do not sell personal information,
                so this right does not apply.
              </li>
              <li>
                <strong>Non-discrimination</strong> — we will not discriminate against you
                for exercising any of these rights.
              </li>
            </ul>
            <p>
              To exercise your rights, contact us at{' '}
              <a
                href="mailto:hello@caribbeangourmet.co"
                style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}
              >
                hello@caribbeangourmet.co
              </a>{' '}
              or call{' '}
              <a href="tel:+16267704004" style={{ color: 'var(--color-gold)' }}>
                (626) 770-4004
              </a>
              . We will respond within 45 days.
            </p>
          </PolicySection>

          <PolicySection title="Children's Privacy">
            <p>
              This website is not directed to children under 13 and we do not knowingly
              collect personal information from children. If you believe we have
              inadvertently collected such information, contact us immediately.
            </p>
          </PolicySection>

          <PolicySection title="Changes to This Policy">
            <p>
              We may update this policy when our practices change. The effective date at
              the top of this page will reflect any revision. Continued use of the site
              after changes constitutes acceptance of the updated policy.
            </p>
          </PolicySection>

          <PolicySection title="Contact">
            <address style={{ fontStyle: 'normal', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              <p>
                <strong style={{ color: 'var(--color-coconut)' }}>Caribbean Gourmet</strong>
              </p>
              <p>264 S Mission Dr, Blossom Market Hall</p>
              <p>San Gabriel, CA 91776</p>
              <p>
                <a
                  href="mailto:hello@caribbeangourmet.co"
                  style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}
                >
                  hello@caribbeangourmet.co
                </a>
              </p>
              <p>
                <a href="tel:+16267704004" style={{ color: 'var(--color-gold)' }}>
                  (626) 770-4004
                </a>
              </p>
            </address>
          </PolicySection>

          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.875rem', color: 'var(--color-text-primary-muted)' }}>
            <Link href="/" style={{ color: 'var(--color-gold)' }}>← Back to Home</Link>
          </p>
        </div>
      </section>
    </>
  )
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.25rem',
          color: 'var(--color-coconut)',
          marginBottom: '1rem',
          paddingBottom: '0.5rem',
          borderBottom: '1px solid var(--color-border-dark)',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.875rem',
          fontSize: '0.9375rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
        }}
      >
        {children}
      </div>
    </div>
  )
}

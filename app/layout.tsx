import type { Metadata } from 'next'
import {
  Playfair_Display,
  DM_Serif_Display,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.caribbeangourmet.co'),
  title: {
    template: '%s | Caribbean Gourmet — San Gabriel, CA',
    default:
      'Caribbean Gourmet — Authentic Guyanese & Caribbean Food in San Gabriel, CA',
  },
  description:
    "Slow-braised oxtail, handmade roti, jerk chicken, and fresh Guyanese pastries. Chef Yonette Alleyne's Caribbean Gourmet at Blossom Market Hall, San Gabriel. Dine-in, catering, and Caribbean food products.",
  keywords: [
    'Caribbean restaurant San Gabriel',
    'Guyanese food Los Angeles',
    'West Indian catering San Gabriel Valley',
    'oxtail San Gabriel',
    'roti Los Angeles',
    'Blossom Market Hall food',
    'Caribbean catering LA',
    'Guyanese restaurant SGV',
    'authentic Caribbean food',
    'Yonette Alleyne',
    'jerk chicken San Gabriel',
  ],
  openGraph: {
    title: 'Caribbean Gourmet — Authentic Guyanese & Caribbean Food in San Gabriel',
    description:
      "Slow-braised oxtail, handmade roti, and fresh pastries by Chef Yonette Alleyne. At Blossom Market Hall, San Gabriel. The Infatuation 8.3/10.",
    url: 'https://www.caribbeangourmet.co',
    siteName: 'Caribbean Gourmet',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Caribbean Gourmet oxtail stew and roti at Blossom Market Hall, San Gabriel CA',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caribbean Gourmet — Guyanese & Caribbean Food, San Gabriel CA',
    description:
      '"The longest line at Blossom Market Hall leads to Caribbean Gourmet." — The Infatuation',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Caribbean Gourmet',
  description:
    'Authentic Guyanese and Caribbean cuisine at Blossom Market Hall. Oxtail stew, handmade roti, jerk chicken, and fresh pastries by Chef Yonette Alleyne.',
  url: 'https://www.caribbeangourmet.co',
  telephone: '+16267704004',
  image: 'https://www.caribbeangourmet.co/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '264 S Mission Dr',
    addressLocality: 'San Gabriel',
    addressRegion: 'CA',
    postalCode: '91776',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.0992,
    longitude: -118.1058,
  },
  servesCuisine: ['Caribbean', 'Guyanese', 'West Indian', 'Jamaican'],
  priceRange: '$$',
  hasMenu: 'https://www.caribbeangourmet.co/menu',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Sunday'],
      opens: '11:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '11:00',
      closes: '21:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '471',
    bestRating: '5',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSerif.variable} ${jakarta.variable} ${grotesk.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

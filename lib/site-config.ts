export const navLinks = [
  { href: '/menu',     label: 'Menu' },
  { href: '/catering', label: 'Catering' },
  { href: '/about',    label: 'Our Story' },
  { href: '/gallery',  label: 'Gallery' },
  { href: '/contact',  label: 'Contact' },
]

export const hours = [
  { days: 'Wednesday – Thursday', time: '11am – 8pm' },
  { days: 'Friday – Saturday',    time: '11am – 9pm' },
  { days: 'Sunday',               time: '11am – 8pm' },
  { days: 'Monday – Tuesday',     time: 'Closed', muted: true },
]

// Compact single-line hours string for hero and other inline uses.
// Update here when hours change — consumers import this instead of hardcoding.
export const hoursCompact = 'Wed–Thu & Sun 11am–8pm · Fri–Sat 11am–9pm · Mon–Tue Closed'

export const BUSINESS = {
  name:     'Caribbean Gourmet',
  phone:    '(626) 770-4004',
  phoneHref:'tel:+16267704004',
  address:  '264 S Mission Dr',
  venue:    'Blossom Market Hall',
  city:     'San Gabriel',
  state:    'CA',
  zip:      '91776',
  email:    'hello@caribbeangourmet.co',
  domain:   'https://www.caribbeangourmet.co',
  instagram:'https://www.instagram.com/caribbeangourmet/',
  yelp:     'https://www.yelp.com/biz/caribbean-gourmet-san-gabriel-3',
  // Maps search URL — navigates to the listing where users can write a review
  google:   'https://www.google.com/maps/search/Caribbean+Gourmet+Blossom+Market+Hall+San+Gabriel+CA/@34.0992,-118.1082,17z',
  // TODO: replace with real Place ID from Google My Business dashboard
  // Format: https://search.google.com/local/writereview?placeid=<PLACE_ID>
  googleReview: 'https://www.google.com/maps/search/Caribbean+Gourmet+Blossom+Market+Hall+San+Gabriel+CA/@34.0992,-118.1082,17z',
  yelpReview:   'https://www.yelp.com/writeareview/biz/caribbean-gourmet-san-gabriel-3',
}

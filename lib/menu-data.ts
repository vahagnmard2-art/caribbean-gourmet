export type DietaryTag = 'vegan' | 'halal' | 'gluten-free'
export type MenuCategory = 'plates' | 'patties' | 'pastries' | 'beverages' | 'specials'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number | null       // null = market price / ask at stall
  category: MenuCategory
  tags: DietaryTag[]
  image: string
  imageAlt: string
  weekendOnly?: boolean
  soldOut?: boolean
}

export const menuItems: MenuItem[] = [
  // ── Plates ──────────────────────────────────────────────────────
  {
    id: 'oxtail-stew',
    name: 'Oxtail Stew',
    description:
      'Slow-braised until the meat falls from the bone. Served with bean-flecked rice, caramelized plantains, and stewed cabbage. The housemade habanero sauce is on the side — and it is not mild.',
    price: null,
    category: 'plates',
    tags: ['halal'],
    image: '/images/dish-oxtail.jpg',
    imageAlt: 'Slow-braised oxtail stew served with rice, caramelized plantains, and stewed cabbage at Caribbean Gourmet',
  },
  {
    id: 'jerk-chicken',
    name: 'Jerk Chicken',
    description:
      "An enormous portion of dark meat — smoky, peppery exterior with a juicy interior. Auntie Yonette's recipe since the Crenshaw Market days.",
    price: null,
    category: 'plates',
    tags: ['halal'],
    image: '/images/dish-jerk-chicken.jpg',
    imageAlt: 'Jerk chicken with smoky, peppery exterior at Caribbean Gourmet San Gabriel',
  },
  {
    id: 'chicken-curry-roti',
    name: 'Chicken Curry with Roti',
    description:
      'Guyanese curry — deeper and more layered than Jamaican style. The roti is rolled to order, every time.',
    price: null,
    category: 'plates',
    tags: ['halal'],
    image: '/images/dish-curry-roti.jpg',
    imageAlt: 'Guyanese chicken curry served with fresh handmade roti at Caribbean Gourmet',
  },
  {
    id: 'vegan-curry-roti',
    name: 'Vegan Curry with Roti',
    description:
      'The same rich Guyanese curry base, fully plant-based. Not a compromise — a complete, satisfying dish.',
    price: null,
    category: 'plates',
    tags: ['vegan', 'halal'],
    image: '/images/dish-vegan-curry.jpg',
    imageAlt: 'Vegan Caribbean curry served with freshly rolled roti at Caribbean Gourmet',
  },

  // ── Patties ─────────────────────────────────────────────────────
  {
    id: 'beef-patty',
    name: 'Jamaican Beef Patty',
    description:
      'Curried ground beef in a house-made pastry shell. Baked fresh weekly. The crust is flaky, the filling is deeply seasoned.',
    price: null,
    category: 'patties',
    tags: ['halal'],
    image: '/images/dish-beef-patty.jpg',
    imageAlt: 'Jamaican-style beef patty with flaky crust at Caribbean Gourmet',
  },
  {
    id: 'chicken-patty',
    name: 'Chicken Patty',
    description: 'Seasoned chicken filling in the same buttery house-made pastry shell.',
    price: null,
    category: 'patties',
    tags: ['halal'],
    image: '/images/dish-chicken-patty.jpg',
    imageAlt: 'Caribbean chicken patty at Caribbean Gourmet San Gabriel',
  },
  {
    id: 'vegetarian-patty',
    name: 'Vegetarian Patty',
    description: 'Spiced vegetable filling, same signature crust. A market stall staple.',
    price: null,
    category: 'patties',
    tags: ['vegan'],
    image: '/images/dish-veggie-patty.jpg',
    imageAlt: 'Caribbean vegetarian patty at Caribbean Gourmet',
  },

  // ── Pastries ────────────────────────────────────────────────────
  {
    id: 'cheese-roll',
    name: 'Cheese Roll',
    description:
      'Buttery, tube-shaped pastry with subtly funky sharp white cheddar. The crust shatters when you bite it. Made fresh. One is never enough.',
    price: null,
    category: 'pastries',
    tags: [],
    image: '/images/dish-cheese-roll.jpg',
    imageAlt: 'Freshly baked Guyanese cheese roll at Caribbean Gourmet San Gabriel',
  },
  {
    id: 'pine-tart',
    name: 'Pine Tart',
    description:
      'Chunky, buttery pastry stuffed with tart pineapple jam studded with fruit. A Guyanese classic that regulars buy by the half-dozen.',
    price: null,
    category: 'pastries',
    tags: [],
    image: '/images/dish-pine-tart.jpg',
    imageAlt: 'Guyanese pineapple tart pastry at Caribbean Gourmet',
  },
  {
    id: 'currant-roll',
    name: 'Currant Roll',
    description:
      'Rolled pastry filled with spiced currants. Baked fresh each week with house-made dough.',
    price: null,
    category: 'pastries',
    tags: [],
    image: '/images/dish-currant-roll.jpg',
    imageAlt: 'Guyanese currant roll pastry at Caribbean Gourmet',
  },
  {
    id: 'cassava-pone',
    name: 'Cassava Pone',
    description:
      'Traditional Guyanese baked cassava pudding — dense, sweet, and spiced. Not like anything else on the menu.',
    price: null,
    category: 'pastries',
    tags: ['gluten-free'],
    image: '/images/dish-cassava-pone.jpg',
    imageAlt: 'Traditional Guyanese cassava pone at Caribbean Gourmet San Gabriel',
  },
  {
    id: 'cheddar-scone',
    name: 'Cheddar Cheese Scone',
    description: 'Sharp cheddar folded into a buttery scone. Best warm.',
    price: null,
    category: 'pastries',
    tags: [],
    image: '/images/dish-cheddar-scone.jpg',
    imageAlt: 'Sharp cheddar scone baked fresh at Caribbean Gourmet',
  },

  // ── Weekend Specials ─────────────────────────────────────────────
  {
    id: 'doubles',
    name: 'Doubles',
    description:
      'Trinidadian street food — soft bara bread piled with curried chickpeas, cucumber chutney, and tamarind sauce. A different flavor of Caribbean entirely.',
    price: null,
    category: 'specials',
    tags: ['vegan'],
    image: '/images/dish-doubles.jpg',
    imageAlt: 'Trinidadian doubles with curried chickpeas and chutney at Caribbean Gourmet',
    weekendOnly: true,
  },
  {
    id: 'crab-soup',
    name: 'Crab Soup',
    description:
      'Rich, fragrant Caribbean crab soup. Deeply seasoned. Available when crabs are in season.',
    price: null,
    category: 'specials',
    tags: ['halal', 'gluten-free'],
    image: '/images/dish-crab-soup.jpg',
    imageAlt: 'Caribbean crab soup at Caribbean Gourmet San Gabriel',
    weekendOnly: true,
  },
  {
    id: 'mac-cheese',
    name: 'Baked Mac &amp; Cheese',
    description:
      'A full pan, baked to order on weekends. Caribbean-style — richer, creamier, with a golden crust.',
    price: null,
    category: 'specials',
    tags: [],
    image: '/images/dish-mac-cheese.jpg',
    imageAlt: 'Caribbean baked mac and cheese at Caribbean Gourmet',
    weekendOnly: true,
  },

  // ── Beverages ────────────────────────────────────────────────────
  {
    id: 'sorrel',
    name: 'Sorrel',
    description:
      'Hibiscus-based Caribbean drink, lightly sweetened and deeply floral. Bright red, refreshing cold.',
    price: null,
    category: 'beverages',
    tags: ['vegan', 'gluten-free'],
    image: '/images/drink-sorrel.jpg',
    imageAlt: 'Caribbean sorrel hibiscus drink at Caribbean Gourmet',
  },
  {
    id: 'tamarind-drink',
    name: 'Tamarind Drink',
    description: 'Tangy, lightly sweetened tamarind juice. A West Indian classic.',
    price: null,
    category: 'beverages',
    tags: ['vegan', 'gluten-free'],
    image: '/images/drink-tamarind.jpg',
    imageAlt: 'Caribbean tamarind drink at Caribbean Gourmet',
  },
  {
    id: 'soursop',
    name: 'Soursop Juice',
    description:
      'Fresh soursop — creamy, tropical, slightly tart. Unique to Caribbean Gourmet in the San Gabriel Valley.',
    price: null,
    category: 'beverages',
    tags: ['vegan', 'gluten-free'],
    image: '/images/drink-soursop.jpg',
    imageAlt: 'Fresh soursop juice at Caribbean Gourmet San Gabriel',
  },
]

export const categoryLabels: Record<MenuCategory, string> = {
  plates:    'Plates',
  patties:   'Patties',
  pastries:  'Pastries',
  beverages: 'Beverages',
  specials:  'Weekend Specials',
}

export const dietaryLabels: Record<DietaryTag, string> = {
  vegan:        'Vegan',
  halal:        'Halal',
  'gluten-free': 'GF',
}

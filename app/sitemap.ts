import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.caribbeangourmet.co'

  return [
    { url: base,               lastModified: new Date('2025-10-15'), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/menu`,      lastModified: new Date('2025-11-01'), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/catering`,  lastModified: new Date('2025-10-15'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`,     lastModified: new Date('2025-10-15'), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${base}/gallery`,   lastModified: new Date('2025-10-15'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`,   lastModified: new Date('2025-10-15'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`,   lastModified: new Date('2026-01-01'), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}

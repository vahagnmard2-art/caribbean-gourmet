const store = new Map<string, { count: number; resetAt: number }>()

// Lazy cleanup prevents unbounded growth in long-lived instances.
function cleanup(now: number) {
  if (store.size < 500) return
  for (const [key, record] of store.entries()) {
    if (now > record.resetAt) store.delete(key)
  }
}

/**
 * Returns true if the request is allowed, false if rate-limited.
 * Note: in-memory only — not shared across serverless instances.
 * Replace with @upstash/ratelimit + Redis for distributed enforcement.
 */
export function rateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  cleanup(now)

  const record = store.get(key)
  if (!record || now > record.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }
  if (record.count >= limit) return false
  record.count++
  return true
}

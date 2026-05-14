import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { rateLimit } from '@/lib/rate-limit'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'anonymous'
  if (!rateLimit(`vip:${ip}`, 3, 10 * 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[vip-signup] RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const { email } = body

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const resend = new Resend(apiKey)

    // Notify Yonette — must succeed before returning success to user
    await resend.emails.send({
      from: 'Caribbean Gourmet <noreply@caribbeangourmet.co>',
      to: 'hello@caribbeangourmet.co',
      subject: 'New VIP Signup',
      text: `New VIP signup: ${email}`,
    })

    // Welcome email — best-effort; failure does not roll back the signup
    resend.emails.send({
      from: 'Auntie Yonette <hello@caribbeangourmet.co>',
      to: email,
      subject: "Welcome to Auntie Yonette's Inner Circle",
      text: `
You're in.

Welcome to the Caribbean Gourmet VIP list. You'll be the first to hear about:
- Secret menus and limited weekend specials
- Guyana Night (our annual Guyanese Independence Day celebration)
- Exclusive loyalty rewards and offers
- New menu items before anyone else

We're at Blossom Market Hall, 264 S Mission Dr, San Gabriel, CA.
Wed–Thu & Sun 11am–8pm · Fri–Sat 11am–9pm

— Auntie Yonette & the Caribbean Gourmet team
(626) 770-4004
caribbeangourmet.co
      `.trim(),
    }).catch((err: unknown) => {
      console.error('[vip-signup] Welcome email failed for', email, err)
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to process signup' }, { status: 500 })
  }
}

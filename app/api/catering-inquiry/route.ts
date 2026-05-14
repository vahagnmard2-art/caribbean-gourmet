import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { rateLimit } from '@/lib/rate-limit'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'anonymous'
  if (!rateLimit(`catering:${ip}`, 5, 60 * 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[catering-inquiry] RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  try {
    const body = await request.json()
    const { name, email, phone, eventType, date, guestCount, dietary, message } = body

    if (!name || !email || !phone || !eventType || !date || !guestCount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const guests = parseInt(guestCount, 10)
    if (isNaN(guests) || guests < 1) {
      return NextResponse.json({ error: 'Invalid guest count' }, { status: 400 })
    }

    const resend = new Resend(apiKey)
    const safeD = Array.isArray(dietary) ? dietary : []
    const dietaryText = safeD.length > 0 ? safeD.join(', ') : 'None specified'

    await resend.emails.send({
      from: 'Caribbean Gourmet Website <noreply@caribbeangourmet.co>',
      to: 'hello@caribbeangourmet.co',
      replyTo: email,
      subject: `New Catering Inquiry — ${eventType} · ${date} · ${guests} guests`,
      text: `
NEW CATERING INQUIRY
====================

Name:        ${name}
Email:       ${email}
Phone:       ${phone}
Event Type:  ${eventType}
Event Date:  ${date}
Guest Count: ${guests}
Dietary:     ${dietaryText}

Message:
${message || 'No message provided.'}
      `.trim(),
    })

    resend.emails.send({
      from: 'Auntie Yonette <hello@caribbeangourmet.co>',
      to: email,
      subject: 'Got your catering inquiry — Caribbean Gourmet',
      text: `
Hi ${name},

Your catering inquiry came through and I'll be in touch within 1–2 business days to talk through your ${eventType.toLowerCase()} and build your custom menu.

Event: ${eventType}
Date: ${date}
Guests: ${guests}

If you need to reach me sooner, call (626) 770-4004 during business hours.

Looking forward to cooking for you.

— Auntie Yonette
Caribbean Gourmet
264 S Mission Dr, Blossom Market Hall
San Gabriel, CA 91776
caribbeangourmet.co
      `.trim(),
    }).catch((err: unknown) => {
      console.error('[catering-inquiry] Confirmation email failed for', email, err)
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send inquiry' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { name, email, phone, eventType, date, guestCount, dietary, message } = body

    if (!name || !email || !phone || !eventType || !date || !guestCount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const safeD = Array.isArray(dietary) ? dietary : []
    const dietaryText = safeD.length > 0 ? safeD.join(', ') : 'None specified'

    // Notify Yonette
    await resend.emails.send({
      from: 'Caribbean Gourmet Website <noreply@caribbeangourmet.co>',
      to: 'hello@caribbeangourmet.co',
      replyTo: email,
      subject: `New Catering Inquiry — ${eventType} · ${date} · ${guestCount} guests`,
      text: `
NEW CATERING INQUIRY
====================

Name:        ${name}
Email:       ${email}
Phone:       ${phone}
Event Type:  ${eventType}
Event Date:  ${date}
Guest Count: ${guestCount}
Dietary:     ${dietaryText}

Message:
${message || 'No message provided.'}
      `.trim(),
    })

    // Confirm to the inquirer
    await resend.emails.send({
      from: 'Auntie Yonette <hello@caribbeangourmet.co>',
      to: email,
      subject: 'Got your catering inquiry — Caribbean Gourmet',
      text: `
Hi ${name},

Your catering inquiry came through and I'll be in touch within 1–2 business days to talk through your ${eventType.toLowerCase()} and build your custom menu.

Event: ${eventType}
Date: ${date}
Guests: ${guestCount}

If you need to reach me sooner, call (626) 770-4004 during business hours.

Looking forward to cooking for you.

— Auntie Yonette
Caribbean Gourmet
264 S Mission Dr, Blossom Market Hall
San Gabriel, CA 91776
caribbeangourmet.co
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to send inquiry' }, { status: 500 })
  }
}

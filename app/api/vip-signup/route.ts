import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Caribbean Gourmet <noreply@caribbeangourmet.co>',
      to: 'hello@caribbeangourmet.co',
      subject: 'New VIP Signup',
      text: `New VIP signup: ${email}`,
    })

    // Also send a welcome email to the subscriber
    await resend.emails.send({
      from: 'Auntie Yonette <hello@caribbeangourmet.co>',
      to: email,
      subject: "Welcome to Auntie Yonette's Inner Circle",
      text: `
You're in.

Welcome to the Caribbean Gourmet VIP list. You'll be the first to hear about:
- Secret menus and limited weekend specials
- Guyana Night tickets (July 26)
- Exclusive loyalty rewards and offers
- New menu items before anyone else

We're at Blossom Market Hall, 264 S Mission Dr, San Gabriel, CA.
Wed–Thu & Sun 11am–8pm · Fri–Sat 11am–9pm

— Auntie Yonette & the Caribbean Gourmet team
(626) 770-4004
caribbeangourmet.co
      `.trim(),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to process signup' }, { status: 500 })
  }
}

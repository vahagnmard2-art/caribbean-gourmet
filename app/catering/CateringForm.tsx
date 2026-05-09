'use client'
import { useState } from 'react'

type FormData = {
  name: string
  email: string
  phone: string
  eventType: string
  date: string
  guestCount: string
  dietary: string[]
  message: string
}

const eventTypes = [
  'Birthday Party',
  'Wedding Reception',
  'Corporate Event',
  'Family Reunion',
  'Holiday Celebration',
  'Community Event',
  'Other',
]

const dietaryOptions = [
  { value: 'halal',       label: 'Halal' },
  { value: 'vegan',       label: 'Vegan / Plant-Based' },
  { value: 'gluten-free', label: 'Gluten-Free' },
  { value: 'none',        label: 'No restrictions' },
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '4px',
  border: '1.5px solid var(--color-border-dark)',
  backgroundColor: 'rgba(250,248,242,0.05)',
  color: 'var(--color-coconut)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.9375rem',
  outline: 'none',
  transition: 'border-color 150ms ease',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-ui)',
  fontSize: '0.8125rem',
  fontWeight: 600,
  color: 'rgba(250,248,242,0.75)',
  marginBottom: '0.4rem',
  letterSpacing: '0.02em',
}

export function CateringForm() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', eventType: '',
    date: '', guestCount: '', dietary: [], message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleDietary(value: string, checked: boolean) {
    setForm((prev) => ({
      ...prev,
      dietary: checked
        ? [...prev.dietary, value]
        : prev.dietary.filter((d) => d !== value),
    }))
  }

  function focusStyle(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    e.target.style.borderColor = 'var(--color-gold)'
  }
  function blurStyle(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    e.target.style.borderColor = 'var(--color-border-dark)'
  }

  // Minimum date = tomorrow
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/catering-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        style={{
          backgroundColor: 'var(--color-callaloo)',
          borderRadius: '8px',
          padding: '2.5rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'var(--color-coconut)',
            marginBottom: '0.75rem',
          }}
        >
          We&rsquo;ve got your inquiry.
        </p>
        <p style={{ color: 'rgba(250,248,242,0.82)', fontSize: '1rem', lineHeight: 1.6 }}>
          Yonette will be in touch within 1–2 business days to talk through your
          event and build your custom menu. Reach her directly at{' '}
          <a href="tel:+16267704004" style={{ color: 'var(--color-gold-light)', fontWeight: 600 }}>
            (626) 770-4004
          </a>{' '}
          if you need to connect sooner.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: 'var(--color-obsidian)',
        border: '1px solid var(--color-border-dark)',
        borderRadius: '8px',
        padding: 'clamp(1.5rem, 4vw, 2.5rem)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
      noValidate
    >
      {/* Row 1: Name + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
        <div>
          <label htmlFor="cf-name" style={labelStyle}>Full Name *</label>
          <input
            id="cf-name" type="text" required autoComplete="name"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onFocus={focusStyle} onBlur={blurStyle}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="cf-email" style={labelStyle}>Email Address *</label>
          <input
            id="cf-email" type="email" required autoComplete="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onFocus={focusStyle} onBlur={blurStyle}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Row 2: Phone + Event Type */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
        <div>
          <label htmlFor="cf-phone" style={labelStyle}>Phone Number *</label>
          <input
            id="cf-phone" type="tel" required autoComplete="tel"
            placeholder="(555) 555-5555"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            onFocus={focusStyle} onBlur={blurStyle}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="cf-event-type" style={labelStyle}>Event Type *</label>
          <select
            id="cf-event-type" required
            value={form.eventType}
            onChange={(e) => handleChange('eventType', e.target.value)}
            onFocus={focusStyle} onBlur={blurStyle}
            style={{ ...inputStyle, cursor: 'pointer' }}
          >
            <option value="" disabled>Select type</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 3: Date + Guest Count */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
        <div>
          <label htmlFor="cf-date" style={labelStyle}>Event Date *</label>
          <input
            id="cf-date" type="date" required
            min={minDate}
            value={form.date}
            onChange={(e) => handleChange('date', e.target.value)}
            onFocus={focusStyle} onBlur={blurStyle}
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="cf-guests" style={labelStyle}>Number of Guests *</label>
          <input
            id="cf-guests" type="number" required
            min="5" placeholder="e.g. 40"
            value={form.guestCount}
            onChange={(e) => handleChange('guestCount', e.target.value)}
            onFocus={focusStyle} onBlur={blurStyle}
            style={inputStyle}
          />
        </div>
      </div>

      {/* Dietary requirements */}
      <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
        <legend style={labelStyle}>Dietary Requirements</legend>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem', marginTop: '0.5rem' }}>
          {dietaryOptions.map(({ value, label }) => (
            <label
              key={value}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-ui)',
                fontSize: '0.9rem',
                color: 'rgba(250,248,242,0.8)',
              }}
            >
              <input
                type="checkbox"
                value={value}
                checked={form.dietary.includes(value)}
                onChange={(e) => handleDietary(value, e.target.checked)}
                style={{
                  width: '16px',
                  height: '16px',
                  accentColor: 'var(--color-gold)',
                  cursor: 'pointer',
                }}
              />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" style={labelStyle}>
          Tell us about your event
        </label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="Any details about your event, food preferences, or questions for Yonette…"
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          onFocus={focusStyle} onBlur={blurStyle}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
        />
      </div>

      {status === 'error' && (
        <p
          role="alert"
          style={{ color: 'rgba(250,248,242,0.65)', fontSize: '0.9rem' }}
        >
          Something went wrong. Please call us directly at{' '}
          <a href="tel:+16267704004" style={{ color: 'var(--color-gold)' }}>
            (626) 770-4004
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary"
        style={{ alignSelf: 'flex-start', fontSize: '1rem', padding: '0.875rem 2rem' }}
      >
        {status === 'loading' ? 'Sending…' : 'Request a Catering Quote'}
      </button>

      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
        * Required fields. We respond within 1–2 business days.
      </p>
    </form>
  )
}

import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'free forever',
    description: 'For solo designers and small experiments.',
    features: ['Up to 3 projects', '50 components', 'Community support', 'Basic token sync'],
    cta: 'Get started free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$49',
    period: 'per seat / month',
    description: 'For growing product teams moving fast.',
    features: [
      'Unlimited projects',
      'Full component library',
      'Priority support',
      'Advanced token pipeline',
      'Visual regression testing',
      'Collaborative reviews',
    ],
    cta: 'Start 14-day trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'For large orgs with compliance needs.',
    features: [
      'Everything in Pro',
      'SSO & SAML',
      'SLA guarantee',
      'Dedicated onboarding',
      'Custom integrations',
      'Audit logs',
    ],
    cta: 'Talk to sales',
    highlight: false,
  },
]

export default function CTABanner() {
  const [annual, setAnnual] = useState(true)

  return (
    <section style={{ backgroundColor: '#f7f7f4', padding: '100px 0 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div
            style={{
              display: 'inline-block',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#0c0c0e',
              backgroundColor: '#d4f04c',
              padding: '4px 10px',
              borderRadius: 4,
              marginBottom: 20,
            }}
          >
            Pricing
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 800,
              color: '#0c0c0e',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: '0 0 16px',
            }}
          >
            Simple, transparent pricing.
          </h2>
          <p style={{ fontSize: 17, color: '#6b6b65', margin: '0 0 32px' }}>
            No hidden fees. Cancel or change plans at any time.
          </p>

          {/* Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              backgroundColor: '#efefeb',
              padding: '4px',
              borderRadius: 100,
            }}
          >
            <button
              onClick={() => setAnnual(false)}
              style={{
                padding: '7px 18px',
                borderRadius: 100,
                border: 'none',
                fontFamily: 'var(--font-body-family)',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: !annual ? '#0c0c0e' : 'transparent',
                color: !annual ? '#f7f7f4' : '#6b6b65',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              style={{
                padding: '7px 18px',
                borderRadius: 100,
                border: 'none',
                fontFamily: 'var(--font-body-family)',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                backgroundColor: annual ? '#0c0c0e' : 'transparent',
                color: annual ? '#f7f7f4' : '#6b6b65',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Annual
              <span
                style={{
                  fontSize: 11,
                  backgroundColor: '#d4f04c',
                  color: '#0c0c0e',
                  padding: '2px 6px',
                  borderRadius: 4,
                  fontWeight: 700,
                }}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Plan cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
            alignItems: 'start',
          }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                backgroundColor: plan.highlight ? '#0c0c0e' : '#ffffff',
                border: plan.highlight ? '2px solid #d4f04c' : '1px solid rgba(12,12,14,0.08)',
                borderRadius: 20,
                padding: '36px 32px',
                position: 'relative',
                transform: plan.highlight ? 'scale(1.03)' : 'none',
                boxShadow: plan.highlight ? '0 24px 80px rgba(0,0,0,0.18)' : '0 2px 20px rgba(0,0,0,0.04)',
              }}
            >
              {plan.highlight && (
                <div
                  style={{
                    position: 'absolute',
                    top: -14,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#d4f04c',
                    color: '#0c0c0e',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 14px',
                    borderRadius: 100,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Most popular
                </div>
              )}

              <div style={{ marginBottom: 8 }}>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: plan.highlight ? '#d4f04c' : '#6b6b65',
                  }}
                >
                  {plan.name}
                </span>
              </div>

              <div style={{ marginBottom: 6 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display-family)',
                    fontSize: plan.price === 'Custom' ? 40 : 52,
                    fontWeight: 800,
                    color: plan.highlight ? '#f7f7f4' : '#0c0c0e',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                  }}
                >
                  {plan.price === '$49' && annual ? '$39' : plan.price}
                </span>
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: plan.highlight ? 'rgba(247,247,244,0.4)' : '#6b6b65',
                  marginBottom: 16,
                }}
              >
                {plan.period}
              </div>

              <p
                style={{
                  fontSize: 14,
                  color: plan.highlight ? 'rgba(247,247,244,0.55)' : '#6b6b65',
                  lineHeight: 1.6,
                  margin: '0 0 28px',
                }}
              >
                {plan.description}
              </p>

              <button
                style={{
                  width: '100%',
                  padding: '13px 0',
                  borderRadius: 10,
                  border: plan.highlight ? 'none' : '1.5px solid rgba(12,12,14,0.15)',
                  backgroundColor: plan.highlight ? '#d4f04c' : 'transparent',
                  color: plan.highlight ? '#0c0c0e' : '#0c0c0e',
                  fontFamily: 'var(--font-body-family)',
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginBottom: 28,
                  transition: 'all 0.15s ease',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={(e) => {
                  if (plan.highlight) {
                    e.currentTarget.style.backgroundColor = '#c8e83a'
                  } else {
                    e.currentTarget.style.backgroundColor = '#0c0c0e'
                    e.currentTarget.style.color = '#f7f7f4'
                    e.currentTarget.style.borderColor = '#0c0c0e'
                  }
                }}
                onMouseLeave={(e) => {
                  if (plan.highlight) {
                    e.currentTarget.style.backgroundColor = '#d4f04c'
                  } else {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#0c0c0e'
                    e.currentTarget.style.borderColor = 'rgba(12,12,14,0.15)'
                  }
                }}
              >
                {plan.cta}
              </button>

              <div
                style={{
                  height: 1,
                  backgroundColor: plan.highlight ? 'rgba(255,255,255,0.08)' : 'rgba(12,12,14,0.07)',
                  marginBottom: 24,
                }}
              />

              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      fontSize: 14,
                      color: plan.highlight ? 'rgba(247,247,244,0.75)' : '#3d3d38',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        fill={plan.highlight ? 'rgba(212,240,76,0.15)' : 'rgba(12,12,14,0.06)'}
                      />
                      <path
                        d="M5 8l2.5 2.5L11 5.5"
                        stroke={plan.highlight ? '#d4f04c' : '#0c0c0e'}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          section > div > div:last-child > div {
            transform: none !important;
          }
          section > div { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  )
}

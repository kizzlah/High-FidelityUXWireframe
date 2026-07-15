const stats = [
  { value: '12,400+', label: 'Teams worldwide', sub: 'across 68 countries' },
  { value: '$2.4M', label: 'Saved in tooling costs', sub: 'avg. per enterprise team' },
  { value: '99.97%', label: 'Platform uptime', sub: 'over the last 12 months' },
  { value: '4.9 / 5', label: 'Customer satisfaction', sub: 'from 3,200+ reviews' },
]

const logos = [
  { name: 'Stripe', abbr: 'S' },
  { name: 'Notion', abbr: 'N' },
  { name: 'Linear', abbr: 'L' },
  { name: 'Vercel', abbr: 'V' },
  { name: 'Figma', abbr: 'F' },
  { name: 'Loom', abbr: 'L' },
]

export default function Stats() {
  return (
    <section style={{ backgroundColor: '#0c0c0e', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        {/* Trusted by */}
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(247,247,244,0.35)',
              margin: '0 0 32px',
            }}
          >
            Trusted by teams at
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 48,
              flexWrap: 'wrap',
            }}
          >
            {logos.map((logo) => (
              <div
                key={logo.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  opacity: 0.4,
                  transition: 'opacity 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.4')}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    backgroundColor: 'rgba(247,247,244,0.15)',
                    borderRadius: 6,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 800,
                    color: '#f7f7f4',
                    fontFamily: 'var(--font-display-family)',
                  }}
                >
                  {logo.abbr}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-display-family)',
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#f7f7f4',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.07)', marginBottom: 72 }} />

        {/* Stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 2,
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: '40px 36px',
                backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
                borderRadius: 12,
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display-family)',
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  fontWeight: 800,
                  color: '#d4f04c',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: 10,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: '#f7f7f4',
                  marginBottom: 4,
                }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(247,247,244,0.4)' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div
          style={{
            marginTop: 72,
            padding: '48px 56px',
            backgroundColor: 'rgba(212, 240, 76, 0.05)',
            border: '1px solid rgba(212, 240, 76, 0.15)',
            borderRadius: 20,
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="rgba(212,240,76,0.4)"
              style={{ marginBottom: 20 }}
            >
              <path d="M0 24V14.4C0 6.4 5.333 1.6 16 0l2 3.2C13.2 4.267 10.4 6.4 9.6 9.6H16V24H0zm16 0V14.4C16 6.4 21.333 1.6 32 0l2 3.2c-4.8 1.067-7.6 3.2-8.4 6.4H32V24H16z" />
            </svg>
            <p
              style={{
                fontFamily: 'var(--font-display-family)',
                fontSize: 'clamp(18px, 2.5vw, 26px)',
                fontWeight: 600,
                color: '#f7f7f4',
                lineHeight: 1.4,
                letterSpacing: '-0.02em',
                margin: '0 0 24px',
              }}
            >
              Apex cut our design-to-production cycle from three weeks to four days. The token sync
              alone saved us more than 200 hours of manual work in the first quarter.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: 16,
                  color: '#fff',
                  fontFamily: 'var(--font-display-family)',
                }}
              >
                SK
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#f7f7f4' }}>
                  Sarah Kim
                </div>
                <div style={{ fontSize: 13, color: 'rgba(247,247,244,0.45)' }}>
                  Head of Design Systems · Notion
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: 200,
              aspectRatio: '4/5',
              borderRadius: 14,
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&auto=format"
              alt="Sarah Kim, Head of Design Systems at Notion"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div:nth-child(4) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          section > div > div:last-child > div:last-child {
            display: none !important;
          }
          section > div { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  )
}

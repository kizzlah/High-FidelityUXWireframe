import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <section
      style={{
        backgroundColor: '#0c0c0e',
        minHeight: 'calc(100vh - 64px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background grid texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(212, 240, 76, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 240, 76, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }}
      />

      {/* Left content */}
      <div
        style={{
          padding: '80px 48px 80px 80px',
          position: 'relative',
          zIndex: 1,
          maxWidth: 600,
          margin: '0 auto 0 auto',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(212, 240, 76, 0.1)',
            border: '1px solid rgba(212, 240, 76, 0.25)',
            borderRadius: 100,
            padding: '5px 14px 5px 8px',
            marginBottom: 32,
          }}
        >
          <span
            style={{
              backgroundColor: '#d4f04c',
              borderRadius: 100,
              padding: '2px 8px',
              fontSize: 11,
              fontWeight: 700,
              color: '#0c0c0e',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            New
          </span>
          <span style={{ fontSize: 13, color: 'rgba(212, 240, 76, 0.9)', fontWeight: 500 }}>
            Version 3.0 is live — see what&apos;s new
          </span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="rgba(212,240,76,0.6)">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="rgba(212,240,76,0.6)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'var(--font-display-family)',
            fontSize: 'clamp(40px, 5vw, 68px)',
            fontWeight: 800,
            color: '#f7f7f4',
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            margin: '0 0 24px',
          }}
        >
          Design systems
          <br />
          <span style={{ color: '#d4f04c' }}>move faster</span>
          <br />
          with Apex.
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontSize: 18,
            color: 'rgba(247, 247, 244, 0.55)',
            lineHeight: 1.65,
            margin: '0 0 40px',
            maxWidth: 440,
            fontWeight: 400,
          }}
        >
          The unified platform for product teams — from wireframe to production-ready component in
          minutes, not days.
        </p>

        {/* Email capture */}
        <div
          style={{
            display: 'flex',
            gap: 10,
            marginBottom: 20,
            flexWrap: 'wrap',
          }}
        >
          {submitted ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '12px 20px',
                backgroundColor: 'rgba(212, 240, 76, 0.12)',
                border: '1px solid rgba(212, 240, 76, 0.3)',
                borderRadius: 8,
                color: '#d4f04c',
                fontWeight: 500,
                fontSize: 15,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l4 4 6-7" stroke="#d4f04c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              You&apos;re on the list — we&apos;ll be in touch.
            </div>
          ) : (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@company.com"
                style={{
                  flex: '1 1 220px',
                  padding: '13px 18px',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 8,
                  color: '#f7f7f4',
                  fontSize: 15,
                  fontFamily: 'var(--font-body-family)',
                  outline: 'none',
                  transition: 'border-color 0.15s',
                }}
                onFocus={(e) => (e.target.style.borderColor = 'rgba(212, 240, 76, 0.5)')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.12)')}
              />
              <button
                onClick={() => email && setSubmitted(true)}
                style={{
                  padding: '13px 24px',
                  backgroundColor: '#d4f04c',
                  border: 'none',
                  borderRadius: 8,
                  color: '#0c0c0e',
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: 'var(--font-body-family)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease',
                  letterSpacing: '-0.01em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#c8e83a'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4f04c'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Start free trial
              </button>
            </>
          )}
        </div>

        <p style={{ fontSize: 13, color: 'rgba(247,247,244,0.35)', margin: 0 }}>
          No credit card required · 14-day free trial · Cancel anytime
        </p>

        {/* Social proof */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginTop: 40,
            paddingTop: 40,
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div style={{ display: 'flex' }}>
            {['JL', 'MK', 'SR', 'AT', 'PW'].map((initials, i) => (
              <div
                key={initials}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  backgroundColor: ['#6366f1', '#8b5cf6', '#a78bfa', '#7c3aed', '#5b21b6'][i],
                  border: '2px solid #0c0c0e',
                  marginLeft: i === 0 ? 0 : -10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10,
                  fontWeight: 700,
                  color: '#fff',
                  zIndex: 5 - i,
                  position: 'relative',
                }}
              >
                {initials}
              </div>
            ))}
          </div>
          <div>
            <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#d4f04c">
                  <path d="M6 1l1.5 3.1L11 4.6 8.5 7l.6 3.5L6 9l-3.1 1.5.6-3.5L1 4.6l3.5-.5L6 1z"/>
                </svg>
              ))}
            </div>
            <p style={{ fontSize: 12, color: 'rgba(247,247,244,0.45)', margin: 0 }}>
              Loved by <strong style={{ color: 'rgba(247,247,244,0.7)' }}>12,400+</strong> designers
            </p>
          </div>
        </div>
      </div>

      {/* Right visual panel */}
      <div
        style={{
          height: 'calc(100vh - 64px)',
          minHeight: 560,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=900&h=900&fit=crop&auto=format"
          alt="Abstract geometric design interface"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.55,
          }}
        />
        {/* Overlay gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #0c0c0e 0%, transparent 40%)',
          }}
        />
        {/* Floating UI card */}
        <div
          style={{
            position: 'absolute',
            bottom: 64,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(15, 15, 17, 0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 16,
            padding: '20px 24px',
            width: 280,
            boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(247,247,244,0.9)' }}>Design velocity</span>
            <span
              style={{
                fontSize: 11,
                padding: '2px 8px',
                borderRadius: 100,
                backgroundColor: 'rgba(212, 240, 76, 0.15)',
                color: '#d4f04c',
                fontWeight: 600,
              }}
            >
              +38% this week
            </span>
          </div>
          {[
            { label: 'Components shipped', value: 142, max: 160, pct: 89 },
            { label: 'Design reviews', value: 28, max: 30, pct: 93 },
            { label: 'Time to production', value: 1.4, max: 5, pct: 28, unit: 'days avg' },
          ].map((item) => (
            <div key={item.label} style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 12, color: 'rgba(247,247,244,0.45)' }}>{item.label}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#f7f7f4' }}>
                  {item.value}{item.unit ? ` ${item.unit}` : ''}
                </span>
              </div>
              <div style={{ height: 4, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 2, overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${item.pct}%`,
                    backgroundColor: item.pct > 80 ? '#d4f04c' : item.pct > 50 ? '#6366f1' : 'rgba(255,255,255,0.3)',
                    borderRadius: 2,
                    transition: 'width 0.8s ease',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section { grid-template-columns: 1fr !important; }
          section > div:last-child { display: none !important; }
          section > div:first-child { padding: 60px 24px !important; }
        }
      `}</style>
    </section>
  )
}

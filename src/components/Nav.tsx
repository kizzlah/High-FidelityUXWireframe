import { useState } from 'react'

const links = ['Product', 'Solutions', 'Pricing', 'Blog', 'About']

export default function Nav() {
  const [active, setActive] = useState('Product')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      style={{
        backgroundColor: '#0c0c0e',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 32,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              backgroundColor: '#d4f04c',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L8 3L13 13H10L8 9L6 13H3Z" fill="#0c0c0e" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-display-family)',
              fontWeight: 700,
              fontSize: 18,
              color: '#f7f7f4',
              letterSpacing: '-0.02em',
            }}
          >
            Apex
          </span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            listStyle: 'none',
            margin: 0,
            padding: 0,
            flex: 1,
            justifyContent: 'center',
          }}
          className="nav-links"
        >
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActive(link)}
                style={{
                  background: active === link ? 'rgba(212, 240, 76, 0.12)' : 'transparent',
                  border: 'none',
                  color: active === link ? '#d4f04c' : 'rgba(247, 247, 244, 0.6)',
                  fontFamily: 'var(--font-body-family)',
                  fontSize: 14,
                  fontWeight: 500,
                  padding: '6px 14px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  if (active !== link) {
                    e.currentTarget.style.color = '#f7f7f4'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== link) {
                    e.currentTarget.style.color = 'rgba(247, 247, 244, 0.6)'
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <button
            style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(247, 247, 244, 0.6)',
              fontFamily: 'var(--font-body-family)',
              fontSize: 14,
              fontWeight: 500,
              padding: '6px 12px',
              cursor: 'pointer',
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f7f7f4')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247, 247, 244, 0.6)')}
          >
            Sign in
          </button>
          <button
            style={{
              background: '#d4f04c',
              border: 'none',
              color: '#0c0c0e',
              fontFamily: 'var(--font-body-family)',
              fontSize: 14,
              fontWeight: 600,
              padding: '8px 18px',
              borderRadius: 6,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#c8e83a'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#d4f04c'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Get started
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#f7f7f4',
              cursor: 'pointer',
              padding: 4,
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              {mobileOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: '#0c0c0e',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '12px 24px 20px',
          }}
          className="mobile-menu"
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => { setActive(link); setMobileOpen(false) }}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'transparent',
                border: 'none',
                color: active === link ? '#d4f04c' : 'rgba(247,247,244,0.7)',
                fontFamily: 'var(--font-body-family)',
                fontSize: 16,
                fontWeight: 500,
                padding: '10px 0',
                cursor: 'pointer',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}

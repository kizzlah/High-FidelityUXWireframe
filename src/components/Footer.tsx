const footerLinks = {
  Product: ['Features', 'Changelog', 'Roadmap', 'Integrations', 'Security'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Docs', 'API Reference', 'Community', 'Status', 'Support'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0c0c0e', marginTop: 100, paddingTop: 72, paddingBottom: 48 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '280px repeat(4, 1fr)',
            gap: 40,
            paddingBottom: 60,
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                textDecoration: 'none',
                marginBottom: 20,
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
            <p style={{ fontSize: 14, color: 'rgba(247,247,244,0.4)', lineHeight: 1.6, margin: '0 0 24px' }}>
              The design-to-production platform for teams who ship.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['twitter', 'github', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    width: 34,
                    height: 34,
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: 13,
                    color: 'rgba(247,247,244,0.5)',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.color = '#f7f7f4'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.color = 'rgba(247,247,244,0.5)'
                  }}
                >
                  {social[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(247,247,244,0.35)',
                  marginBottom: 16,
                }}
              >
                {section}
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: 14,
                        color: 'rgba(247,247,244,0.5)',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#f7f7f4')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(247,247,244,0.5)')}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 28,
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: 'rgba(247,247,244,0.3)', margin: 0 }}>
            © 2025 Apex Technologies, Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                boxShadow: '0 0 6px #22c55e',
              }}
            />
            <span style={{ fontSize: 13, color: 'rgba(247,247,244,0.3)' }}>
              All systems operational
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          footer > div { padding: 0 20px !important; }
        }
        @media (max-width: 500px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

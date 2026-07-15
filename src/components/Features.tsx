import { useState } from 'react'

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="12" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <rect x="2" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 12v8M12 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    category: 'Components',
    title: 'Production-ready component library',
    description:
      'Over 340 accessible components with full dark-mode support, responsive variants, and thorough Storybook documentation baked in.',
    metric: '340+',
    metricLabel: 'components',
    tags: ['React', 'Vue', 'Svelte'],
    img: 'https://images.unsplash.com/photo-1555066931-4365d14431b9?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L2 7l9 5 9-5-9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M2 15l9 5 9-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 11l9 5 9-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    category: 'Tokens',
    title: 'Design token pipeline',
    description:
      'Sync your Figma variables directly to code. CSS custom properties, Tailwind config, and Style Dictionary exports kept in perfect sync.',
    metric: '< 2s',
    metricLabel: 'sync time',
    tags: ['Figma', 'Tailwind', 'CSS'],
    img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M11 7v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    category: 'Velocity',
    title: 'Collaborative review workflows',
    description:
      'Inline comments, change requests, and approval gates that live alongside your code. No more switching between Figma and GitHub.',
    metric: '6×',
    metricLabel: 'faster reviews',
    tags: ['Async', 'Threads', 'CI'],
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17l4-4 4 4 8-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    category: 'Analytics',
    title: 'Component usage intelligence',
    description:
      'Know exactly which components are used in production, which are drifting from spec, and where adoption is lagging across your codebase.',
    metric: '99.8%',
    metricLabel: 'accuracy',
    tags: ['AST', 'Real-time', 'Reports'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M12 2L2 12l4 4 10-10-4-4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 5l2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    category: 'Automation',
    title: 'One-click scaffolding',
    description:
      'Generate new pages, features, or full micro-frontends from battle-tested templates tuned for your stack in under 30 seconds.',
    metric: '30s',
    metricLabel: 'to scaffold',
    tags: ['CLI', 'Templates', 'Hooks'],
    img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop&auto=format',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2a9 9 0 100 18A9 9 0 0011 2z" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    category: 'QA',
    title: 'Visual regression testing',
    description:
      'Pixel-perfect diffing on every pull request. Catch unintended visual changes before they reach production and alert only the right people.',
    metric: '100%',
    metricLabel: 'PR coverage',
    tags: ['Playwright', 'Snapshots', 'CI/CD'],
    img: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop&auto=format',
  },
]

export default function Features() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section style={{ backgroundColor: '#f7f7f4', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        {/* Section header */}
        <div style={{ marginBottom: 64, maxWidth: 560 }}>
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
            Platform features
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 800,
              color: '#0c0c0e',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: '0 0 18px',
            }}
          >
            Everything your team
            <br />
            needs to ship faster.
          </h2>
          <p
            style={{
              fontSize: 17,
              color: '#6b6b65',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Apex handles the coordination so your engineers can focus on what matters — shipping
            great product.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {features.map((f, i) => (
            <div
              key={f.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundColor: hovered === i ? '#0c0c0e' : '#ffffff',
                border: `1px solid ${hovered === i ? 'transparent' : 'rgba(12,12,14,0.08)'}`,
                borderRadius: 16,
                padding: '28px 28px 24px',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                transform: hovered === i ? 'translateY(-4px)' : 'none',
                boxShadow: hovered === i
                  ? '0 20px 60px rgba(0,0,0,0.2)'
                  : '0 2px 12px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
              }}
            >
              {/* Card image strip */}
              <div
                style={{
                  height: 140,
                  borderRadius: 10,
                  overflow: 'hidden',
                  marginBottom: 24,
                  backgroundColor: hovered === i ? 'rgba(255,255,255,0.05)' : '#f0f0ec',
                }}
              >
                <img
                  src={f.img}
                  alt={f.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: hovered === i ? 0.7 : 0.85,
                    transition: 'opacity 0.25s',
                  }}
                />
              </div>

              {/* Category + icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 12,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: hovered === i ? '#d4f04c' : '#6b6b65',
                    transition: 'color 0.25s',
                  }}
                >
                  {f.category}
                </span>
                <div
                  style={{
                    color: hovered === i ? '#d4f04c' : '#0c0c0e',
                    transition: 'color 0.25s',
                  }}
                >
                  {f.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display-family)',
                  fontSize: 18,
                  fontWeight: 700,
                  color: hovered === i ? '#f7f7f4' : '#0c0c0e',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.3,
                  margin: '0 0 10px',
                  transition: 'color 0.25s',
                }}
              >
                {f.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  color: hovered === i ? 'rgba(247,247,244,0.5)' : '#6b6b65',
                  lineHeight: 1.6,
                  margin: '0 0 20px',
                  transition: 'color 0.25s',
                  flex: 1,
                }}
              >
                {f.description}
              </p>

              {/* Bottom row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 16,
                  borderTop: `1px solid ${hovered === i ? 'rgba(255,255,255,0.08)' : 'rgba(12,12,14,0.07)'}`,
                  transition: 'border-color 0.25s',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display-family)',
                      fontSize: 24,
                      fontWeight: 800,
                      color: hovered === i ? '#d4f04c' : '#0c0c0e',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      transition: 'color 0.25s',
                    }}
                  >
                    {f.metric}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: hovered === i ? 'rgba(247,247,244,0.4)' : '#6b6b65',
                      marginTop: 2,
                      transition: 'color 0.25s',
                    }}
                  >
                    {f.metricLabel}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        padding: '3px 8px',
                        borderRadius: 4,
                        fontWeight: 600,
                        backgroundColor: hovered === i ? 'rgba(255,255,255,0.08)' : 'rgba(12,12,14,0.05)',
                        color: hovered === i ? 'rgba(247,247,244,0.6)' : '#6b6b65',
                        transition: 'all 0.25s',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          section > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          section > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          section > div { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  )
}

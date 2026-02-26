'use client'

import { useState } from 'react'

export default function SourceBadge({
  text = '来源：AI In Action',
  url = 'https://www.aiinaction.top/usercase/openclaw-luxury-trade-configuration-guide.html',
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <style>{`
        @media (prefers-color-scheme: dark) {
          .sb-root { background: #1c1917 !important; border-color: #292524 !important; color: #a8a29e !important; }
          .sb-root:hover { background: rgba(249, 115, 22, 0.1) !important; color: #fb923c !important; border-color: rgba(249, 115, 22, 0.3) !important; }
        }
        html[class~="dark"] .sb-root { background: #1c1917 !important; border-color: #292524 !important; color: #a8a29e !important; }
        html[class~="dark"] .sb-root:hover { background: rgba(249, 115, 22, 0.1) !important; color: #fb923c !important; border-color: rgba(249, 115, 22, 0.3) !important; }
      `}</style>
      <a
        className="sb-root"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.35rem 0.85rem',
          borderRadius: '999px',
          fontSize: '0.75rem',
          fontWeight: 500,
          color: hovered ? '#ea580c' : '#78716c',
          background: hovered ? 'rgba(249, 115, 22, 0.06)' : '#fafaf9',
          border: `1px solid ${hovered ? 'rgba(249, 115, 22, 0.2)' : '#e7e5e4'}`,
          textDecoration: 'none',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
          margin: '0.5rem 0',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <span style={{ fontSize: '0.85rem' }}>📌</span>
        {text}
        <span style={{ fontSize: '0.65rem' }}>↗</span>
      </a>
    </>
  )
}

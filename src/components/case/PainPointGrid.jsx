'use client'

import { useState } from 'react'

function PainCard({ icon, title, desc }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="pp-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '1.5rem',
        borderRadius: '12px',
        background: '#ffffff',
        border: '1px solid #f5f5f4',
        boxShadow: hovered
          ? '0 12px 28px rgba(0, 0, 0, 0.1)'
          : '0 2px 8px rgba(0, 0, 0, 0.04)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
      }}
    >
      <div className="pp-icon" style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
        marginBottom: '1rem',
      }}>
        <span role="img" aria-label={title}>{icon}</span>
      </div>
      <h4 className="pp-title" style={{
        fontSize: '1rem',
        fontWeight: 700,
        margin: '0 0 0.5rem 0',
        color: '#1c1917',
      }}>{title}</h4>
      <p className="pp-desc" style={{
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: '#78716c',
        margin: 0,
      }}>{desc}</p>
    </div>
  )
}

export default function PainPointGrid({ items = [] }) {
  return (
    <>
      <style>{`
        @media (prefers-color-scheme: dark) {
          .pp-grid .pp-card { background: #1c1917 !important; border-color: #292524 !important; }
          .pp-grid .pp-title { color: #fafaf9 !important; }
          .pp-grid .pp-desc { color: #a8a29e !important; }
          .pp-grid .pp-icon { background: linear-gradient(135deg, #431407, #7c2d12) !important; }
        }
        html[class~="dark"] .pp-grid .pp-card { background: #1c1917 !important; border-color: #292524 !important; }
        html[class~="dark"] .pp-grid .pp-title { color: #fafaf9 !important; }
        html[class~="dark"] .pp-grid .pp-desc { color: #a8a29e !important; }
        html[class~="dark"] .pp-grid .pp-icon { background: linear-gradient(135deg, #431407, #7c2d12) !important; }
        @media (max-width: 640px) {
          .pp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="pp-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        margin: '1.5rem 0',
      }}>
        {items.map((item, i) => (
          <PainCard key={i} icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </div>
    </>
  )
}

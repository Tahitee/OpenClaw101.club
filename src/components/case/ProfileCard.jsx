'use client'

import { useState } from 'react'

export default function ProfileCard({
  emoji = '👩‍💼',
  name = 'Vivian（化名）',
  title = '独立奢侈品买手 · 跨境批发贸易',
  tags = ['欧洲货源 → 中国市场', '箱包 / 成衣 / 配饰', 'B2B 批发为主', '企微 + WhatsApp 双线运营'],
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <style>{`
        @media (prefers-color-scheme: dark) {
          .pc-root { background: linear-gradient(135deg, #1c1917 0%, #292524 60%, #1c1917 100%) !important; border-color: rgba(249, 115, 22, 0.2) !important; }
          .pc-root .pc-name { color: #fafaf9 !important; }
          .pc-root .pc-title { color: #a8a29e !important; }
          .pc-root .pc-tag { background: rgba(249, 115, 22, 0.15) !important; color: #fb923c !important; border-color: rgba(249, 115, 22, 0.25) !important; }
        }
        html[class~="dark"] .pc-root { background: linear-gradient(135deg, #1c1917 0%, #292524 60%, #1c1917 100%) !important; border-color: rgba(249, 115, 22, 0.2) !important; }
        html[class~="dark"] .pc-root .pc-name { color: #fafaf9 !important; }
        html[class~="dark"] .pc-root .pc-title { color: #a8a29e !important; }
        html[class~="dark"] .pc-root .pc-tag { background: rgba(249, 115, 22, 0.15) !important; color: #fb923c !important; border-color: rgba(249, 115, 22, 0.25) !important; }
        @media (max-width: 480px) {
          .pc-root { flex-direction: column !important; align-items: center !important; text-align: center !important; padding: 1.25rem !important; }
          .pc-root .pc-tags { justify-content: center !important; }
        }
      `}</style>
      <div
        className="pc-root"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1.5rem',
          padding: '1.75rem',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 60%, #fef3c7 100%)',
          boxShadow: hovered
            ? '0 8px 30px rgba(234, 88, 12, 0.15)'
            : '0 4px 16px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(234, 88, 12, 0.12)',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          margin: '1.5rem 0',
          maxWidth: '640px',
        }}
      >
        <div style={{
          flexShrink: 0,
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f97316, #ea580c)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)',
        }}>
          <span role="img" aria-label="avatar">{emoji}</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h4 className="pc-name" style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            margin: '0 0 0.25rem 0',
            color: '#1c1917',
          }}>{name}</h4>
          <p className="pc-title" style={{
            fontSize: '0.875rem',
            color: '#78716c',
            margin: '0 0 0.75rem 0',
            fontWeight: 500,
          }}>{title}</p>
          <div className="pc-tags" style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}>
            {tags.map((tag, i) => (
              <span key={i} className="pc-tag" style={{
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 500,
                background: 'rgba(249, 115, 22, 0.08)',
                color: '#ea580c',
                border: '1px solid rgba(249, 115, 22, 0.15)',
                whiteSpace: 'nowrap',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

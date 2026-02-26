'use client'

export default function SectionDivider({ icon, title }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        margin: '48px 0 24px',
        padding: '16px 0',
        borderBottom: '2px solid #e7e5e4',
      }}
    >
      <span style={{ fontSize: '28px' }}>{icon}</span>
      <span style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a8a29e' }}>
        {title}
      </span>
    </div>
  )
}

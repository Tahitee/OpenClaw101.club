'use client'

export default function SectionHeader({ section }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '28px' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>{section.icon}</div>
      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '0 0 8px' }}>
        {section.title}
      </h2>
      <p style={{ color: 'var(--c-muted)', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>
        {section.desc}
      </p>
    </div>
  )
}

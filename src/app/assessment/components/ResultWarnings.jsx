'use client'

export default function ResultWarnings({ warnings }) {
  if (warnings.length === 0) return null

  return (
    <div className="assess-card" style={{ borderColor: '#fca5a5' }}>
      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 16px', color: '#ef4444' }}>
        ⚠️ 关键风险警告
      </h3>
      <p style={{ fontSize: '0.9rem', color: 'var(--c-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
        以下题目得分过低（≤ 3 分），无论总分如何，都需要特别关注：
      </p>
      {warnings.map((w, i) => (
        <div key={i} style={{
          display: 'flex', gap: '12px', padding: '14px 16px',
          background: 'var(--c-red-bg)', border: '1px solid #fca5a5',
          borderRadius: '12px', marginBottom: i < warnings.length - 1 ? '10px' : 0,
          alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: '1.2rem', flexShrink: 0, lineHeight: 1, marginTop: '2px' }}>🚨</span>
          <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
            <strong style={{ color: '#ef4444' }}>Q{w.id} {w.title}</strong>
            <br />
            {w.msg}
          </div>
        </div>
      ))}
    </div>
  )
}

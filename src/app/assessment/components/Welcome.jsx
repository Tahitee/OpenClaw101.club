'use client'

export default function Welcome({ onStart }) {
  return (
    <div style={{ textAlign: 'center', paddingTop: '60px' }}>
      <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🦞</div>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px', lineHeight: 1.3 }}>
        OpenClaw 企业引入风险评估
      </h1>
      <p style={{
        color: 'var(--c-muted)', fontSize: '1.05rem',
        maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7,
      }}>
        28 道评估题，帮助您的企业客观判断<br />是否适合在当前阶段引入 OpenClaw AI 助手框架。
      </p>

      <div style={{
        background: 'var(--c-card)', borderRadius: '16px', padding: '24px',
        maxWidth: '420px', margin: '0 auto 32px',
        boxShadow: '0 1px 3px rgba(0,0,0,.06)', border: '1px solid var(--c-border)',
        textAlign: 'left',
      }}>
        {[
          ['📋', '6 个评估维度，28 道专业题目'],
          ['⏱️', '约 5-8 分钟完成'],
          ['🔒', '数据不上传，纯本地计算'],
          ['📊', '即时出结果，附详细分析建议'],
        ].map(([icon, text], i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            marginBottom: i < 3 ? '14px' : 0,
          }}>
            <span style={{ fontSize: '1.2rem' }}>{icon}</span>
            <span style={{ fontSize: '0.95rem' }}>{text}</span>
          </div>
        ))}
      </div>

      <button className="assess-btn assess-btn-primary"
        style={{ padding: '18px 48px', fontSize: '1.15rem' }}
        onClick={onStart}>
        开始评估 →
      </button>

      <p style={{ color: 'var(--c-muted)', fontSize: '0.82rem', marginTop: '20px', lineHeight: 1.6 }}>
        评分规则：1 分 = 完全不能接受 / 完全不具备<br />
        10 分 = 完全可以接受 / 完全具备
      </p>
    </div>
  )
}

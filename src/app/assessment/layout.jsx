export const metadata = {
  title: 'OpenClaw 企业引入风险评估 - OpenClaw101',
  description: '28 道专业评估题，帮助企业客观判断是否适合在当前阶段引入 OpenClaw AI 助手框架。',
}

export default function AssessmentLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Back to home nav */}
      <nav style={{
        padding: '12px 24px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        <a href="/" style={{
          fontWeight: 'bold',
          fontSize: '1.1em',
          textDecoration: 'none',
          color: 'inherit',
        }}>
          🦞 OpenClaw101
        </a>
        <span style={{ color: '#999' }}>|</span>
        <a href="/docs/getting-started/what-is-openclaw" style={{
          fontSize: '0.9em',
          textDecoration: 'none',
          color: '#666',
        }}>
          📖 教程
        </a>
      </nav>
      {children}
    </div>
  )
}

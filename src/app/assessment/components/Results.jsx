'use client'
import ResultConclusion from './ResultConclusion'
import ResultDimensions from './ResultDimensions'
import ResultWarnings from './ResultWarnings'

export default function Results({ totalScore, level, dimScores, criticalWarnings, onRestart }) {
  return (
    <>
      {/* Score header */}
      <div style={{ textAlign: 'center', paddingTop: '40px', marginBottom: '32px' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          {level === 'green' ? '🟢' : level === 'yellow' ? '🟡' : '🔴'}
        </div>
        <p style={{ fontSize: '3.5rem', fontWeight: 900, margin: 0, lineHeight: 1 }}>
          {totalScore}{' '}
          <span style={{ fontSize: '1.2rem', fontWeight: 400, color: 'var(--c-muted)' }}>/ 280</span>
        </p>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '12px 24px', borderRadius: '40px',
          fontSize: '1.3rem', fontWeight: 800, margin: '16px 0 8px',
          background: level === 'green' ? 'var(--c-green-bg)' : level === 'yellow' ? 'var(--c-yellow-bg)' : 'var(--c-red-bg)',
          color: level === 'green' ? '#10b981' : level === 'yellow' ? '#f59e0b' : '#ef4444',
        }}>
          {level === 'green' && '✅ 建议引入'}
          {level === 'yellow' && '⚠️ 有条件引入，需补齐短板'}
          {level === 'red' && '❌ 当前不建议引入'}
        </div>
      </div>

      {/* Main conclusion */}
      <ResultConclusion level={level} />

      {/* Dimension scores */}
      <ResultDimensions dimScores={dimScores} />

      {/* Critical warnings */}
      <ResultWarnings warnings={criticalWarnings} />

      {/* Disclaimer + actions */}
      <div className="assess-card" style={{ textAlign: 'center' }}>
        <p style={{
          fontSize: '0.85rem', color: 'var(--c-muted)',
          lineHeight: 1.7, margin: '0 0 20px',
        }}>
          本问卷仅作为企业引入 OpenClaw 前的风险意识评估工具，不构成专业安全审计或法律合规建议。
          企业应根据自身行业法规、数据安全要求和技术条件，咨询专业的安全顾问和法律顾问后做出决策。
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="assess-btn assess-btn-secondary" onClick={onRestart}>
            🔄 重新评估
          </button>
          <a
            href="/docs/advanced/security"
            className="assess-btn assess-btn-primary"
            style={{ textDecoration: 'none' }}
          >
            📖 查看安全加固指南
          </a>
        </div>
        <p style={{
          fontSize: '0.8rem', color: 'var(--c-muted)',
          marginTop: '16px',
        }}>
          由 OpenClaw101.club 提供 · 版本 1.0
        </p>
      </div>
    </>
  )
}

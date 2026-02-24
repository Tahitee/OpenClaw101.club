'use client'
import { getDimColor, getDimComment } from '../data'

export default function ResultDimensions({ dimScores }) {
  return (
    <div className="assess-card">
      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 20px' }}>
        📊 各维度得分详情
      </h3>
      {dimScores.map((dim, i) => (
        <div key={i} style={{ marginBottom: i < dimScores.length - 1 ? '20px' : 0 }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginBottom: '6px',
          }}>
            <span style={{ fontSize: '0.92rem', fontWeight: 600 }}>{dim.name}</span>
            <span style={{
              fontSize: '0.85rem', fontWeight: 700,
              color: getDimColor(dim.pct),
            }}>
              {dim.score} / {dim.max}（{dim.pct}%）
            </span>
          </div>
          <div style={{
            height: '10px', background: 'var(--c-border)',
            borderRadius: '5px', overflow: 'hidden',
          }}>
            <div style={{
              height: '100%', borderRadius: '5px',
              background: getDimColor(dim.pct),
              transition: 'width 0.8s ease',
              width: `${dim.pct}%`,
            }} />
          </div>
          <div style={{
            fontSize: '0.82rem', color: 'var(--c-muted)',
            marginTop: '4px', lineHeight: 1.5,
          }}>
            {getDimComment(dim.pct, dim.name)}
          </div>
        </div>
      ))}
    </div>
  )
}

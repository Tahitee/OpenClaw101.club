'use client'
import { useState } from 'react'

export default function QuestionCard({ q, value, onChange }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="assess-card">
      {/* Title row */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '30px', height: '30px', borderRadius: '50%',
          background: '#e74c3c', color: 'white',
          fontSize: '0.82rem', fontWeight: 700,
          marginRight: '10px', flexShrink: 0,
        }}>
          {q.id}
        </span>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>{q.title}</h3>
      </div>

      {/* Background toggle */}
      <button
        onClick={() => setExpanded(v => !v)}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '4px',
          fontSize: '0.82rem', color: 'var(--c-muted)',
          background: 'var(--c-bg)', border: '1px solid var(--c-border)',
          borderRadius: '8px', padding: '5px 12px', cursor: 'pointer',
          marginBottom: '14px', transition: 'background .2s',
        }}
      >
        {expanded ? '收起' : '展开'}背景说明 {expanded ? '▲' : '▼'}
      </button>

      {expanded && (
        <div style={{
          fontSize: '0.9rem', color: 'var(--c-muted)', lineHeight: 1.7,
          marginBottom: '16px', padding: '14px 16px',
          background: 'var(--c-bg)', borderRadius: '10px',
          borderLeft: '3px solid #e74c3c',
        }}>
          {q.bg}
        </div>
      )}

      {/* Question text */}
      <div style={{
        fontSize: '0.95rem', fontWeight: 600,
        marginBottom: '18px', lineHeight: 1.5,
      }}>
        请评估：{q.q}
      </div>

      {/* Slider */}
      <div style={{ padding: '0 4px' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          fontSize: '0.75rem', color: 'var(--c-muted)', marginBottom: '8px',
        }}>
          <span>完全不能接受</span>
          <span>完全可以接受</span>
        </div>

        <input
          className="assess-slider"
          type="range" min={1} max={10} step={1}
          value={value}
          onChange={e => onChange(Number(e.target.value))}
          style={{ width: '100%' }}
        />

        <div style={{
          display: 'flex', justifyContent: 'space-between',
          padding: '0 2px', marginTop: '4px',
        }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
            <span key={n} style={{
              fontSize: '0.7rem', color: 'var(--c-muted)',
              opacity: 0.5, width: '20px', textAlign: 'center',
            }}>
              {n}
            </span>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            minWidth: '40px', height: '30px',
            background: '#e74c3c', color: 'white',
            borderRadius: '15px', fontSize: '0.92rem', fontWeight: 700,
            padding: '0 12px',
          }}>
            {value} 分
          </span>
        </div>
      </div>
    </div>
  )
}

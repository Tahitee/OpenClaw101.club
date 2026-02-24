'use client'
import { SECTIONS } from '../data'

export default function Progress({ step, goTo }) {
  return (
    <div style={{ marginBottom: '32px' }}>
      {/* Dots */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '4px', marginBottom: '14px', flexWrap: 'wrap',
      }}>
        {SECTIONS.map((sec, i) => {
          const done = i < step
          const active = i === step
          return (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
              {i > 0 && (
                <span style={{
                  width: '20px', height: '2px',
                  background: done ? '#10b981' : 'var(--c-border)',
                  display: 'inline-block', margin: '0 2px',
                }} />
              )}
              <span
                onClick={() => i <= step && goTo(i)}
                title={sec.title}
                style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.82rem', fontWeight: 600,
                  cursor: i <= step ? 'pointer' : 'default',
                  transition: 'all .3s', flexShrink: 0,
                  border: `2px solid ${active ? '#e74c3c' : done ? '#10b981' : 'var(--c-border)'}`,
                  color: active || done ? 'white' : 'var(--c-muted)',
                  background: active ? '#e74c3c' : done ? '#10b981' : 'var(--c-card)',
                  transform: active ? 'scale(1.1)' : 'none',
                }}
              >
                {done ? '✓' : i + 1}
              </span>
            </span>
          )
        })}
      </div>

      {/* Bar */}
      <div style={{
        height: '6px', background: 'var(--c-border)',
        borderRadius: '3px', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, #e74c3c, #ff6b6b)',
          borderRadius: '3px',
          transition: 'width .5s ease',
          width: `${(step / 6) * 100}%`,
        }} />
      </div>

      <div style={{
        textAlign: 'center', fontSize: '0.85rem',
        color: 'var(--c-muted)', marginTop: '8px',
      }}>
        第 {step + 1} / 6 部分 · 共 28 题
      </div>
    </div>
  )
}

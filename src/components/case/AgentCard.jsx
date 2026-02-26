'use client'
import { useState } from 'react'

export default function AgentCard({ name, color = '#ea580c', role, soul, children }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      style={{
        borderRadius: '12px',
        border: '1px solid #e7e5e4',
        overflow: 'hidden',
        margin: '20px 0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      {/* 顶部彩色条 */}
      <div style={{ height: '4px', background: color }} />

      {/* 头部 */}
      <div
        style={{
          padding: '20px 24px',
          background: '#fafaf9',
          borderBottom: '1px solid #e7e5e4',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <div style={{ fontSize: '18px', fontWeight: 700, color }}>
            {name}
          </div>
          <div style={{ fontSize: '13px', color: '#78716c', marginTop: '4px' }}>
            {role}
          </div>
        </div>
        <div
          style={{
            fontSize: '20px',
            color: '#a8a29e',
            transform: expanded ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.2s',
          }}
        >
          ▾
        </div>
      </div>

      {/* SOUL.md 引用 */}
      {soul && (
        <div
          style={{
            padding: '16px 24px',
            background: `${color}08`,
            borderBottom: '1px solid #e7e5e4',
          }}
        >
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#a8a29e',
              marginBottom: '8px',
            }}
          >
            📜 SOUL.md 身份定义
          </div>
          <div
            style={{
              fontSize: '13px',
              color: '#57534e',
              lineHeight: 1.7,
              fontStyle: 'italic',
              borderLeft: `3px solid ${color}`,
              paddingLeft: '16px',
            }}
          >
            {soul}
          </div>
        </div>
      )}

      {/* 详细内容 */}
      {expanded && children && (
        <div style={{ padding: '20px 24px', fontSize: '14px', lineHeight: 1.8, color: '#44403c' }}>
          {children}
        </div>
      )}

      {/* 展开提示 */}
      {!expanded && children && (
        <div
          style={{
            padding: '12px 24px',
            fontSize: '13px',
            color: '#a8a29e',
            textAlign: 'center',
            cursor: 'pointer',
            background: '#fafaf9',
          }}
          onClick={() => setExpanded(true)}
        >
          点击展开详细配置 ↓
        </div>
      )}
    </div>
  )
}

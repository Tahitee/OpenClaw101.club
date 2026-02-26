'use client'

import { useState } from 'react'

function FeatureItem({ number, title, desc }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="fh-item"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1.25rem',
        padding: '1.25rem',
        borderRadius: '12px',
        transition: 'background 0.2s ease',
        background: hovered ? 'rgba(249, 115, 22, 0.04)' : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          flexShrink: 0,
          fontSize: '2.5rem',
          fontWeight: 800,
          lineHeight: 1,
          background: 'linear-gradient(135deg, #f97316, #ea580c)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.02em',
          minWidth: '56px',
        }}
      >
        {number}
      </div>
      <div style={{ flex: 1 }}>
        <h4 className="fh-title" style={{
          fontSize: '1.05rem',
          fontWeight: 700,
          margin: '0 0 0.4rem 0',
          color: '#1c1917',
        }}>{title}</h4>
        <p className="fh-desc" style={{
          fontSize: '0.875rem',
          lineHeight: 1.7,
          color: '#57534e',
          margin: 0,
        }}>{desc}</p>
      </div>
    </div>
  )
}

export default function FeatureHighlight({ features }) {
  const defaultFeatures = [
    {
      number: '01',
      title: '多 Agent 隔离运行',
      desc: '一个 Gateway 网关可以同时运行多个完全独立的 Agent，每个 Agent 有自己的身份、知识库和技能组。采购 Agent 不会混淆客服 Agent 的对话。',
    },
    {
      number: '02',
      title: '原生支持企业微信和 WhatsApp',
      desc: '通过社区插件，OpenClaw 可以同时接入这两个平台，让 Agent 真正「驻扎」在你每天使用的工具里。',
    },
    {
      number: '03',
      title: '心跳机制让 AI 从被动变主动',
      desc: 'Heartbeat 功能让 Agent 按设定间隔自动检查任务——比如每 2 小时扫描供应商邮件，发现新报价时主动通知。',
    },
  ]

  const items = features && features.length > 0 ? features : defaultFeatures

  return (
    <>
      <style>{`
        @media (prefers-color-scheme: dark) {
          .fh-root { background: #1c1917 !important; border-color: rgba(249, 115, 22, 0.15) !important; }
          .fh-root .fh-title { color: #fafaf9 !important; }
          .fh-root .fh-desc { color: #a8a29e !important; }
        }
        html[class~="dark"] .fh-root { background: #1c1917 !important; border-color: rgba(249, 115, 22, 0.15) !important; }
        html[class~="dark"] .fh-root .fh-title { color: #fafaf9 !important; }
        html[class~="dark"] .fh-root .fh-desc { color: #a8a29e !important; }
      `}</style>
      <div className="fh-root" style={{
        margin: '1.5rem 0',
        padding: '1.5rem',
        borderRadius: '16px',
        background: '#fffbf5',
        border: '1px solid rgba(249, 115, 22, 0.1)',
      }}>
        {items.map((f, i) => (
          <FeatureItem
            key={i}
            number={f.number || String(i + 1).padStart(2, '0')}
            title={f.title}
            desc={f.desc}
          />
        ))}
      </div>
    </>
  )
}

'use client'

const layers = [
  {
    label: '📨 渠道层 Channels',
    color: '#3b82f6',
    bg: '#eff6ff',
    items: [
      { name: 'WhatsApp', desc: '供应商沟通' },
      { name: '企业微信', desc: '客户服务 + 内部协作' },
      { name: 'Email', desc: '报价邮件自动处理' },
      { name: 'Telegram', desc: '个人控制台 + 日报推送' },
    ],
  },
  {
    label: '🤖 Agent 层（5 个独立 Agent）',
    color: '#ea580c',
    bg: '#fff7ed',
    items: [
      { name: '#1 采购询价', desc: 'WhatsApp + Email' },
      { name: '#2 客户服务', desc: '企业微信（默认）' },
      { name: '#3 社媒传播', desc: 'Telegram 控制' },
      { name: '#4 线索挖掘', desc: 'Heartbeat 自动运行' },
      { name: '#5 跨境贸易', desc: '共享技能层' },
    ],
  },
  {
    label: '🔧 技能层 Skills',
    color: '#10b981',
    bg: '#ecfdf5',
    items: [
      { name: '基础技能', desc: '邮件读写 · 浏览器控制 · 文件管理' },
      { name: '自定义技能', desc: '报价对比 · 产品知识库 · HS编码查询' },
      { name: '社区技能', desc: 'ClawRouter · Web Scraper' },
    ],
  },
]

export default function ArchitectureDiagram() {
  return (
    <div
      style={{
        borderRadius: '16px',
        border: '2px solid #d6d3d1',
        overflow: 'hidden',
        margin: '32px 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '20px 24px',
          background: 'linear-gradient(135deg, #1c1917, #292524)',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
          OpenClaw Gateway
        </div>
        <div style={{ fontSize: '13px', color: '#a8a29e', marginTop: '4px' }}>
          本地运行 · 数据全部在自己手里
        </div>
      </div>

      {/* Layers */}
      {layers.map((layer, li) => (
        <div
          key={li}
          style={{
            padding: '20px 24px',
            background: layer.bg,
            borderTop: '1px solid #e7e5e4',
          }}
        >
          <div
            style={{
              fontSize: '14px',
              fontWeight: 700,
              color: layer.color,
              marginBottom: '12px',
            }}
          >
            {layer.label}
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {layer.items.map((item, ii) => (
              <div
                key={ii}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  background: '#fff',
                  border: `1px solid ${layer.color}30`,
                  fontSize: '13px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                <span style={{ fontWeight: 600, color: '#1c1917' }}>{item.name}</span>
                <span style={{ color: '#78716c', marginLeft: '6px' }}>— {item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

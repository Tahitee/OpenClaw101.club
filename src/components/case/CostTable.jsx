'use client'

export default function CostTable({ items = [], total }) {
  return (
    <div
      style={{
        borderRadius: '12px',
        border: '1px solid #e7e5e4',
        overflow: 'hidden',
        margin: '24px 0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}
    >
      {/* 表头 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr 0.8fr',
          padding: '14px 20px',
          background: '#292524',
          color: '#fff',
          fontSize: '13px',
          fontWeight: 600,
        }}
      >
        <div>项目</div>
        <div>方案</div>
        <div style={{ textAlign: 'right' }}>月费用</div>
      </div>

      {/* 行 */}
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr 0.8fr',
            padding: '12px 20px',
            background: i % 2 === 0 ? '#fff' : '#fafaf9',
            borderTop: '1px solid #f5f5f4',
            fontSize: '14px',
            color: '#44403c',
          }}
        >
          <div style={{ fontWeight: 500 }}>{item.name}</div>
          <div style={{ color: '#78716c' }}>{item.plan}</div>
          <div style={{ textAlign: 'right', fontFamily: 'monospace' }}>{item.cost}</div>
        </div>
      ))}

      {/* 合计 */}
      {total && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr 0.8fr',
            padding: '14px 20px',
            background: 'linear-gradient(135deg, #fff7ed, #fef3c7)',
            borderTop: '2px solid #ea580c',
            fontSize: '15px',
            fontWeight: 700,
            color: '#ea580c',
          }}
        >
          <div>{total.label || '合计'}</div>
          <div />
          <div style={{ textAlign: 'right', fontFamily: 'monospace' }}>{total.cost}</div>
        </div>
      )}
    </div>
  )
}

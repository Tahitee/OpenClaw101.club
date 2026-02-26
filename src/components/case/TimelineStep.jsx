'use client'

export default function TimelineStep({ steps = [] }) {
  return (
    <div style={{ margin: '32px 0', position: 'relative' }}>
      {steps.map((step, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            gap: '20px',
            marginBottom: i < steps.length - 1 ? '0' : '0',
            position: 'relative',
          }}
        >
          {/* 左侧时间线 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '40px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ea580c, #f97316)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 700,
                zIndex: 1,
                boxShadow: '0 2px 8px rgba(234, 88, 12, 0.3)',
              }}
            >
              {step.week}
            </div>
            {i < steps.length - 1 && (
              <div
                style={{
                  width: '2px',
                  flex: 1,
                  background: 'linear-gradient(to bottom, #ea580c, #e7e5e4)',
                  minHeight: '40px',
                }}
              />
            )}
          </div>

          {/* 右侧内容 */}
          <div
            style={{
              flex: 1,
              padding: '16px 20px',
              borderRadius: '10px',
              background: '#fafaf9',
              border: '1px solid #e7e5e4',
              marginBottom: '16px',
            }}
          >
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#1c1917', marginBottom: '6px' }}>
              {step.title}
            </div>
            <div style={{ fontSize: '14px', color: '#57534e', lineHeight: 1.7 }}>
              {step.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

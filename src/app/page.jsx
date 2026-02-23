export default function IndexPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', margin: '4rem 0' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          🦞 OpenClaw101
        </h1>
        <p style={{ fontSize: '1.4rem', color: '#666', marginBottom: '2rem' }}>
          从零开始掌握 OpenClaw AI 助手框架
        </p>
        <p style={{ fontSize: '1.1rem', color: '#888', maxWidth: '600px', margin: '0 auto 2rem' }}>
          OpenClaw 是一个强大的 AI 助手框架，支持多渠道接入、多模型切换、
          技能扩展和跨设备协作。本站提供从入门到精通的完整中文教程。
        </p>
        <a
          href="/docs"
          style={{
            display: 'inline-block',
            padding: '12px 32px',
            backgroundColor: '#e74c3c',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          开始学习 →
        </a>
      </div>

      {/* Features */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '3rem 0' }}>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🚀 快速上手</h3>
          <p style={{ color: '#666' }}>从安装到运行，5分钟让你的 AI 助手跑起来</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📱 多渠道接入</h3>
          <p style={{ color: '#666' }}>WhatsApp、Telegram、Discord、飞书、钉钉、企微、QQ、微信</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🧠 深度配置</h3>
          <p style={{ color: '#666' }}>会话管理、记忆系统、模型切换、技能扩展</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>💡 实战案例</h3>
          <p style={{ color: '#666' }}>VPS 部署、多 Agent、定时任务、浏览器自动化</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🔧 专家进阶</h3>
          <p style={{ color: '#666' }}>编写自定义技能、沙箱机制、社区案例</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🌐 中英双语</h3>
          <p style={{ color: '#666' }}>中文为主，英文同步，服务全球开发者</p>
        </div>
      </div>

      {/* Content Map */}
      <div style={{ margin: '3rem 0' }}>
        <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2rem' }}>📚 教程目录</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', background: '#fef2f2', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.8rem' }}>🎯 快速入门</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/docs/getting-started/what-is-openclaw">OpenClaw 是什么</a></li>
              <li><a href="/docs/getting-started/installation">安装与部署</a></li>
              <li><a href="/docs/getting-started/gateway-basics">Gateway 基础</a></li>
            </ul>
          </div>

          <div style={{ padding: '1.5rem', background: '#eff6ff', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.8rem' }}>⚙️ 配置详解</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/docs/config/config-guide">配置文件全解</a></li>
              <li><a href="/docs/config/persona">人格与提示词</a></li>
            </ul>
          </div>

          <div style={{ padding: '1.5rem', background: '#f0fdf4', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.8rem' }}>📱 渠道接入</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/docs/channels/international">WhatsApp / Telegram / Discord</a></li>
              <li><a href="/docs/channels/feishu">飞书</a></li>
              <li><a href="/docs/channels/dingtalk">钉钉</a></li>
              <li><a href="/docs/channels/wecom">企业微信</a></li>
              <li><a href="/docs/channels/qq">QQ</a></li>
              <li><a href="/docs/channels/wechat">微信</a></li>
            </ul>
          </div>

          <div style={{ padding: '1.5rem', background: '#faf5ff', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.8rem' }}>🧠 进阶功能</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/docs/advanced/sessions">会话与多轮对话</a></li>
              <li><a href="/docs/advanced/memory">记忆系统</a></li>
              <li><a href="/docs/advanced/models">模型管理</a></li>
              <li><a href="/docs/advanced/skills">技能系统</a></li>
              <li><a href="/docs/advanced/security">安全与权限</a></li>
              <li><a href="/docs/advanced/voice">语音功能</a></li>
            </ul>
          </div>

          <div style={{ padding: '1.5rem', background: '#fffbeb', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.8rem' }}>💡 实战案例</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/docs/cases/vps-deploy">VPS 一键部署</a></li>
              <li><a href="/docs/cases/multi-agent">多 Agent 协作</a></li>
              <li><a href="/docs/cases/cron-heartbeat">定时任务与心跳</a></li>
              <li><a href="/docs/cases/browser-automation">浏览器自动化</a></li>
              <li><a href="/docs/cases/mobile-node">手机 Node 控制</a></li>
            </ul>
          </div>

          <div style={{ padding: '1.5rem', background: '#f0fdfa', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.8rem' }}>🔧 专家进阶</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/docs/expert/write-skill">编写自定义技能</a></li>
              <li><a href="/docs/expert/sandboxing">沙箱机制详解</a></li>
              <li><a href="/docs/expert/community-cases">社区案例集</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{ textAlign: 'center', margin: '4rem 0 2rem', padding: '2rem', background: '#f9fafb', borderRadius: '12px' }}>
        <h2 style={{ marginBottom: '1rem' }}>准备好了吗？</h2>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>
          从「OpenClaw 是什么」开始，一步步构建你的 AI 助手。
        </p>
        <a
          href="/docs/getting-started/what-is-openclaw"
          style={{
            display: 'inline-block',
            padding: '10px 24px',
            backgroundColor: '#e74c3c',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          从第一篇开始 →
        </a>
      </div>
    </div>
  )
}

export default function IndexPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', margin: '4rem 0 2rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          🦞 OpenClaw101
        </h1>
        <p style={{ fontSize: '1.4rem', color: '#666', marginBottom: '2rem' }}>
          从零开始掌握 OpenClaw AI 助手框架
        </p>
        <p style={{ fontSize: '1.1rem', color: '#888', maxWidth: '600px', margin: '0 auto 2rem' }}>
          OpenClaw 是一个强大的开源 AI 助手框架，支持多渠道接入、多模型切换、
          技能扩展和跨设备协作。本站提供从入门到精通的完整中文教程。
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/docs/getting-started/installation"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              backgroundColor: '#e74c3c',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            ⚡ 5分钟快速上手
          </a>
          <a
            href="/docs/getting-started/what-is-openclaw"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              backgroundColor: 'transparent',
              color: '#e74c3c',
              border: '2px solid #e74c3c',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold'
            }}
          >
            📖 了解 OpenClaw 是什么
          </a>
        </div>
      </div>

      {/* Quick Start Banner */}
      <div style={{
        margin: '2rem 0',
        padding: '1.5rem 2rem',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        borderRadius: '16px',
        color: 'white'
      }}>
        <h3 style={{ margin: '0 0 0.8rem', fontSize: '1.2rem' }}>⚡ 三步搞定</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <code style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            npm i -g openclaw
          </code>
          <span style={{ color: '#00E5FF' }}>→</span>
          <code style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            openclaw onboard
          </code>
          <span style={{ color: '#00E5FF' }}>→</span>
          <code style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '6px', fontSize: '0.95rem' }}>
            开始对话 🎉
          </code>
        </div>
        <p style={{ margin: '0.8rem 0 0', fontSize: '0.9rem', opacity: 0.7 }}>
          需要 Node.js 22+。详见 <a href="/docs/getting-started/installation" style={{ color: '#00E5FF' }}>OpenClaw 完整安装教程</a>
        </p>
      </div>

      {/* User Personas - Who Is This For */}
      <div style={{ margin: '3rem 0' }}>
        <h2 style={{ fontSize: '1.6rem', textAlign: 'center', marginBottom: '1.5rem' }}>🎯 找到适合你的路径</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.2rem' }}>

          <div style={{ padding: '1.5rem', border: '2px solid #e74c3c', borderRadius: '12px', background: '#fef2f2' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>🌱 我是小白</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem' }}>
              没用过 AI Agent，想从零开始搭一个自己的 AI 助手
            </p>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
              <strong>推荐路径：</strong><br/>
              ① <a href="/docs/getting-started/what-is-openclaw">先了解 OpenClaw 是什么</a><br/>
              ② <a href="/docs/getting-started/installation">跟着安装教程走</a><br/>
              ③ <a href="/docs/channels/qq">接入你最常用的聊天工具</a><br/>
              ④ <a href="/docs/faq">遇到问题看 FAQ</a>
            </div>
          </div>

          <div style={{ padding: '1.5rem', border: '2px solid #3498db', borderRadius: '12px', background: '#eff6ff' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>💻 我是开发者</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem' }}>
              有技术基础，想深度定制 AI 助手、开发技能、部署到生产环境
            </p>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
              <strong>推荐路径：</strong><br/>
              ① <a href="/docs/getting-started/installation">快速安装</a> → <a href="/docs/config/config-guide">配置详解</a><br/>
              ② <a href="/docs/advanced/models">模型配置</a> → <a href="/docs/advanced/skills">技能系统</a><br/>
              ③ <a href="/docs/cases/vps-deploy">VPS 部署实战</a><br/>
              ④ <a href="/docs/expert/write-skill">自己写 Skill</a>
            </div>
          </div>

          <div style={{ padding: '1.5rem', border: '2px solid #27ae60', borderRadius: '12px', background: '#f0fdf4' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>🏢 企业 / 团队</h3>
            <p style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1rem' }}>
              想为团队部署 AI 助手，接入企业通讯工具，保证数据安全
            </p>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
              <strong>推荐路径：</strong><br/>
              ① <a href="/docs/channels/feishu">飞书</a> / <a href="/docs/channels/dingtalk">钉钉</a> / <a href="/docs/channels/wecom">企微</a> 接入<br/>
              ② <a href="/docs/advanced/security">安全加固指南</a><br/>
              ③ <a href="/docs/cases/multi-agent">多 Agent 架构</a><br/>
              ④ <a href="/docs/expert/sandboxing">沙箱隔离部署</a>
            </div>
          </div>

        </div>
      </div>

      {/* Features */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🚀 快速上手</h3>
          <p style={{ color: '#666' }}>从安装到运行，5分钟让你的 AI 助手跑起来</p>
        </div>
        <div style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📱 多渠道接入</h3>
          <p style={{ color: '#666' }}>WhatsApp、Telegram、Discord、飞书、钉钉、企微、QQ</p>
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
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>🎬 视频教程</h3>
          <p style={{ color: '#666' }}>YouTube + Bilibili 精选视频合集</p>
        </div>
      </div>

      {/* Content Map */}
      <div style={{ margin: '3rem 0' }}>
        <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2rem' }}>📚 教程目录</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ padding: '1.5rem', background: '#fef2f2', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.8rem' }}>🎯 快速入门</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/docs/getting-started/what-is-openclaw">OpenClaw 是什么 — 核心概念与适用场景</a></li>
              <li><a href="/docs/getting-started/installation">安装与部署 — 从零开始的完整指南</a></li>
              <li><a href="/docs/getting-started/gateway-basics">Gateway 基础 — 理解核心组件</a></li>
            </ul>
          </div>

          <div style={{ padding: '1.5rem', background: '#eff6ff', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.8rem' }}>⚙️ 配置详解</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/docs/config/config-guide">配置文件全解 — 每个配置项详细说明</a></li>
              <li><a href="/docs/config/persona">打造 AI 人设 — 定义独特的 AI 人格</a></li>
            </ul>
          </div>

          <div style={{ padding: '1.5rem', background: '#f0fdf4', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.8rem' }}>📱 渠道接入</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/docs/channels/international">WhatsApp / Telegram / Discord 接入教程</a></li>
              <li><a href="/docs/channels/feishu">飞书接入</a> · <a href="/docs/channels/dingtalk">钉钉接入</a> · <a href="/docs/channels/wecom">企微接入</a></li>
              <li><a href="/docs/channels/qq">QQ 接入</a> · <a href="/docs/channels/wechat">微信接入分析</a></li>
            </ul>
          </div>

          <div style={{ padding: '1.5rem', background: '#faf5ff', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.8rem' }}>🧠 进阶功能</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/docs/advanced/sessions">会话管理详解</a> · <a href="/docs/advanced/memory">记忆系统实战</a></li>
              <li><a href="/docs/advanced/models">模型配置与切换</a> · <a href="/docs/advanced/skills">技能系统入门</a></li>
              <li><a href="/docs/advanced/security">安全加固指南</a> · <a href="/docs/advanced/voice">语音交互配置</a></li>
            </ul>
          </div>

          <div style={{ padding: '1.5rem', background: '#fffbeb', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.8rem' }}>💡 实战案例</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/docs/cases/vps-deploy">VPS Docker 部署实战</a> · <a href="/docs/cases/multi-agent">多 Agent 架构</a></li>
              <li><a href="/docs/cases/cron-heartbeat">Cron 定时任务自动化</a> · <a href="/docs/cases/browser-automation">浏览器自动化</a></li>
              <li><a href="/docs/cases/mobile-node">手机 Node 远程控制</a></li>
            </ul>
          </div>

          <div style={{ padding: '1.5rem', background: '#f0fdfa', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '0.8rem' }}>🔧 更多资源</h3>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
              <li><a href="/docs/expert/write-skill">从零开发自定义 Skill</a></li>
              <li><a href="/docs/expert/community-cases">社区精选案例集（29+）</a></li>
              <li><a href="/docs/videos">🎬 视频教程合集</a> · <a href="/docs/faq">❓ 常见问题 FAQ</a></li>
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
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
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
            从第一篇教程开始 →
          </a>
          <a
            href="/docs/faq"
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              backgroundColor: 'transparent',
              color: '#666',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            ❓ 查看常见问题
          </a>
        </div>
      </div>
    </div>
  )
}

import styles from './page.module.css'

export default function IndexPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>
          🦞 OpenClaw101
        </h1>
        <p className={styles.heroSubtitle}>
          从零开始掌握 OpenClaw AI 助手框架
        </p>
        <p className={styles.heroDescription}>
          OpenClaw 是一个强大的开源 AI 助手框架，支持多渠道接入、多模型切换、
          技能扩展和跨设备协作。本站提供从入门到精通的完整中文教程。
        </p>
        <div className={styles.heroActions}>
          <a href="/docs/getting-started/installation" className={styles.btnPrimary}>
            ⚡ 5分钟快速上手
          </a>
          <a href="/docs/getting-started/what-is-openclaw" className={styles.btnSecondary}>
            📖 了解 OpenClaw 是什么
          </a>
        </div>
      </div>

      {/* Quick Start Banner */}
      <div className={styles.quickStart}>
        <h3 className={styles.quickStartTitle}>⚡ 三步搞定</h3>
        <div className={styles.quickStartSteps}>
          <div className={styles.stepItem}>
            <span className={styles.stepNumber}>1</span>
            <code className={styles.quickStartCode}>npm i -g openclaw</code>
          </div>
          <span className={styles.quickStartArrow}>→</span>
          <div className={styles.stepItem}>
            <span className={styles.stepNumber}>2</span>
            <code className={styles.quickStartCode}>openclaw onboard</code>
          </div>
          <span className={styles.quickStartArrow}>→</span>
          <div className={styles.stepItem}>
            <span className={styles.stepNumber}>3</span>
            <code className={styles.quickStartCode}>开始对话 🎉</code>
          </div>
        </div>
        <p className={styles.quickStartNote}>
          需要 Node.js 22+。详见 <a href="/docs/getting-started/installation" className={styles.quickStartLink}>OpenClaw 完整安装教程</a>
        </p>
      </div>

      {/* User Personas - Who Is This For */}
      <div className={styles.personas}>
        <h2 className={styles.personasTitle}>🎯 找到适合你的路径</h2>
        <div className={styles.personasGrid}>

          <div className={`${styles.personaCard} ${styles.personaBeginner}`}>
            <h3 className={styles.personaCardTitle}>🌱 我是小白</h3>
            <p className={styles.personaCardDesc}>
              没用过 AI Agent，想从零开始搭一个自己的 AI 助手
            </p>
            <div className={styles.personaCardPath}>
              <strong>推荐路径：</strong><br/>
              ① <a href="/docs/getting-started/what-is-openclaw">先了解 OpenClaw 是什么</a><br/>
              ② <a href="/docs/getting-started/installation">跟着安装教程走</a><br/>
              ③ <a href="/docs/channels/qq">接入你最常用的聊天工具</a><br/>
              ④ <a href="/docs/faq">遇到问题看 FAQ</a>
            </div>
          </div>

          <div className={`${styles.personaCard} ${styles.personaDeveloper}`}>
            <h3 className={styles.personaCardTitle}>💻 我是开发者</h3>
            <p className={styles.personaCardDesc}>
              有技术基础，想深度定制 AI 助手、开发技能、部署到生产环境
            </p>
            <div className={styles.personaCardPath}>
              <strong>推荐路径：</strong><br/>
              ① <a href="/docs/getting-started/installation">快速安装</a> → <a href="/docs/config/config-guide">配置详解</a><br/>
              ② <a href="/docs/advanced/models">模型配置</a> → <a href="/docs/advanced/skills">技能系统</a><br/>
              ③ <a href="/docs/cases/vps-deploy">VPS 部署实战</a><br/>
              ④ <a href="/docs/expert/write-skill">自己写 Skill</a>
            </div>
          </div>

          <div className={`${styles.personaCard} ${styles.personaEnterprise}`}>
            <h3 className={styles.personaCardTitle}>🏢 企业 / 团队</h3>
            <p className={styles.personaCardDesc}>
              想为团队部署 AI 助手，接入企业通讯工具，保证数据安全
            </p>
            <div className={styles.personaCardPath}>
              <strong>推荐路径：</strong><br/>
              ① <a href="/docs/channels/feishu">飞书</a> / <a href="/docs/channels/dingtalk">钉钉</a> / <a href="/docs/channels/wecom">企微</a> 接入<br/>
              ② <a href="/docs/advanced/security">安全加固指南</a><br/>
              ③ <a href="/docs/cases/multi-agent">多 Agent 架构</a><br/>
              ④ <a href="/docs/expert/sandboxing">沙箱隔离部署</a><br/>
              ⭐ <a href="/assessment/"><strong>先做风险评估</strong></a>
            </div>
          </div>

        </div>
      </div>

      {/* Assessment Banner */}
      <div className={styles.assessmentBanner}>
        <span className={styles.assessmentBannerIcon}>📋</span>
        <h2 className={styles.assessmentBannerTitle}>企业适合引入 OpenClaw 吗？</h2>
        <p className={styles.assessmentBannerDesc}>
          28 道专业评估题，5 分钟量化你的企业在安全、数据、运维、合规等维度的准备程度
        </p>
        <div className={styles.assessmentBannerTags}>
          <span className={styles.assessmentTag}>🛡️ 安全风险</span>
          <span className={styles.assessmentTag}>📊 数据合规</span>
          <span className={styles.assessmentTag}>🔧 运维能力</span>
          <span className={styles.assessmentTag}>⚖️ 决策建议</span>
        </div>
        <a href="/assessment/" className={styles.btnAssessment}>
          开始免费评估 →
        </a>
      </div>

      {/* Content Map */}
      <div className={styles.contentMap}>
        <h2 className={styles.contentMapTitle}>📚 教程目录</h2>

        <div className={styles.contentGrid}>
          <div className={`${styles.contentCard} ${styles.contentCardGettingStarted}`}>
            <h3 className={styles.contentCardTitle}>🎯 快速入门</h3>
            <ul className={styles.contentCardList}>
              <li><a href="/docs/getting-started/what-is-openclaw">OpenClaw 是什么 — 核心概念与适用场景</a></li>
              <li><a href="/docs/getting-started/installation">安装与部署 — 从零开始的完整指南</a></li>
              <li><a href="/docs/getting-started/gateway-basics">Gateway 基础 — 理解核心组件</a></li>
            </ul>
          </div>

          <div className={`${styles.contentCard} ${styles.contentCardConfig}`}>
            <h3 className={styles.contentCardTitle}>⚙️ 配置详解</h3>
            <ul className={styles.contentCardList}>
              <li><a href="/docs/config/config-guide">配置文件全解 — 每个配置项详细说明</a></li>
              <li><a href="/docs/config/persona">打造 AI 人设 — 定义独特的 AI 人格</a></li>
            </ul>
          </div>

          <div className={`${styles.contentCard} ${styles.contentCardChannels}`}>
            <h3 className={styles.contentCardTitle}>📱 渠道接入</h3>
            <ul className={styles.contentCardList}>
              <li><a href="/docs/channels/international">WhatsApp / Telegram / Discord 接入教程</a></li>
              <li><a href="/docs/channels/feishu">飞书接入</a> · <a href="/docs/channels/dingtalk">钉钉接入</a> · <a href="/docs/channels/wecom">企微接入</a></li>
              <li><a href="/docs/channels/qq">QQ 接入</a> · <a href="/docs/channels/wechat">微信接入分析</a></li>
            </ul>
          </div>

          <div className={`${styles.contentCard} ${styles.contentCardAdvanced}`}>
            <h3 className={styles.contentCardTitle}>🧠 进阶功能</h3>
            <ul className={styles.contentCardList}>
              <li><a href="/docs/advanced/sessions">会话管理详解</a> · <a href="/docs/advanced/memory">记忆系统实战</a></li>
              <li><a href="/docs/advanced/models">模型配置与切换</a> · <a href="/docs/advanced/skills">技能系统入门</a></li>
              <li><a href="/docs/advanced/security">安全加固指南</a> · <a href="/docs/advanced/voice">语音交互配置</a></li>
            </ul>
          </div>

          <div className={`${styles.contentCard} ${styles.contentCardCases}`}>
            <h3 className={styles.contentCardTitle}>💡 实战案例</h3>
            <ul className={styles.contentCardList}>
              <li><a href="/docs/cases/vps-deploy">VPS Docker 部署实战</a> · <a href="/docs/cases/multi-agent">多 Agent 架构</a></li>
              <li><a href="/docs/cases/cron-heartbeat">Cron 定时任务自动化</a> · <a href="/docs/cases/browser-automation">浏览器自动化</a></li>
              <li><a href="/docs/cases/mobile-node">手机 Node 远程控制</a></li>
            </ul>
          </div>

          <div className={`${styles.contentCard} ${styles.contentCardMore}`}>
            <h3 className={styles.contentCardTitle}>🔧 更多资源</h3>
            <ul className={styles.contentCardList}>
              <li><a href="/docs/expert/write-skill">从零开发自定义 Skill</a></li>
              <li><a href="/docs/expert/community-cases">社区精选案例集（29+）</a></li>
              <li><a href="/docs/videos">🎬 视频教程合集</a> · <a href="/docs/faq">❓ 常见问题 FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className={styles.footerCta}>
        <h2 className={styles.footerCtaTitle}>准备好了吗？</h2>
        <p className={styles.footerCtaText}>
          从「OpenClaw 是什么」开始，一步步构建你的 AI 助手。
        </p>
        <div className={styles.footerCtaActions}>
          <a href="/docs/getting-started/what-is-openclaw" className={styles.btnCtaPrimary}>
            从第一篇教程开始 →
          </a>
          <a href="/docs/faq" className={styles.btnCtaSecondary}>
            ❓ 查看常见问题
          </a>
        </div>
      </div>
    </div>
  )
}

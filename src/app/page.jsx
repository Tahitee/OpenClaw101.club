import styles from './page.module.css'
import { WebSiteJsonLd, OrganizationJsonLd, BreadcrumbJsonLd } from '../components/JsonLd'

export default function IndexPage() {
  return (
    <main className={styles.container}>
      {/* Structured Data */}
      <WebSiteJsonLd />
      <OrganizationJsonLd />
      <BreadcrumbJsonLd items={[{ name: '首页', url: '/' }]} />

      {/* Hero Section */}
      <section className={styles.hero} aria-label="OpenClaw101 介绍">
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
        <nav className={styles.heroActions} aria-label="快速导航">
          <a
            href="/docs/getting-started/installation"
            className={styles.btnPrimary}
            aria-label="查看 OpenClaw 安装教程，5分钟快速上手"
          >
            ⚡ 5分钟快速上手安装教程
          </a>
          <a
            href="/docs/getting-started/what-is-openclaw"
            className={styles.btnSecondary}
            aria-label="了解 OpenClaw 是什么"
          >
            📖 了解 OpenClaw 是什么
          </a>
        </nav>
      </section>

      {/* Quick Start Banner */}
      <section className={styles.quickStart} aria-label="快速安装步骤">
        <h2 className={styles.quickStartTitle}>⚡ 三步搞定</h2>
        <div className={styles.quickStartSteps}>
          <code className={styles.quickStartCode}>
            npm i -g openclaw
          </code>
          <span className={styles.quickStartArrow} aria-hidden="true">→</span>
          <code className={styles.quickStartCode}>
            openclaw onboard
          </code>
          <span className={styles.quickStartArrow} aria-hidden="true">→</span>
          <code className={styles.quickStartCode}>
            开始对话 🎉
          </code>
        </div>
        <p className={styles.quickStartNote}>
          需要 Node.js 22+。详见{' '}
          <a href="/docs/getting-started/installation" className={styles.quickStartLink}>
            OpenClaw 完整安装教程
          </a>
        </p>
      </section>

      {/* Features */}
      <section aria-label="核心功能特性">
        <div className={styles.features}>
          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>🚀 快速上手</h3>
            <p className={styles.featureDesc}>从安装到运行，5分钟让你的 AI 助手跑起来</p>
          </article>
          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>📱 多渠道接入</h3>
            <p className={styles.featureDesc}>WhatsApp、Telegram、Discord、飞书、钉钉、企微、QQ</p>
          </article>
          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>🧠 深度配置</h3>
            <p className={styles.featureDesc}>会话管理、记忆系统、模型切换、技能扩展</p>
          </article>
          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>💡 实战案例</h3>
            <p className={styles.featureDesc}>VPS 部署、多 Agent、定时任务、浏览器自动化</p>
          </article>
          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>🔧 专家进阶</h3>
            <p className={styles.featureDesc}>编写自定义技能、沙箱机制、社区案例</p>
          </article>
          <article className={styles.featureCard}>
            <h3 className={styles.featureTitle}>🎬 视频教程</h3>
            <p className={styles.featureDesc}>YouTube + Bilibili 精选视频合集</p>
          </article>
        </div>
      </section>

      {/* Prerequisites */}
      <aside className={styles.prerequisites} aria-label="前置知识要求">
        <h3 className={styles.prerequisitesTitle}>📋 前置知识</h3>
        <p className={styles.prerequisitesContent}>
          使用 OpenClaw 你需要：会基本的终端命令行操作 · 有 Node.js 22+ 环境 · 有 AI 模型的 API Key 或订阅<br/>
          不需要：编程经验 · AI 理论知识 · 运维经验<br/>
          <a href="/docs/faq" className={styles.faqLink}>→ 查看更多常见问题解答</a>
        </p>
      </aside>

      {/* Content Map */}
      <section className={styles.contentMap} aria-label="教程目录索引">
        <h2 className={styles.contentMapTitle}>📚 教程目录</h2>

        <nav className={styles.contentGrid} aria-label="教程分类导航">
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
        </nav>
      </section>

      {/* Footer CTA */}
      <section className={styles.footerCta} aria-label="开始学习">
        <h2 className={styles.footerCtaTitle}>准备好了吗？</h2>
        <p className={styles.footerCtaText}>
          从「OpenClaw 是什么」开始，一步步构建你的 AI 助手。
        </p>
        <div className={styles.footerCtaActions}>
          <a
            href="/docs/getting-started/what-is-openclaw"
            className={styles.btnCtaPrimary}
            aria-label="从第一篇教程开始学习 OpenClaw"
          >
            从第一篇教程开始 →
          </a>
          <a
            href="/docs/faq"
            className={styles.btnCtaSecondary}
            aria-label="查看 OpenClaw 常见问题解答"
          >
            ❓ 查看常见问题
          </a>
        </div>
      </section>
    </main>
  )
}

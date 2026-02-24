'use client'

function Roadmap({ items, bgColor }) {
  return (
    <div style={{
      padding: '16px', background: bgColor,
      borderRadius: '12px', marginTop: '16px',
    }}>
      <strong>推荐落地路线：</strong>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        flexWrap: 'wrap', marginTop: '10px', fontSize: '0.9rem',
      }}>
        {items.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            {i > 0 && <span style={{ color: 'var(--c-muted)' }}>→</span>}
            <span style={{
              padding: '6px 14px', background: 'var(--c-card)',
              borderRadius: '8px', border: '1px solid var(--c-border)',
            }}>
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ResultConclusion({ level }) {
  return (
    <div className="assess-card">
      <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 16px' }}>
        {level === 'green' && '📋 贵企业已具备引入 OpenClaw 的基本条件'}
        {level === 'yellow' && '📋 可以考虑引入，但有明确前提条件'}
        {level === 'red' && '📋 贵企业当前不适合引入 OpenClaw'}
      </h3>

      <div style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--c-muted)' }}>
        {level === 'green' && <GreenConclusion />}
        {level === 'yellow' && <YellowConclusion />}
        {level === 'red' && <RedConclusion />}
      </div>
    </div>
  )
}

function GreenConclusion() {
  return (
    <>
      <p>评估结果显示，贵企业在风险承受能力、技术基础和安全管理方面具备引入 OpenClaw 的条件。</p>
      <p>但 <strong style={{ color: 'var(--c-text)' }}>"具备条件"不等于"可以放心大胆地用"</strong>，仍建议您：</p>
      <ol style={{ paddingLeft: '20px', margin: '12px 0' }}>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>从非生产环境开始</strong>
          ：先在测试环境或非核心业务中验证 OpenClaw 的能力和行为，积累运营经验后再逐步扩大使用范围。不要一上来就让 AI 接管核心系统。
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>启用安全基线配置</strong>
          ：无论评分多高，都建议开启沙箱模式（sandbox.mode: &quot;all&quot;）并配置工具白名单。这相当于给 AI 加一道安全网——即使它"犯错"，破坏也被限制在可控范围内。
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>建立 AI 专项监控和响应流程</strong>
          ：定期进行安全审计，制定 AI 系统异常时的应急响应流程。建议每周检查一次操作日志，每月做一次安全审计。
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>关注低分维度</strong>
          ：即使总分达标，如果某个维度得分明显偏低（低于 50%），请优先补齐该维度的短板再投入使用。木桶效应在安全领域尤为明显。
        </li>
      </ol>
      <Roadmap items={['测试环境验证', '内部非核心场景', '安全审计通过', '逐步扩展核心业务']} bgColor="var(--c-green-bg)" />
    </>
  )
}

function YellowConclusion() {
  return (
    <>
      <p>评估结果显示，贵企业在部分维度上已具备条件，但其他维度存在明显短板。</p>
      <p><strong style={{ color: 'var(--c-text)' }}>如果在没有补齐短板的情况下强行引入，可能导致安全事故或合规问题。</strong></p>
      <p style={{ fontWeight: 600, color: 'var(--c-text)', marginTop: '16px' }}>必须优先解决的问题：</p>
      <ol style={{ paddingLeft: '20px', margin: '12px 0' }}>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>低于 4 分的题目是硬伤</strong>
          ：找出所有得分低于 4 分的题目，这些是贵企业目前的安全短板。在这些短板被补齐之前，不建议将 OpenClaw 用于涉及相关场景的工作。
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>必须开启沙箱模式</strong>
          ：对于这个分数段的企业，强烈建议以沙箱模式运行，确保 AI 的所有操作在隔离环境中执行。这是最基本的安全防线。
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>严格限制工具权限</strong>
          ：禁用 Shell 执行、浏览器控制、设备控制等高危工具，除非有明确业务需求且配套了足够的安全措施。
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>仅在内部测试环境部署</strong>
          ：不要将 OpenClaw 直接面向客户或用于处理核心业务数据。先在安全可控的环境中积累经验。
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>指定安全负责人</strong>
          ：必须有专人负责 OpenClaw 的安全配置、日志审计和异常响应。"装完就忘"的方式在这个分数段极其危险。
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>数据合规评估</strong>
          ：如果数据相关题目得分低于 4 分，必须在引入前完成法务评估，确认数据处理方式符合《数据安全法》和《个人信息保护法》。
        </li>
      </ol>
      <Roadmap items={['补齐短板', '沙箱+最小权限', '内部测试', '安全审计', '评估扩展']} bgColor="var(--c-yellow-bg)" />
    </>
  )
}

function RedConclusion() {
  return (
    <>
      <p>这个结果 <strong style={{ color: 'var(--c-text)' }}>不是说 OpenClaw 不好</strong> ——而是贵企业在当前阶段的安全基础设施、合规要求或技术能力，还不足以安全运营一个拥有系统级权限的 AI 工具。这是一个负责任的判断。</p>

      <p style={{ fontWeight: 600, color: 'var(--c-text)', marginTop: '16px' }}>为什么不建议现在引入？</p>
      <p>OpenClaw 不是一个"开箱即用"的 SaaS 产品。它是一个拥有 Shell 权限、能读写文件、能发送消息、能控制浏览器的 AI 系统。这意味着：</p>
      <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
        <li style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--c-text)' }}>没有足够的容灾能力</strong>：一次 AI 误操作可能导致不可逆的数据丢失</li>
        <li style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--c-text)' }}>没有数据合规方案</strong>：业务数据经由境外 API 处理可能违反《数据安全法》</li>
        <li style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--c-text)' }}>没有安全运营能力</strong>：无法发现和应对 AI 系统的异常行为</li>
        <li style={{ marginBottom: '8px' }}><strong style={{ color: 'var(--c-text)' }}>没有技术团队支撑</strong>：复杂的安全配置可能导致错误配置，反而扩大风险面</li>
      </ul>

      <p style={{ fontWeight: 600, color: 'var(--c-text)', marginTop: '16px' }}>我们的建议：</p>
      <ol style={{ paddingLeft: '20px', margin: '12px 0' }}>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>考虑更安全的替代方案</strong>
          ：市面上有功能更受限但安全保障更完善的商业 AI 产品（如企业版 ChatGPT、通义千问企业版等），更适合当前阶段。
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>先建立基础安全能力</strong>
          ：如果确定想使用 OpenClaw，建议先投入时间建立基本的数据备份、权限管理和安全审计能力。
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>可以先体验"纯对话模式"</strong>
          ：OpenClaw 支持禁用所有工具，以纯对话模式运行。这种方式风险极低，可以作为了解和学习 OpenClaw 的起点。
        </li>
        <li style={{ marginBottom: '10px' }}>
          <strong style={{ color: 'var(--c-text)' }}>半年后重新评估</strong>
          ：在建立了基本的安全基础设施后，重新做这个评估，看看条件是否已经满足。
        </li>
      </ol>
    </>
  )
}

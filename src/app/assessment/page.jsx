'use client'
import { useState, useMemo, useCallback } from 'react'
import { SECTIONS, DIM_INFO, getLevel } from './data'
import { CSS } from './styles'
import Welcome from './components/Welcome'
import Progress from './components/Progress'
import SectionHeader from './components/SectionHeader'
import QuestionCard from './components/QuestionCard'
import Results from './components/Results'

function initAnswers() {
  const a = {}
  SECTIONS.forEach(s => s.questions.forEach(q => { a[q.id] = 5 }))
  return a
}

export default function AssessmentPage() {
  const [step, setStep] = useState(-1) // -1=welcome, 0-5=sections, 6=results
  const [answers, setAnswers] = useState(initAnswers)

  const setAnswer = useCallback((id, v) => {
    setAnswers(prev => ({ ...prev, [id]: v }))
  }, [])

  const goTo = useCallback((s) => {
    setStep(s)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const totalScore = useMemo(
    () => Object.values(answers).reduce((a, b) => a + b, 0),
    [answers]
  )

  const dimScores = useMemo(() => SECTIONS.map((sec, i) => {
    const score = sec.questions.reduce((a, q) => a + answers[q.id], 0)
    const max = DIM_INFO[i].max
    return { name: DIM_INFO[i].name, score, max, pct: Math.round(score / max * 100) }
  }), [answers])

  const criticalWarnings = useMemo(() => {
    const w = []
    SECTIONS.forEach(s => s.questions.forEach(q => {
      if (q.critical && answers[q.id] <= 3) {
        w.push({ id: q.id, title: q.title, msg: q.criticalMsg })
      }
    }))
    return w
  }, [answers])

  const level = getLevel(totalScore)

  const handleRestart = useCallback(() => {
    setAnswers(initAnswers())
    goTo(-1)
  }, [goTo])

  return (
    <div className="assess-root">
      <style>{CSS}</style>
      <div className="assess-container">

        {/* Welcome screen */}
        {step === -1 && <Welcome onStart={() => goTo(0)} />}

        {/* Question sections */}
        {step >= 0 && step <= 5 && (
          <>
            <Progress step={step} goTo={goTo} />
            <SectionHeader section={SECTIONS[step]} />

            {SECTIONS[step].questions.map(q => (
              <QuestionCard
                key={q.id}
                q={q}
                value={answers[q.id]}
                onChange={v => setAnswer(q.id, v)}
              />
            ))}

            <div style={{
              display: 'flex', justifyContent: 'space-between',
              gap: '12px', marginTop: '32px',
            }}>
              <button
                className="assess-btn assess-btn-secondary"
                onClick={() => goTo(step === 0 ? -1 : step - 1)}
              >
                {step === 0 ? '← 返回首页' : '← 上一部分'}
              </button>
              <button
                className="assess-btn assess-btn-primary"
                onClick={() => goTo(step + 1)}
              >
                {step === 5 ? '查看评估结果 →' : '下一部分 →'}
              </button>
            </div>
          </>
        )}

        {/* Results */}
        {step === 6 && (
          <Results
            totalScore={totalScore}
            level={level}
            dimScores={dimScores}
            criticalWarnings={criticalWarnings}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  )
}

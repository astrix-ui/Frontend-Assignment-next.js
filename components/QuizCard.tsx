'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { quizQuestions } from '../app/data/questions'
import ProgressBar from './QuizProgress'
import QuestionView from './QuestionScreen'
import Results from './ScoreScreen'

interface QuizCardProps {
  onComplete?: () => void
}

export default function QuizCard({ onComplete }: QuizCardProps = {}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null))
  const [finished, setFinished] = useState(false)

  const question = quizQuestions[currentIndex]
  const selectedAnswer = answers[currentIndex]
  const isLastQuestion = currentIndex === quizQuestions.length - 1

  const handleAnswerSelect = useCallback((answerIdx: number) => {
    const updated = [...answers]
    updated[currentIndex] = answerIdx
    setAnswers(updated)

    setTimeout(() => {
      if (isLastQuestion) {
        setFinished(true)
        onComplete?.()
      } else {
        setCurrentIndex(currentIndex + 1)
      }
    }, 400)
  }, [answers, currentIndex, isLastQuestion, onComplete])

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }, [currentIndex])

  const goToNext = useCallback(() => {
    if (currentIndex < quizQuestions.length - 1 && selectedAnswer !== null) {
      setCurrentIndex(currentIndex + 1)
    }
  }, [currentIndex, selectedAnswer])

  const restart = useCallback(() => {
    setCurrentIndex(0)
    setAnswers(Array(quizQuestions.length).fill(null))
    setFinished(false)
    window.dispatchEvent(new Event('quizRestart'))
  }, [])

  const correctCount = answers.reduce<number>((count, ans, idx) => {
    if (ans === null) return count
    return ans === quizQuestions[idx].correctAnswer ? count + 1 : count
  }, 0)

  return (
    <>
      {finished ? (
        <div className="relative w-full">
          <Results key="results" correct={correctCount} total={quizQuestions.length} onRestart={restart} />
        </div>
      ) : (
        <div className="relative w-full max-w-6xl mx-auto p-8">
          <div 
            className="absolute inset-0 rounded-[48px] shadow-xl" 
            style={{
              background: 'rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(8px)',
            }}
          />
          <main className="relative w-full bg-quiz-card rounded-card shadow-card px-20 pt-16 pb-20" role="main" aria-label="Knowledge quiz">
            <div className="mb-6 text-center">
              <h1
                className="font-display text-6xl font-bold mb-3 leading-tight italic bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #1E5A7D 0%, #2A6F8F 30%, #3D8BB5 60%, #5BA3CF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Test Your Knowledge
              </h1>
              <div className="inline-flex items-center px-5 py-1.5 bg-quiz-pill-bg rounded-pill shadow-pill">
                <span className="text-xs text-quiz-text-gray">Answer all questions to see your results</span>
              </div>
            </div>

            <ProgressBar current={currentIndex + 1} total={quizQuestions.length} />

            <QuestionView
              key={question.id}
              question={question}
              questionNum={currentIndex + 1}
              selectedId={selectedAnswer}
              onAnswerClick={handleAnswerSelect}
              onPrev={goToPrev}
              onNext={goToNext}
              showPrev={currentIndex > 0}
              showNext={!isLastQuestion && selectedAnswer !== null}
            />
          </main>
        </div>
      )}
    </>
  )
}

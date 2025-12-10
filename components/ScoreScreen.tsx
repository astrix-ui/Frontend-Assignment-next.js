'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface ResultsProps {
  correct: number
  total: number
  onRestart: () => void
}

const keepLearningPill = 'inline-block px-6 py-2 bg-white text-quiz-text-dark text-sm font-normal rounded-full shadow-sm'
const startAgainButton = 'px-10 py-3 bg-quiz-blue-light text-quiz-text-dark text-base font-medium rounded-lg hover:bg-opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-quiz-blue focus-visible:ring-offset-2 transition-all duration-200'

export default function Results({ correct, total, onRestart }: ResultsProps) {
  const percentage = Math.round((correct / total) * 100)
  const [showPercentage, setShowPercentage] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    containerRef.current?.focus()
    const timer = setTimeout(() => {
      setShowPercentage(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full text-center py-20 px-8"
    >
      <div ref={containerRef} tabIndex={-1} className="outline-none" role="status" aria-live="polite" aria-atomic="true">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-12">
          <div className={keepLearningPill} role="presentation">
            Keep Learning!
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl font-medium italic mb-8"
          style={{
            backgroundImage: 'linear-gradient(90deg, #1E5A7D 0%, #2A6F8F 30%, #3D8BB5 60%, #5BA3CF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Your Final score is
        </motion.h2>

        <div className="mb-16 min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!showPercentage ? (
              <motion.div
                key="number-only"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 150, damping: 12 }}
              >
                <div
                  className="font-display text-[12rem] font-bold leading-[1.2]"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #1E5A7D 0%, #2A6F8F 30%, #3D8BB5 60%, #5BA3CF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  role="text"
                  aria-label={`${correct} out of ${total}`}
                >
                  {correct}
                  <span className="text-8xl align-super">/{total}</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="percentage"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="font-display text-[12rem] font-bold leading-[1.2]"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #1E5A7D 0%, #2A6F8F 30%, #3D8BB5 60%, #5BA3CF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  role="text"
                  aria-label={`${percentage} percent`}
                >
                  {percentage}
                  <span className="text-8xl align-super">%</span>
                </div>
                <div className="sr-only">You answered {correct} out of {total} questions correctly</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="min-h-[60px] flex items-center justify-center">
          {showPercentage && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <button onClick={onRestart} className={startAgainButton} aria-label="Restart quiz from beginning">
                Start Again
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

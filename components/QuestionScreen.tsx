'use client'

import { motion } from 'framer-motion'
import { Question } from '../app/types'
import AnswerButton from './AnswerOption'
import NavButtons from './NavigationButtons'

interface QuestionViewProps {
  question: Question
  questionNum: number
  selectedId: number | null
  onAnswerClick: (index: number) => void
  onPrev: () => void
  onNext: () => void
  showPrev: boolean
  showNext: boolean
}

export default function QuestionView({
  question,
  questionNum,
  selectedId,
  onAnswerClick,
  onPrev,
  onNext,
  showPrev,
  showNext,
}: QuestionViewProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="relative w-full"
    >
      <div className="mb-6 w-full bg-quiz-blue-light rounded-option py-5 px-6 text-center">
        <h2 className="text-base text-quiz-text-dark">
          {questionNum}. {question.text}
        </h2>
      </div>

      <ul className="space-y-3 mb-8" role="radiogroup" aria-label="Answer choices">
        {question.options.map((option, idx) => (
          <AnswerButton
            key={idx}
            text={option}
            index={idx}
            selected={selectedId === idx}
            onClick={() => onAnswerClick(idx)}
          />
        ))}
      </ul>

      {questionNum === 1 && (
        <div className="absolute -bottom-20 -left-12 pointer-events-none" aria-hidden="true">
          <GoodLuckNote />
        </div>
      )}

      <NavButtons onPrev={onPrev} onNext={onNext} canGoPrev={showPrev} canGoNext={showNext} />
    </motion.div>
  )
}

function GoodLuckNote() {
  return (
    <div className="relative flex flex-col items-start">
      <div className="relative bg-white rounded-2xl shadow-md px-5 py-2.5 mb-3 border border-gray-100">
        <span className="text-base font-semibold text-quiz-text-dark whitespace-nowrap tracking-tight">
          Best of Luck !
        </span>
        <div className="absolute -bottom-2 left-7 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white" />
        <div className="absolute -bottom-2.5 left-7 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-gray-100 -z-10" />
      </div>
      <img src="/paw.jpg" alt="" className="ml-1 w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg" />
    </div>
  )
}

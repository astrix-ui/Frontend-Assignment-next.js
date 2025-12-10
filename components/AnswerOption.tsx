'use client'

import { motion } from 'framer-motion'

interface AnswerButtonProps {
  text: string
  index: number
  selected: boolean
  onClick: () => void
}

const buttonClasses = {
  base: 'w-full px-6 py-4 text-center text-base rounded-option transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-quiz-blue focus-visible:ring-offset-2 active:scale-[0.98]',
  default: 'bg-quiz-option-bg text-quiz-text-dark shadow-option hover:shadow-option-hover',
  selected: 'bg-quiz-option-bg text-quiz-text-dark shadow-option-hover',
}

export default function AnswerButton({ text, index, selected, onClick }: AnswerButtonProps) {
  const classes = `${buttonClasses.base} ${selected ? buttonClasses.selected : buttonClasses.default}`

  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      role="radio"
      aria-checked={selected}
    >
      <button onClick={onClick} className={classes} aria-label={text}>
        {text}
      </button>
    </motion.li>
  )
}

'use client'

import { ChevronLeft, ChevronRight } from './icons'

interface NavButtonsProps {
  onPrev: () => void
  onNext: () => void
  canGoPrev: boolean
  canGoNext: boolean
}

const navButtonBase = 'flex items-center justify-center w-11 h-11 rounded-button transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-quiz-blue focus-visible:ring-offset-2'

export default function NavButtons({ onPrev, onNext, canGoPrev, canGoNext }: NavButtonsProps) {
  const prevClasses = canGoPrev
    ? `${navButtonBase} bg-quiz-blue-light text-quiz-text-gray hover:bg-opacity-80 hover:shadow-button active:scale-95`
    : `${navButtonBase} bg-quiz-progress-bg text-quiz-text-gray cursor-not-allowed opacity-40`

  const nextClasses = canGoNext
    ? `${navButtonBase} bg-quiz-blue text-white hover:bg-opacity-90 hover:shadow-button active:scale-95`
    : `${navButtonBase} bg-quiz-progress-bg text-quiz-text-gray cursor-not-allowed opacity-40`

  return (
    <div className="flex items-center justify-end gap-2 mt-6">
      <button onClick={onPrev} disabled={!canGoPrev} className={prevClasses} aria-label="Previous question">
        <ChevronLeft />
      </button>
      <button onClick={onNext} disabled={!canGoNext} className={nextClasses} aria-label="Next question">
        <ChevronRight />
      </button>
    </div>
  )
}

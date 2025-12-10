'use client'

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100

  return (
    <div className="w-full mb-8">
      <div className="w-full h-0.5 bg-quiz-progress-bg rounded-full overflow-hidden">
        <div
          className="h-full bg-quiz-progress-fill transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-label={`${current} of ${total} questions answered`}
        />
      </div>
    </div>
  )
}

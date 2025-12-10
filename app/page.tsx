'use client'

import { useState, useEffect } from 'react'
import QuizCard from '../components/QuizCard'

export default function Home() {
  const [showGradient, setShowGradient] = useState(true)

  useEffect(() => {
    const handleQuizRestart = () => {
      setShowGradient(true)
    }
    
    window.addEventListener('quizRestart', handleQuizRestart)
    return () => window.removeEventListener('quizRestart', handleQuizRestart)
  }, [])

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-8 transition-all duration-1000"
      style={{
        background: showGradient 
          ? 'linear-gradient(to right, #7CBCE0 0%, #A5D8EC 35%, #C8E8F5 70%, #E5F6FC 100%)'
          : '#FFFFFF'
      }}
    >
      <QuizCard onComplete={() => setShowGradient(false)} />
    </div>
  )
}

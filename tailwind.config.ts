import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'quiz-bg-left': '#4A90E2',
        'quiz-bg-right': '#E3F2FD',
        'quiz-card': '#FFFFFF',
        'quiz-heading': '#2D5F7C',
        'quiz-heading-emphasis': '#1A4D6F',
        'quiz-blue': '#5B9FD3',
        'quiz-blue-light': '#D6EAF5',
        'quiz-text-dark': '#1F2937',
        'quiz-text-gray': '#4A5568',
        'quiz-pill-bg': '#FFFFFF',
        'quiz-option-bg': '#F7FAFC',
        'quiz-progress-bg': '#E2E8F0',
        'quiz-progress-fill': '#2C3E50',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(to right, #8BBFDB 0%, #B8DCF0 50%, #D8EFF9 100%)',
        'gradient-text': 'linear-gradient(90deg, #1E5A7D 0%, #2A6F8F 30%, #3D8BB5 60%, #5BA3CF 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 25px 70px rgba(0, 0, 0, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.8)',
        'pill': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'option': '0 1px 3px rgba(0, 0, 0, 0.06)',
        'option-hover': '0 3px 6px rgba(0, 0, 0, 0.1)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'card': '40px',
        'option': '12px',
        'pill': '20px',
        'button': '10px',
      },
    },
  },
  plugins: [],
}
export default config

# Test Your Knowledge Quiz

A modern, interactive quiz application built with React, TypeScript, and Tailwind CSS. Features a clean, elegant UI with smooth animations and full accessibility support.

## Setup Instructions

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quiz-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Tech Stack

### React 18
Used as the core UI library with functional components and hooks (`useState`, `useEffect`) for state management and side effects. The entire application is built using modern React patterns with no class components.

### TypeScript
Provides type safety throughout the codebase with strict typing enabled. All components have properly typed props and state, ensuring better developer experience and catching errors at compile time.

### Next.js 14 (App Router)
Serves as the React framework, handling routing, server-side rendering configuration, and build optimization. The project uses the newer App Router for improved performance and developer experience.

### Tailwind CSS
Handles all styling with utility classes, custom design tokens, and responsive modifiers. Custom configuration includes project-specific colors, shadows, and border radius values to match the design system.

### Framer Motion
Provides smooth animations and transitions between quiz states. Used for question transitions, score reveal animations, and interactive hover effects to create a polished, professional feel.

### Google Fonts (Playfair Display + Inter)
Typography system using Playfair Display for headings (serif, elegant) and Inter for body text (sans-serif, readable), loaded via Next.js font optimization for better performance.

## Key Features

### Core Functionality
- **Multi-step quiz flow**: Navigate through 4 questions with smooth transitions between each step
- **Answer selection**: Click any option to select an answer; auto-advances to the next question after a brief delay
- **Score calculation**: Tracks correct answers and displays both fraction (e.g., 3/4) and percentage (e.g., 75%)
- **Two-stage score reveal**: First shows correct/total score, then transitions to percentage after 2 seconds
- **Progress tracking**: Visual progress bar shows completion status throughout the quiz
- **Navigation controls**: Previous/next arrow buttons for manual navigation between answered questions
- **Restart functionality**: "Start Again" button resets the entire quiz and restores the gradient background

### Design & UX
- **Pixel-perfect implementation**: Layout, typography, spacing, and colors match the provided Figma design specifications
- **Smooth animations**: Question transitions, score reveal, and hover effects powered by Framer Motion
- **Background transition**: Gradient background smoothly fades to white when quiz completes, returns on restart
- **Glassy card design**: Frosted glass effect on the quiz card with backdrop blur and subtle shadows
- **Decorative elements**: "Best of Luck!" speech bubble with paw illustration on the first question only
- **Hover states**: All interactive elements have carefully crafted hover and focus states

### Accessibility (WCAG 2.1 Compliance)
- **Keyboard navigation**: Full quiz completion possible using only Tab, Shift+Tab, Enter, and Space keys
- **Semantic HTML**: Proper use of `<main>`, `<h1>`-`<h2>`, `<ul>`, `<button>` with ARIA labels where needed
- **Focus indicators**: Clear focus-visible rings on all interactive elements for keyboard users
- **Screen reader support**: ARIA roles (`radiogroup`, `radio`, `status`), labels, and live regions for dynamic content
- **Color contrast**: Text and interactive elements meet WCAG AA standards for contrast ratios
- **Accessible score announcement**: Screen reader-only text provides full context ("You answered X out of Y correctly")

## Assumptions Made

- **Desktop-first design**: The UI is optimized primarily for desktop screens (1024px and above). While functional on smaller screens, the layout is not fully responsive for mobile devices.

- **Fixed question set**: The quiz uses a hardcoded set of 4 questions defined in `app/data/questions.ts`. There is no dynamic question loading or question randomization.

- **Single correct answer**: Each question has exactly one correct answer. Multiple correct answers or partial credit are not supported.

- **Linear progression**: Users must answer questions in order, though they can navigate back to review previous answers before completion.

- **Design fidelity**: The implementation closely follows the provided Figma design and reference screenshots, prioritizing visual accuracy over custom interpretation.

- **Modern browser support**: The application targets modern evergreen browsers (Chrome, Firefox, Safari, Edge) with ES6+ support.

- **Static deployment**: The quiz is designed as a static site with no backend, database, or user authentication required.

## Project Structure

```
quiz-app/
├── app/
│   ├── data/
│   │   └── questions.ts       # Quiz questions and correct answers
│   ├── types.ts               # TypeScript type definitions
│   ├── layout.tsx             # Root layout with font configuration
│   ├── page.tsx               # Main page with background logic
│   └── globals.css            # Global styles and utilities
├── components/
│   ├── QuizCard.tsx           # Main quiz container and state management
│   ├── QuizProgress.tsx       # Progress bar component
│   ├── QuestionScreen.tsx     # Question display with "Best of Luck" note
│   ├── AnswerOption.tsx       # Individual answer button
│   ├── NavigationButtons.tsx  # Previous/Next navigation arrows
│   ├── ScoreScreen.tsx        # Results screen with score reveal
│   └── icons.tsx              # SVG icon components
├── public/
│   └── paw.jpg                # Paw illustration for decoration
├── tailwind.config.ts         # Tailwind customization
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## Time Spent on Assignment

**Approximate time spent: 6–7 hours** spread over three days.

- **Day 1 (2.5 hours)**: Initial setup, project structure planning, Tailwind configuration, and implementing the basic quiz layout and card design
- **Day 2 (2.5 hours)**: Wiring up the quiz logic (state management, navigation, scoring), implementing question transitions, and adding the progress bar
- **Day 3 (1.5–2 hours)**: Final design polish (matching Figma pixel-perfect), adding animations, implementing accessibility features, and testing keyboard navigation

This includes time for researching best practices for quiz UX patterns, testing different animation timings, and ensuring WCAG compliance.

## License

This project is provided as-is for educational and demonstration purposes.

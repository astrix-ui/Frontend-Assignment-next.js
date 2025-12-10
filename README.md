# Test Your Knowledge Quiz

A production-quality React quiz application that matches the Figma design pixel-perfect, built with Next.js, TypeScript, and Tailwind CSS.

## Design Implementation

This application reproduces the desktop quiz UI from the Figma design with:

- **Clean centered layout**: Large glassy card on cool blue gradient background
- **Elegant typography**: Playfair Display serif for headings, Inter for body text
- **Smooth animations**: Framer Motion transitions between questions and score reveal
- **Professional styling**: Subtle shadows, proper spacing, and polished interactions

### Visual Features

- Left-to-right gradient background (deeper blue → lighter cyan)
- Large rounded card (32px radius) with generous padding
- "Test Your Knowledge" heading with mixed sizing emphasis
- White pill subtitle: "Answer all questions to see your results"
- Horizontal progress segments with thin baseline progress bar
- Question text in light blue rounded pill
- Full-width answer options with center-aligned text
- Blue navigation buttons (arrows) at bottom-right
- Score screen with large serif numbers and pill buttons

## Getting Started

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── data/
│   │   └── questions.ts       # Quiz questions and correct answers
│   ├── types.ts               # TypeScript interfaces
│   ├── layout.tsx             # Root layout with font config
│   ├── page.tsx               # Entry point
│   └── globals.css            # Base styles
├── components/
│   ├── QuizCard.tsx           # Main quiz logic and state
│   ├── QuizProgress.tsx       # Progress bar (ProgressBar)
│   ├── QuestionScreen.tsx     # Question view (QuestionView)
│   ├── AnswerOption.tsx       # Answer buttons (AnswerButton)
│   ├── NavigationButtons.tsx  # Nav arrows (NavButtons)
│   ├── ScoreScreen.tsx        # Results screen (Results)
│   └── icons.tsx              # Chevron icons
└── tailwind.config.ts         # Design tokens
```

## Color Palette

- Background: `#5B9FD3` → `#E8F5FA` gradient
- Card: `#FAFBFC` (almost white)
- Teal: `#1A4D5C` (headings, score)
- Blue: `#5B9FD3` (buttons, progress)
- Light blue: `#E8F3F8` (question bar)
- Option background: `#F5F8FA`

## Accessibility

- Semantic HTML with proper landmarks
- Full keyboard navigation support
- ARIA attributes for screen readers
- Focus-visible styles
- WCAG color contrast compliance
- Live regions for score announcements

## Technologies

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS (custom configuration)
- Framer Motion
- Google Fonts (Playfair Display + Inter)

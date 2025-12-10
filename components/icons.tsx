const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ChevronLeft() {
  return (
    <svg {...iconProps}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

export function ChevronRight() {
  return (
    <svg {...iconProps}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

import { type ReactNode } from 'react'

export interface CardProps {
  children: ReactNode
  hover?: boolean
  className?: string
  onClick?: () => void
}

export function Card({
  children,
  hover = false,
  className = '',
  onClick,
}: CardProps) {
  const baseClasses =
    'bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800'
  const hoverClasses = hover
    ? 'transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl cursor-pointer'
    : ''

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {children}
    </div>
  )
}

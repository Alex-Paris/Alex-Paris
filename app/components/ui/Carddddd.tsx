import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const style = tv({
  base: 'bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800',
  variants: {
    hover: {
      on: 'transition-transform duration-200 hover:scale-[1.02] hover:shadow-xl cursor-pointer',
    },
  },
})

const Card = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof style>
>(({ className, hover, onClick, ...props }, ref) => (
  <div
    ref={ref}
    className={style({ className, hover })}
    onClick={onClick}
    role={onClick ? 'button' : undefined}
    tabIndex={onClick ? 0 : undefined}
    onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick : undefined}
    {...props}
  />
))
Card.displayName = 'Card'

export { Card }

import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const style = tv({
  base: 'mx-auto px-4 sm:px-6 lg:px-8',
  variants: {
    size: {
      sm: 'max-w-3xl',
      md: 'max-w-5xl',
      lg: 'max-w-7xl',
      xl: 'max-w-[90rem]',
      full: 'max-w-full',
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

const Container = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof style>
>(({ className, size, ...props }, ref) => (
  <div ref={ref} className={style({ className, size })} {...props} />
))
Container.displayName = 'Container'

export { Container }

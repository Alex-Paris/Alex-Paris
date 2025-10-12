import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const style = tv({
  base: 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary:
        'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600',
      secondary:
        'bg-gray-200 hover:bg-gray-300 text-gray-900 focus:ring-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100',
      outline:
        'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950',
      ghost:
        'text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800',
    },
    size: {
      sm: 'px-3 py-1.5 text-sm rounded-md',
      md: 'px-4 py-2 text-base rounded-lg',
      lg: 'px-6 py-3 text-lg rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'> & VariantProps<typeof style>
>(({ className, variant, size, ...props }, ref) => (
  <button
    ref={ref}
    className={style({ className, variant, size })}
    {...props}
  />
))
Button.displayName = 'Button'

interface LinkProps extends React.ComponentPropsWithoutRef<'a'> {
  isExternal?: boolean
}

const Link = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & VariantProps<typeof style>
>(({ className, isExternal, variant, size, ...props }, ref) => (
  <a
    ref={ref}
    className={style({ className, variant, size })}
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noopener noreferrer' : undefined}
    {...props}
  />
))
Link.displayName = 'Link'

export { Button, Link }

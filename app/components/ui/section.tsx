import React from 'react'

import { cn } from '~/lib/cn'

interface Props {
  isInView: boolean
}

const Section = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'section'> & Props
>(({ className, isInView, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      className,
      isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
    )}
    {...props}
  />
))
Section.displayName = 'Section'

export { Section }

import { useEffect, useState, useCallback } from 'react'

/**
 * useParallax Hook
 * Creates parallax effect on scroll with performance optimizations
 * Automatically disables on mobile and for users with reduced motion preference
 */
interface ParallaxOptions {
  speed?: number // Multiplier for parallax effect (0.1 - 1.0)
  disabled?: boolean // Manually disable parallax
}

export function useParallax({
  speed = 0.5,
  disabled = false,
}: ParallaxOptions = {}) {
  const [offset, setOffset] = useState(0)
  const [isDisabled, setIsDisabled] = useState(disabled)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    // Check for small screen (mobile)
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    // Disable parallax if user prefers reduced motion or on mobile
    if (prefersReducedMotion || isMobile || disabled) {
      setIsDisabled(true)
      return
    }

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset(window.pageYOffset)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [disabled])

  const transform = useCallback(
    (multiplier = 1) => {
      if (isDisabled) return 'translateY(0)'
      const yOffset = offset * speed * multiplier
      return `translate3d(0, ${yOffset}px, 0)`
    },
    [offset, speed, isDisabled],
  )

  return {
    offset,
    transform,
    isDisabled,
    style: (multiplier = 1) => ({
      transform: transform(multiplier),
      willChange: isDisabled ? 'auto' : 'transform',
    }),
  }
}

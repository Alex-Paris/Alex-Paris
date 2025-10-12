import { useEffect, useState } from 'react'

/**
 * Hook to provide parallax scroll offset
 * Respects prefers-reduced-motion
 */
export function useParallax() {
  const [scrollY, setScrollY] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prefersReducedMotion])

  /**
   * Calculate parallax offset for a given speed multiplier
   * @param speed - Lower values move slower (0.5 = half speed)
   */
  const getParallaxOffset = (speed: number = 0.5) => {
    if (prefersReducedMotion) return 0
    return scrollY * speed
  }

  return { scrollY, getParallaxOffset, prefersReducedMotion }
}

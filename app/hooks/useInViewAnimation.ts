import { useEffect, useState, useRef } from 'react'

/**
 * useInViewAnimation Hook
 * Triggers animations when elements come into view
 * Uses IntersectionObserver for performance
 */
export function useInViewAnimation(options = {}, startVisible = false) {
  const [isInView, setIsInView] = useState(startVisible)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [isInView, options])

  return { ref, isInView }
}

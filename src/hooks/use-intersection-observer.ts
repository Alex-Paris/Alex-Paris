'use client'

import React, { useEffect, useRef, useState } from 'react'

/**
 * Unified hook for intersection observer functionality
 * Reduces code duplication across components
 */
// eslint-disable-next-line no-undef -- This is actually a DOM type
export function useIntersectionObserver(options?: IntersectionObserverInit) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (!hasIntersected) {
            setHasIntersected(true)
            // Disconnect after first intersection to prevent re-triggering
            observer.disconnect()
          }
        }
      },
      {
        threshold: 0.1,
        ...options,
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [hasIntersected, options])

  return { ref: ref as React.RefObject<HTMLElement>, isVisible, hasIntersected }
}

import { useEffect, useRef, useState } from 'react'

/**
 * Hook for lazy loading images
 * Uses IntersectionObserver to load images only when they enter viewport
 */
export function useLazyImage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px', // Start loading slightly before entering viewport
      },
    )

    observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return { imgRef, isLoaded, setIsLoaded, isInView }
}

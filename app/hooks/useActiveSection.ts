import { useEffect, useState } from 'react'

/**
 * Hook to track which section is currently active in the viewport
 * Uses IntersectionObserver for performance
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] || '',
  )

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section crosses the middle of viewport
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [sectionIds])

  return activeSection
}

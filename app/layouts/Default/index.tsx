import { useEffect } from 'react'
import { Outlet } from 'react-router'

import Foote from '~/components/foote'
import Navbar from '~/components/navbar'
import { useParallax } from '~/hooks/useParallax'

/**
 * Default layout wrapper
 * Simply renders the page content
 */
export default function DefaultLayout() {
  const { prefersReducedMotion } = useParallax()

  useEffect(() => {
    // Ensure smooth scrolling is enabled
    document.documentElement.style.scrollBehavior = prefersReducedMotion
      ? 'auto'
      : 'smooth'

    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [prefersReducedMotion])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <Outlet />
      <Foote />
    </div>
  )
}

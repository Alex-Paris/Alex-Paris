import { useEffect } from 'react'

import About from '~/components/About'
import Contact from '~/components/Contact'
import Footer from '~/components/Footer'
import Hero from '~/components/Hero'
import Nav from '~/components/Nav'
import Projects from '~/components/Projects'
import Skills from '~/components/Skills'
import UnityGames from '~/components/UnityGames'
import { personalInfo, webProjects, unityGames, skills } from '~/data/portfolio'
import { useParallax } from '~/hooks/useParallax'

/**
 * Main single-page portfolio application
 * Features:
 * - Smooth scroll navigation
 * - Parallax effects
 * - All sections in one page
 * - Responsive design
 * - Dark mode support
 */
export default function Home() {
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
      {/* Sticky navigation */}
      <Nav />

      {/* Main content sections */}
      <main>
        <Hero personalInfo={personalInfo} imageSrc="/images/profile.jpg" />
        <About personalInfo={personalInfo} />
        <Projects projects={webProjects} />
        <UnityGames games={unityGames} />
        <Skills skills={skills} />
        <Contact personalInfo={personalInfo} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

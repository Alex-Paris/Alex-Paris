import { ArrowDown } from 'lucide-react'

import { Button } from '~/components/ui/button'
import { Container } from '~/components/ui/container'
import { personalInfo } from '~/data/portfolio'
import { useParallax } from '~/hooks/useParallax'
import { scrollToSection } from '~/utils/scroll'

export function HeroSection() {
  const parallax = useParallax({ speed: 0.3 })
  const parallaxSlow = useParallax({ speed: 0.15 })

  const handleScrollToProjects = () => {
    scrollToSection('projects')
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950"
    >
      {/* Background Layer 1 - Slowest */}
      <div
        className="parallax-layer absolute inset-0 opacity-30 dark:opacity-20"
        style={parallaxSlow.style(0.5)}
      >
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" />
      </div>

      {/* Background Layer 2 - Medium */}
      <div
        className="parallax-layer absolute inset-0 opacity-20 dark:opacity-10"
        style={parallax.style(0.8)}
      >
        <div className="absolute top-40 right-20 h-64 w-64 rounded-full bg-blue-300/30 blur-2xl" />
        <div className="absolute bottom-40 left-20 h-80 w-80 rounded-full bg-purple-300/30 blur-2xl" />
      </div>

      {/* Foreground Content - Fastest (natural scroll) */}
      <Container className="relative z-10">
        <div className="space-y-8 py-20 text-center">
          {/* Name and Role */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
              {personalInfo.name}
            </h1>
            <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-mono text-2xl font-semibold text-transparent md:text-3xl dark:from-blue-400 dark:to-purple-400">
              {personalInfo.role}
            </p>
          </div>

          {/* Tagline */}
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-700 md:text-2xl dark:text-gray-300">
            {personalInfo.tagline}
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button
              variant="primary"
              size="lg"
              onClick={handleScrollToProjects}
              className="group"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce pt-16">
            <button
              onClick={handleScrollToProjects}
              className="text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
              aria-label="Scroll to projects"
            >
              <svg
                className="mx-auto h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Decorative Pattern Overlay */}
      <div
        className="parallax-layer pointer-events-none absolute inset-0 opacity-5 dark:opacity-10"
        style={parallax.style(1.2)}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    </section>
  )
}

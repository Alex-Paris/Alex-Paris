import { Container } from '~/components/ui/container'
import { Section } from '~/components/ui/section'
import { unityGames } from '~/data/portfolio'
import { useInViewAnimation } from '~/hooks/useInViewAnimation'
import { useParallax } from '~/hooks/useParallax'

import { UnityGrid } from '../components/unity-grid'

export function GamesSection() {
  const { ref, isInView } = useInViewAnimation()
  const parallax = useParallax({ speed: 0.1 })

  return (
    <Section
      id="games"
      ref={ref}
      isInView={isInView}
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50 py-20 transition-all duration-700 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Subtle parallax background decoration */}
      <div
        className="parallax-layer pointer-events-none absolute inset-0 opacity-10 dark:opacity-5"
        style={parallax.style(0.5)}
      >
        <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-purple-400/30 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Unity Games
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-600 to-purple-400" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Interactive 3D experiences and game development
            </p>
          </div>

          {/* Games Grid */}
          <UnityGrid games={unityGames} />
        </div>
      </Container>
    </Section>
  )
}

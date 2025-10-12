import { ProjectsGrid } from '~/components/portfolio/ProjectsGrid'
import { Container } from '~/components/ui/Container'
import { Section } from '~/components/ui/section'
import { webProjects } from '~/data/portfolio'
import { useInViewAnimation } from '~/hooks/useInViewAnimation'
import { useParallax } from '~/hooks/useParallax'

export function ProjectsSection() {
  const { ref, isInView } = useInViewAnimation()
  const parallax = useParallax({ speed: 0.1 })

  return (
    <Section
      id="projects"
      ref={ref}
      isInView={isInView}
      className={
        'relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20 transition-all duration-700 dark:from-gray-950 dark:to-gray-900'
      }
    >
      {/* Subtle parallax background decoration */}
      <div
        className="parallax-layer pointer-events-none absolute inset-0 opacity-10 dark:opacity-5"
        style={parallax.style(0.5)}
      >
        <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Web Projects
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-blue-400" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Full-stack web applications and interactive experiences
            </p>
          </div>

          {/* Projects Grid */}
          <ProjectsGrid projects={webProjects} />
        </div>
      </Container>
    </Section>
  )
}

import { Container } from '~/components/ui/container'
import { Section } from '~/components/ui/section'
import { personalInfo } from '~/data/portfolio'
import { useInViewAnimation } from '~/hooks/useInViewAnimation'

export function AboutSection() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <Section
      id="about"
      ref={ref}
      isInView={isInView}
      className={'bg-white py-20 transition-all duration-700 dark:bg-gray-950'}
    >
      <Container size="md">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              About Me
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
          </div>

          {/* Bio Section */}
          <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

import { Code2, Gamepad2, Palette } from 'lucide-react'

import { personalInfo } from '~/data/portfolio'
import { useIntersectionObserver } from '~/hooks/use-intersection-observer'
import { useParallax } from '~/hooks/use-parallax'
import { cn } from '~/lib/utils'

/**
 * About _section with parallax effects and bio
 * Features:
 * - Parallax background layers
 * - Animated entrance on scroll
 * - Icon highlights
 */
export default function About() {
  const { ref: sectionRef, isVisible } = useIntersectionObserver()
  const { getParallaxOffset } = useParallax()

  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Web Development',
      description:
        'Building scalable, performant web applications with modern frameworks',
    },
    {
      icon: <Gamepad2 size={32} />,
      title: 'Game Development',
      description:
        'Creating immersive interactive experiences with Unity and WebGL',
    },
    {
      icon: <Palette size={32} />,
      title: 'UI/UX Design',
      description: 'Crafting beautiful, intuitive interfaces that users love',
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-white dark:bg-slate-900"
    >
      {/* Parallax background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 right-10 h-96 w-96 rounded-full bg-purple-200 opacity-50 mix-blend-multiply blur-3xl filter dark:bg-purple-900 dark:mix-blend-soft-light"
          style={{
            transform: `translateY(${getParallaxOffset(0.3)}px)`,
          }}
        />
        <div
          className="absolute bottom-20 left-10 h-80 w-80 rounded-full bg-blue-200 opacity-50 mix-blend-multiply blur-3xl filter dark:bg-blue-900 dark:mix-blend-soft-light"
          style={{
            transform: `translateY(${getParallaxOffset(0.2)}px)`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div
          className={cn(
            'mb-16 text-center transition-all duration-700',
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
          )}
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
            About Me
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
        </div>

        {/* Bio content */}
        <div className="mx-auto mb-16 max-w-4xl">
          {personalInfo.bio.map((paragraph, index) => (
            <p
              key={index}
              className={cn(
                'mb-6 text-lg leading-relaxed text-slate-700 transition-all duration-700 md:text-xl dark:text-slate-300',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0',
              )}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Feature cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                'shadow-soft hover:shadow-medium group rounded-2xl bg-slate-50 p-8 transition-all duration-500 dark:bg-slate-800',
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0',
              )}
              style={{ transitionDelay: `${(index + 4) * 100}ms` }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

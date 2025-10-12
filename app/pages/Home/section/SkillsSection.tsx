import { Code, Gamepad2, Wrench } from 'lucide-react'

import { Container } from '~/components/ui/container'
import { Section } from '~/components/ui/section'
import { skills } from '~/data/portfolio'
import { useInViewAnimation } from '~/hooks/useInViewAnimation'

export function SkillsSection() {
  const { ref, isInView } = useInViewAnimation()

  const skillCategories = [
    {
      title: 'Web Development',
      icon: Code,
      skills: skills.webDevelopment,
      color: 'blue',
    },
    {
      title: 'Game Development',
      icon: Gamepad2,
      skills: skills.gameDevelopment,
      color: 'purple',
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: skills.tools,
      color: 'green',
    },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; bg: string; dot: string }> = {
      blue: {
        text: 'text-blue-600 dark:text-blue-400',
        bg: 'bg-blue-50 dark:bg-blue-950/50',
        dot: 'bg-blue-600 dark:bg-blue-400',
      },
      purple: {
        text: 'text-purple-600 dark:text-purple-400',
        bg: 'bg-purple-50 dark:bg-purple-950/50',
        dot: 'bg-purple-600 dark:bg-purple-400',
      },
      green: {
        text: 'text-green-600 dark:text-green-400',
        bg: 'bg-green-50 dark:bg-green-950/50',
        dot: 'bg-green-600 dark:bg-green-400',
      },
    }
    return colors[color] || colors.blue
  }

  return (
    <Section
      id="skills"
      ref={ref}
      isInView={isInView}
      className={'bg-white py-20 transition-all duration-700 dark:bg-gray-950'}
    >
      <Container>
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              Skills & Technologies
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {skillCategories.map((category) => {
              const colors = getColorClasses(category.color)
              const Icon = category.icon

              return (
                <div
                  key={category.title}
                  className={`rounded-lg border border-gray-200 p-6 dark:border-gray-800 ${colors.bg} transition-transform duration-300 hover:scale-105`}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                    <h3 className={`text-xl font-semibold ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.skills.map((skill, index) => (
                      <li
                        key={skill}
                        className="group flex items-center text-gray-700 dark:text-gray-300"
                        style={{
                          animationDelay: isInView ? `${index * 100}ms` : '0ms',
                        }}
                      >
                        <span
                          className={`h-2 w-2 ${colors.dot} mr-3 rounded-full transition-transform duration-200 group-hover:scale-150`}
                        />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}

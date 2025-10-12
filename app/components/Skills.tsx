import { Code2, Gamepad2, Wrench } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

import { skills } from '~/data/portfolio'

interface SkillCategoryProps {
  icon: React.ReactNode
  title: string
  skills: string[]
  color: string
  delay: number
  isVisible: boolean
}

/**
 * Individual skill category card
 */
function SkillCategory({
  icon,
  title,
  skills,
  color,
  delay,
  isVisible,
}: SkillCategoryProps) {
  return (
    <div
      className={`shadow-soft hover:shadow-medium rounded-2xl bg-white p-8 transition-all duration-700 dark:bg-slate-800 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon header */}
      <div className="mb-6 flex items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl text-white ${color}`}
        >
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-lg bg-slate-50 px-4 py-3 text-center font-medium text-slate-700 transition-colors duration-300 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * Skills section with categorized skill lists
 * Features:
 * - Three categories: Web Dev, Game Dev, Tools
 * - Animated entrance
 * - Hover effects
 * - Responsive grid layout
 */
export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const categories = [
    {
      icon: <Code2 size={28} />,
      title: 'Web Development',
      skills: skills.webDevelopment,
      color: 'bg-gradient-to-br from-blue-600 to-cyan-600',
    },
    {
      icon: <Gamepad2 size={28} />,
      title: 'Game Development',
      skills: skills.gameDevelopment,
      color: 'bg-gradient-to-br from-purple-600 to-pink-600',
    },
    {
      icon: <Wrench size={28} />,
      title: 'Tools & Technologies',
      skills: skills.tools,
      color: 'bg-gradient-to-br from-orange-600 to-red-600',
    },
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-slate-50 dark:bg-slate-800"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl dark:text-white">
            Skills & Expertise
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            A comprehensive toolkit spanning modern web technologies and game
            development platforms
          </p>
        </div>

        {/* Skills categories */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {categories.map((category, index) => (
            <SkillCategory
              key={category.title}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
              delay={(index + 1) * 100}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Additional info */}
        <div
          className={`mt-16 text-center transition-all delay-500 duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="mx-auto max-w-3xl text-slate-600 dark:text-slate-400">
            Always learning and exploring new technologies. Currently diving
            deeper into performance optimization, advanced shader programming,
            and scalable architecture patterns.
          </p>
        </div>
      </div>
    </section>
  )
}

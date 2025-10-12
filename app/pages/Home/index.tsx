import { useEffect } from 'react'

import { personalInfo } from '~/data/portfolio'
import { generateMeta } from '~/utils/meta'
import { handleHashNavigation } from '~/utils/scroll'

import { AboutSection } from './section/about'
import { ContactSection } from './section/contact'
import { GamesSection } from './section/games'
import { HeroSection } from './section/hero'
import { ProjectsSection } from './section/projects'
import { SkillsSection } from './section/skills'

export function meta() {
  return generateMeta({
    title: `${personalInfo.name} - ${personalInfo.role}`,
    description: personalInfo.tagline,
  })
}

export default function Home() {
  // Handle hash navigation on mount and hash changes
  useEffect(() => {
    handleHashNavigation()

    const handleHashChange = () => {
      handleHashNavigation()
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <div className="single-page-portfolio">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <GamesSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}

import { useEffect } from 'react'

import { personalInfo } from '~/data/portfolio'
import { generateMeta } from '~/utils/meta'
import { handleHashNavigation } from '~/utils/scroll'

import { AboutSection } from './section/AboutSection'
import { ContactSection } from './section/ContactSection'
import { GamesSection } from './section/GamesSection'
import { ParallaxHero } from './section/ParallaxHero'
import { ProjectsSection } from './section/ProjectsSection'
import { SkillsSection } from './section/SkillsSection'

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
      <ParallaxHero />
      <AboutSection />
      <ProjectsSection />
      <GamesSection />
      <SkillsSection />
      <ContactSection />
    </div>
  )
}

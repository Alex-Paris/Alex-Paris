import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

import { personalInfo } from '~/data/portfolio'
import { useSectionObserver } from '~/hooks/useSectionObserver'
import { scrollToSection } from '~/utils/scroll'

import { Container } from '../ui/Container'

const sections = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Games', id: 'games' },
  { name: 'Skills', id: 'skills' },
  { name: 'Contact', id: 'contact' },
]

export function SinglePageNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useSectionObserver(sections.map((s) => s.id))

  // Handle hash navigation on mount
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash)
      }, 100)
    }
  }, [])

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setMobileMenuOpen(false)
    // Update URL hash
    window.history.pushState(null, '', `#${sectionId}`)
  }

  return (
    <nav className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/90">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-xl font-bold text-gray-900 transition-colors duration-200 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            aria-label="Scroll to top"
          >
            {personalInfo.name.split(' ')[0]} {/* First name only for logo */}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 transition-colors duration-200 hover:text-blue-600 md:hidden dark:text-gray-300 dark:hover:text-blue-400"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="space-y-4 border-t border-gray-200 py-4 md:hidden dark:border-gray-800">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`block w-full rounded-lg px-4 py-2 text-left text-base font-medium transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
                aria-current={activeSection === section.id ? 'page' : undefined}
              >
                {section.name}
              </button>
            ))}
          </div>
        )}
      </Container>
    </nav>
  )
}

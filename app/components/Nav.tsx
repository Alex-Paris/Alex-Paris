import { Menu, X, Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

import { useActiveSection } from '~/hooks/useActiveSection'
import { useTheme } from '~/hooks/useTheme'

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'games', label: 'Games' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

/**
 * Sticky navigation with scroll-spy and mobile hamburger menu
 * Features:
 * - IntersectionObserver-based active section tracking
 * - Smooth scroll to sections
 * - Theme toggle
 * - Responsive hamburger menu
 * - Keyboard accessible
 */
export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection(navItems.map((item) => item.id))
  const { resolvedTheme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault()
    scrollToSection(id)
  }

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-lg backdrop-blur-md dark:bg-slate-900/90'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-xl font-bold text-transparent transition-all duration-300 hover:from-purple-700 hover:to-blue-700 md:text-2xl"
          >
            AP
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center space-x-1 md:flex lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`rounded-lg px-4 py-2 font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-purple-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-purple-400'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 rounded-lg p-2 text-slate-700 transition-all duration-300 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {resolvedTheme === 'dark' ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Theme toggle mobile */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-slate-700 transition-all duration-300 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {resolvedTheme === 'dark' ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-slate-700 transition-all duration-300 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-full right-0 left-0 bg-white shadow-lg transition-all duration-300 md:hidden dark:bg-slate-900 ${
          isMobileMenuOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-4 opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-purple-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-purple-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

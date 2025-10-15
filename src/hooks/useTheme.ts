import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

/**
 * Hook for managing theme (light/dark mode)
 * Persists preference to localStorage
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') as Theme | null
    if (savedTheme) {
      setThemeState(savedTheme)
    }

    // Check system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const updateResolvedTheme = () => {
      if (savedTheme === 'system' || !savedTheme) {
        setResolvedTheme(mediaQuery.matches ? 'dark' : 'light')
      } else {
        setResolvedTheme(savedTheme as 'light' | 'dark')
      }
    }

    updateResolvedTheme()

    mediaQuery.addEventListener('change', updateResolvedTheme)
    return () => mediaQuery.removeEventListener('change', updateResolvedTheme)
  }, [])

  useEffect(() => {
    // Apply theme to document
    const root = document.documentElement
    const effectiveTheme =
      theme === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : theme

    setResolvedTheme(effectiveTheme)
    root.setAttribute('data-theme', effectiveTheme)
    root.classList.remove('light', 'dark')
    root.classList.add(effectiveTheme)
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return { theme, resolvedTheme, setTheme, toggleTheme }
}

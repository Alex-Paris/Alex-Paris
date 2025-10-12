/**
 * Smoothly scrolls to a section by ID
 * @param sectionId - The ID of the section to scroll to (with or without #)
 * @param offset - Optional offset from the top (useful for fixed headers)
 */
export function scrollToSection(sectionId: string, offset = 80) {
  // Remove # if present
  const id = sectionId.replace('#', '')
  const element = document.getElementById(id)

  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

/**
 * Handles hash changes in URL and scrolls to the corresponding section
 */
export function handleHashNavigation(offset = 80) {
  const hash = window.location.hash
  if (hash) {
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      scrollToSection(hash, offset)
    }, 100)
  }
}

/**
 * Updates the URL hash without triggering a scroll
 * @param sectionId - The section ID to set in the hash
 */
export function updateHash(sectionId: string) {
  const id = sectionId.replace('#', '')
  if (window.history.pushState) {
    window.history.pushState(null, '', `#${id}`)
  } else {
    window.location.hash = id
  }
}

/**
 * Checks if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Scrolls to top of page
 */
export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  })
}

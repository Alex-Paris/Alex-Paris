import About from './section/about'
import Contact from './section/contact'
import UnityGames from './section/games'
import Hero from './section/hero'
import Projects from './section/projects'
import Skills from './section/skills'

/**
 * Main single-page portfolio application
 * Features:
 * - All sections in one page
 * - Responsive design
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <UnityGames />
      <Skills />
      <Contact />
    </main>
  )
}

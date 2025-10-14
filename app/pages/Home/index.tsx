import About from './section/about'
import Hero from './section/hero'
import Projects from './section/projects'

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
      {/*<UnityGames />*/}
      {/*<Skills />*/}
      {/*<Contact />*/}
    </main>
  )
}

import Footer from '~/components/footer'
import Navbar from '~/components/navbar'

import About from './_section/about'
import Contact from './_section/contact'
import UnityGames from './_section/games'
import Hero from './_section/hero'
import Projects from './_section/projects'
import Skills from './_section/skills'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <UnityGames />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

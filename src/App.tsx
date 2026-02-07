import About from './sections/About'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Projects from './sections/Projects'
import Skills from './sections/Skills'

const App = () => (
  <div className="min-h-screen bg-bg text-text">
    <div className="pointer-events-none fixed left-0 top-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
    <div className="pointer-events-none fixed bottom-0 right-0 h-80 w-80 rounded-full bg-accent-2/10 blur-[140px]" />
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
    </main>
    <Footer />
  </div>
)

export default App

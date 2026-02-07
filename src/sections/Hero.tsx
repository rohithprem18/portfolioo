import { motion } from 'framer-motion'
import Container from '../components/Container'
import Button from '../components/Button'
import { heroCopy } from '../data/site'
import profilePlaceholder from '../assets/images/profile-placeholder.jpeg'

const Hero = () => (
  <section id="home" className="section-padding overflow-hidden">
    <Container className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <p className="pill">Available for internships · 2026</p>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold leading-tight text-text md:text-5xl">
            {heroCopy.name}
          </h1>
          <p className="text-lg font-medium text-accent md:text-xl">{heroCopy.role}</p>
        </div>
        <p className="text-base leading-relaxed text-muted md:text-lg text-balance">
          {heroCopy.tagline}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => (window.location.href = '#projects')}>View Projects</Button>
          <a href="/resume.pdf" download className="inline-flex">
            <Button variant="secondary">Download Resume</Button>
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
          <span>Chennai, India</span>
          <span className="h-1 w-1 rounded-full bg-muted" />
          <span>Open to remote roles</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute -top-8 right-6 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
        <div className="card-surface gradient-border relative mx-auto max-w-sm p-4">
          <img
            src={profilePlaceholder}
            alt="Profile placeholder"
            className="h-80 w-full rounded-2xl object-cover"
          />
          <div className="mt-4 rounded-xl border border-border bg-bg-soft p-4 text-sm text-muted">
            “Building ML-powered products with clean, resilient systems.”
          </div>
        </div>
      </motion.div>
    </Container>
  </section>
)

export default Hero

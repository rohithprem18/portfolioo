import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { experience } from '../data/site'

const Experience = () => (
  <section id="experience" className="section-padding">
    <Container>
      <SectionHeading
        eyebrow="Experience"
        title="Practical engineering exposure"
        description="Recent hands-on work in software engineering and data-driven systems."
      />
      <div className="relative pl-6">
        <span className="absolute left-2 top-0 h-full w-px bg-border" />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="card-surface relative p-6"
        >
          <span className="absolute -left-[34px] top-7 h-3 w-3 rounded-full bg-accent shadow-soft" />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-text">{experience.role}</h3>
            <span className="text-sm text-muted">{experience.duration}</span>
          </div>
          <p className="mt-2 text-sm text-muted">{experience.company}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {experience.highlights.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Container>
  </section>
)

export default Experience

import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { aboutCopy } from '../data/site'

const About = () => (
  <section id="about" className="section-padding bg-bg-soft">
    <Container>
      <SectionHeading
        eyebrow="About"
        title="Engineering with clarity and impact"
        description={aboutCopy.summary}
      />
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="card-surface p-6"
        >
          <h3 className="text-lg font-semibold text-text">What I focus on</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>Data-centric product development with measurable outcomes.</li>
            <li>Scalable backend systems with clean API design.</li>
            <li>ML workflows that stay explainable and production-ready.</li>
          </ul>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="card-surface p-6"
        >
          <h3 className="text-lg font-semibold text-text">Education</h3>
          <div className="mt-4 space-y-2 text-sm text-muted">
            <p className="text-base font-semibold text-text">{aboutCopy.education.degree}</p>
            <p>{aboutCopy.education.school}</p>
            <p>{aboutCopy.education.cgpa}</p>
            <p>{aboutCopy.education.duration}</p>
          </div>
        </motion.div>
      </div>
    </Container>
  </section>
)

export default About

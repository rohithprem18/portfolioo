import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import SkillGroup from '../components/SkillGroup'
import { skillGroups } from '../data/site'

const Skills = () => (
  <section id="skills" className="section-padding">
    <Container>
      <SectionHeading
        eyebrow="Skills"
        title="Stack & tooling"
        description="Balanced experience across software engineering foundations and applied machine learning."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SkillGroup {...group} />
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
)

export default Skills

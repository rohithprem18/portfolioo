import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import AchievementCard from '../components/AchievementCard'
import { achievements } from '../data/site'

const Achievements = () => (
  <section id="achievements" className="section-padding bg-bg-soft">
    <Container>
      <SectionHeading
        eyebrow="Achievements"
        title="Recognition & milestones"
        description="Competitive wins and certifications that reflect consistent delivery and growth."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <AchievementCard title={item} />
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
)

export default Achievements

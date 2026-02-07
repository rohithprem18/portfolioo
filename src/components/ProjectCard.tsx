import { Github } from 'lucide-react'
import { motion } from 'framer-motion'
import Tag from './Tag'

type ProjectCardProps = {
  title: string
  description: string
  impact: string
  stack: string[]
  link: string
}

const ProjectCard = ({ title, description, impact, stack, link }: ProjectCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ y: -6 }}
    className="card-surface gradient-border flex h-full flex-col gap-6 p-6"
  >
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-text">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Key impact</p>
      <p className="text-sm text-text">{impact}</p>
    </div>
    <div className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <Tag key={item} label={item} />
      ))}
    </div>
    <a
      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent-2"
      href={link}
    >
      <Github size={16} />
      GitHub Repo
    </a>
  </motion.article>
)

export default ProjectCard

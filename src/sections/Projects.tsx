import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/site'

const Projects = () => (
  <section id="projects" className="section-padding bg-bg-soft">
    <Container>
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A curated set of projects spanning backend systems, ML modeling, and product-grade experimentation."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Container>
  </section>
)

export default Projects

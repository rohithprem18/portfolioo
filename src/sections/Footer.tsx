import { Github, Linkedin, Mail } from 'lucide-react'
import Container from '../components/Container'
import { contactInfo } from '../data/site'

const Footer = () => (
  <footer className="border-t border-border/60 py-8">
    <Container className="flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
      <span>© 2026 Rohith Prem S. All rights reserved.</span>
      <div className="flex items-center gap-4">
        <a
          href={`mailto:${contactInfo.email}`}
          className="transition hover:text-accent"
          aria-label="Email"
        >
          <Mail size={18} />
        </a>
        <a
          href={`https://${contactInfo.linkedin}`}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-accent"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a
          href={`https://${contactInfo.github}`}
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-accent"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
      </div>
    </Container>
  </footer>
)

export default Footer

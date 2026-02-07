import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { contactInfo } from '../data/site'

const Contact = () => (
  <section id="contact" className="section-padding">
    <Container>
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something impactful"
        description="Open to internships, collaborations, and ambitious ML or product engineering roles."
      />
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        <div className="card-surface space-y-4 p-6">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-3 text-sm text-muted transition hover:text-text"
          >
            <Mail size={18} />
            <span>{contactInfo.email}</span>
          </a>
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-sm text-muted transition hover:text-text">
            <Phone size={18} />
            <span>{contactInfo.phone}</span>
          </a>
          <a
            href={`https://${contactInfo.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm text-muted transition hover:text-text"
          >
            <Linkedin size={18} />
            <span>{contactInfo.linkedin}</span>
          </a>
          <a
            href={`https://${contactInfo.github}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-sm text-muted transition hover:text-text"
          >
            <Github size={18} />
            <span>{contactInfo.github}</span>
          </a>
        </div>
        <form
          className="card-surface space-y-4 p-6"
          action="https://formspree.io/f/xpqjzoal"
          method="POST"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-muted">
              Name
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-accent/50"
              />
            </label>
            <label className="text-sm text-muted">
              Email
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-accent/50"
              />
            </label>
          </div>
          <label className="text-sm text-muted">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project or role..."
              className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition focus:border-accent/50"
            />
          </label>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </Container>
  </section>
)

export default Contact

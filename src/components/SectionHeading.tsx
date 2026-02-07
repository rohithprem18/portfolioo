import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
}

const SectionHeading = ({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) => (
  <div className={`mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {eyebrow ? <p className="pill">{eyebrow}</p> : null}
    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text md:text-4xl">
      {title}
    </h2>
    {description ? (
      <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">{description}</p>
    ) : null}
  </div>
)

export default SectionHeading

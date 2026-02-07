import Tag from './Tag'

type SkillGroupProps = {
  title: string
  skills: string[]
}

const SkillGroup = ({ title, skills }: SkillGroupProps) => (
  <div className="card-surface p-6">
    <h3 className="text-lg font-semibold text-text">{title}</h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Tag key={skill} label={skill} />
      ))}
    </div>
  </div>
)

export default SkillGroup

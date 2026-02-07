type TagProps = {
  label: string
}

const Tag = ({ label }: TagProps) => (
  <span className="rounded-full border border-border bg-bg-soft px-3 py-1 text-xs font-medium text-muted">
    {label}
  </span>
)

export default Tag

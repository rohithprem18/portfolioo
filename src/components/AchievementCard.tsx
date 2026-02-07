type AchievementCardProps = {
  title: string
}

const AchievementCard = ({ title }: AchievementCardProps) => (
  <div className="card-surface flex items-start gap-4 p-5">
    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
    <p className="text-sm font-medium text-text">{title}</p>
  </div>
)

export default AchievementCard

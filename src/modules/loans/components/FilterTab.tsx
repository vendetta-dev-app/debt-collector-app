interface FilterTabProps {
  active: boolean
  onClick: () => void
  label: string
  count: number
  color: string
  icon: React.ComponentType<{ className?: string }>
}

export const FilterTab = ({
  active,
  onClick,
  label,
  count,
  color,
  icon: Icon
}: FilterTabProps) => (
  <button
    onClick={onClick}
    className={`
      relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
      flex items-center gap-2 group
      ${active
        ? `bg-${color}-600 text-white shadow-lg shadow-${color}-500/30 scale-105`
        : `bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700`
      }
    `}
  >
    <Icon className={`w-4 h-4 ${active ? 'text-white' : `text-${color}-500 group-hover:text-${color}-600`}`} />
    <span>{label}</span>
    <span className={`
      px-2 py-0.5 rounded-full text-xs font-semibold
      ${active
        ? 'bg-white/20 text-white'
        : `bg-${color}-50 dark:bg-${color}-900/20 text-${color}-600 dark:text-${color}-400`
      }
    `}>
      {count}
    </span>
    {active && (
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
    )}
  </button>
)

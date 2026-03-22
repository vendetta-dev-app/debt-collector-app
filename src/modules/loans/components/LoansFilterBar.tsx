import {
  HiOutlineCollection,
  HiOutlineClock,
  HiOutlineExclamationCircle,
  HiOutlineRefresh,
  HiOutlineSearch,
} from 'react-icons/hi'
import type { LoanFilter, LoanStats } from '@/modules/loans/types/loans'
import { FilterTab } from './FilterTab'

interface LoansFilterBarProps {
  filter: LoanFilter
  onFilterChange: (filter: LoanFilter) => void
  searchTerm: string
  onSearchChange: (term: string) => void
  stats: LoanStats
  filteredCount: number
  totalCount: number
  onRefresh: () => void
  isRefreshing: boolean
}

export const LoansFilterBar = ({
  filter,
  onFilterChange,
  searchTerm,
  onSearchChange,
  stats,
  filteredCount,
  totalCount,
  onRefresh,
  isRefreshing,
}: LoansFilterBarProps) => {
  const filterConfig = [
    {
      key: 'all' as const,
      label: 'Todos',
      count: stats.total,
      color: 'blue',
      icon: HiOutlineCollection,
    },
    {
      key: 'active' as const,
      label: 'Activos',
      count: stats.active,
      color: 'green',
      icon: HiOutlineClock,
    },
    {
      key: 'overdue' as const,
      label: 'Vencidos',
      count: stats.overdue,
      color: 'red',
      icon: HiOutlineExclamationCircle,
    },
    {
      key: 'paid' as const,
      label: 'Pagados',
      count: stats.paid,
      color: 'gray',
      icon: HiOutlineCollection,
    },
  ]

  return (
    <>
      {/* Unified Filter Bar - Sticky */}
      <div className="sticky top-0 z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex flex-col gap-4">
          {/* Search Row */}
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nombre, alias o barrio..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm dark:text-white placeholder-gray-400"
              />
            </div>
            <button
              onClick={onRefresh}
              disabled={isRefreshing}
              className="px-4 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl transition-all disabled:opacity-50 flex items-center gap-2 text-sm font-medium border border-gray-200 dark:border-gray-700"
            >
              <HiOutlineRefresh className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Actualizar</span>
            </button>
          </div>

          {/* Filter Tabs Row */}
          <div className="flex flex-wrap gap-2">
            {filterConfig.map((config) => (
              <FilterTab
                key={config.key}
                active={filter === config.key}
                onClick={() => onFilterChange(config.key)}
                label={config.label}
                count={config.count}
                color={config.color}
                icon={config.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium">
          <HiOutlineCollection className="w-4 h-4" />
          <span>{filteredCount} de {totalCount} préstamos</span>
        </div>
        {searchTerm && (
          <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs">
            <span>Búsqueda: </span>
            <span className="font-medium">"{searchTerm}"</span>
          </div>
        )}
      </div>
    </>
  )
}

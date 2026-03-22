import { PiEmpty } from 'react-icons/pi'

interface LoansEmptyStateProps {
  searchTerm?: string
}

export const LoansEmptyState = ({ searchTerm }: LoansEmptyStateProps) => {
  const hasSearch = !!searchTerm

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-12">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl mb-4">
          <PiEmpty className="w-10 h-10 text-gray-400 dark:text-gray-500" />
        </div>
        <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {hasSearch ? 'No se encontraron préstamos' : 'No hay préstamos en esta categoría'}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {hasSearch
            ? 'Intenta con otros términos de búsqueda'
            : 'Selecciona otra categoría o actualiza la página'
          }
        </p>
      </div>
    </div>
  )
}

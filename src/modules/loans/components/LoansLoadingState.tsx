import { Spinner } from 'flowbite-react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

interface LoansLoadingStateProps {
  loading: boolean
  hasData: boolean
  error?: { message: string } | null
  onRetry?: () => void
}

export const LoansLoadingState = ({ loading, hasData, error, onRetry }: LoansLoadingStateProps) => {
  // Initial loading state
  if (loading && !hasData) {
    return (
      <div className="flex justify-center items-center py-16">
        <Spinner size="xl" />
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="text-center text-red-600 py-16">
        <HiOutlineExclamationCircle className="mx-auto text-6xl mb-4" />
        <p className="text-lg font-medium">Error al cargar los préstamos</p>
        {error.message && <p className="text-sm mt-2">{error.message}</p>}
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Reintentar
          </button>
        )}
      </div>
    )
  }

  return null
}

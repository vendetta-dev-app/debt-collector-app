import { useParams } from 'react-router-dom'
import { Spinner } from 'flowbite-react'
import { Text } from '@/components'

const LoanDetailPage = () => {
  const { loanId } = useParams()

  return (
    <div className="p-4">
      <Text as="h1" size="xl" weight="semibold">
        Detalle del Préstamo
      </Text>
      <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          Loan ID: {loanId}
        </p>
        <p className="text-xs text-yellow-600 dark:text-yellow-300 mt-2">
          Esta página se implementará en la Task 4: Loan Detail and Payments
        </p>
      </div>
    </div>
  )
}

export default LoanDetailPage

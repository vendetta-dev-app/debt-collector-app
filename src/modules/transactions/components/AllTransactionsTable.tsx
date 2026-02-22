import { useQuery } from '@apollo/client'
import AllTransactionsQuery from '@/modules/transactions/queries/AllTransactionsQuery'
import { Badge, Spinner } from 'flowbite-react'
import {
  HiOutlineCash,
  HiOutlineRefresh,
  HiOutlineArrowCircleUp,
  HiOutlineArrowCircleDown,
} from 'react-icons/hi'
import { Text } from '@/components'
import CurrencyCell from '@/components/tables/CurrencyCell'

const transactionTypes: Record<string, { label: string; color: string; icon: any }> = {
  ROUTE_INITIAL: { label: 'Inicial de Ruta', color: 'info', icon: HiOutlineCash },
  ROUTE_REFUND: { label: 'Reembolso de Ruta', color: 'warning', icon: HiOutlineRefresh },
  LOAN_DISBURSEMENT: { label: 'Desembolso de Préstamo', color: 'success', icon: HiOutlineArrowCircleUp },
  LOAN_PAYMENT: { label: 'Pago de Préstamo', color: 'blue', icon: HiOutlineArrowCircleDown },
  PAYMENT_VOID: { label: 'Pago Anulado', color: 'failure', icon: HiOutlineRefresh },
  ADJUSTMENT: { label: 'Ajuste', color: 'purple', icon: HiOutlineRefresh },
  EXPENSE: { label: 'Gasto', color: 'orange', icon: HiOutlineCash },
  CASH_OUT: { label: 'Retiro de Efectivo', color: 'red', icon: HiOutlineArrowCircleDown },
}

const AllTransactionsTable = () => {
  const { data, loading, error, refetch } = useQuery(AllTransactionsQuery, {
    variables: {
      first: 50,
    },
    fetchPolicy: 'cache-and-network',
  })

  const transactions = data?.transactions?.edges?.map(edge => edge?.node).filter(Boolean) || []

  if (loading && !data) {
    return (
      <div className="flex justify-center items-center py-16">
        <Spinner size="xl" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-16">
        <p className="text-lg font-medium">Error al cargar las transacciones</p>
        <p className="text-sm mt-2">{error.message}</p>
        <button
          onClick={() => refetch()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Reintentar
        </button>
      </div>
    )
  }

  if (transactions.length === 0) {
    return (
      <div className="text-center text-gray-500 py-16">
        <HiOutlineCash className="mx-auto text-6xl mb-4" />
        <p className="text-lg font-medium">No hay transacciones registradas</p>
        <p className="text-sm mt-2">Las transacciones aparecerán aquí cuando realices pagos o movimientos.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Summary header */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total de transacciones: <span className="font-semibold text-gray-900 dark:text-white">{transactions.length}</span>
          </p>
        </div>
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
          disabled={loading}
        >
          <HiOutlineRefresh className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Actualizando...' : 'Actualizar'}
        </button>
      </div>

      {/* Transactions list */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Tipo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Descripción
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Realizado por
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Monto
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map((transaction) => {
                const typeInfo = transactionTypes[transaction?.transactionType || ''] || {
                  label: transaction?.transactionType || 'Desconocido',
                  color: 'gray',
                  icon: HiOutlineCash,
                }
                const TypeIcon = typeInfo.icon

                return (
                  <tr key={transaction?.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Text size="sm" weight="medium">
                        {transaction?.createdAt ? new Date(transaction.createdAt).toLocaleString() : '-'}
                      </Text>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge color={typeInfo.color as any} size="sm" className="flex items-center gap-1">
                        <TypeIcon className="w-3 h-3" />
                        {typeInfo.label}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Text size="sm" color="gray">
                        {transaction?.description || '-'}
                      </Text>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Text size="sm" weight="medium">
                        {transaction?.maker?.fullName || '-'}
                      </Text>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <Text
                        size="sm"
                        weight="semibold"
                        color={
                          transaction?.transactionType === 'LOAN_PAYMENT' ||
                          transaction?.transactionType === 'ROUTE_REFUND' ||
                          transaction?.transactionType === 'CASH_OUT'
                            ? 'red'
                            : 'success'
                        }
                      >
                        {transaction?.transactionType === 'LOAN_PAYMENT' ||
                        transaction?.transactionType === 'CASH_OUT' ? '-' : ''}
                        <CurrencyCell value={transaction?.amount || 0} />
                      </Text>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Legend */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
        <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Tipos de Transacción:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {Object.entries(transactionTypes).map(([key, { label, color }]) => (
            <div key={key} className="flex items-center gap-2">
              <Badge color={color as any} size="xs">
                {label}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllTransactionsTable

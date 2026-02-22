import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import LoansByCollectorQuery from '@/modules/loans/queries/LoansByCollectorQuery'
import OverdueLoansQuery from '@/modules/loans/queries/OverdueLoansQuery'
import { Badge, Spinner, Button } from 'flowbite-react'
import {
  HiOutlineSearch,
  HiOutlineFilter,
  HiOutlineExclamationCircle,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineChevronRight,
  HiOutlineRefresh,
  HiOutlineCollection,
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
} from 'react-icons/hi'
import { PiEmpty } from 'react-icons/pi'
import { Text } from '@/components'
import CurrencyCell from '@/components/tables/CurrencyCell'

type LoanFilter = 'all' | 'overdue' | 'active' | 'paid'

const LoansCollectorTable = () => {
  const [filter, setFilter] = useState<LoanFilter>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const { data: allData, loading: allLoading, error: allError, refetch } = useQuery(LoansByCollectorQuery, {
    variables: {
      first: 100
    },
    fetchPolicy: 'cache-and-network'
  })

  const { data: overdueData } = useQuery(OverdueLoansQuery, {
    variables: {
      first: 100
    },
    fetchPolicy: 'cache-and-network'
  })

  const allLoans = allData?.loansByCollector?.edges?.map(edge => edge?.node).filter(Boolean) || []
  const overdueLoans = overdueData?.overdueLoans?.edges?.map(edge => edge?.node).filter(Boolean) || []

  // Filter loans based on selected filter
  const getFilteredLoans = () => {
    let filtered = allLoans

    switch (filter) {
      case 'overdue':
        return allLoans.filter(loan => loan?.isOverdue && !loan?.isFullyPaid)
      case 'active':
        return allLoans.filter(loan => !loan?.isFullyPaid && !loan?.isOverdue)
      case 'paid':
        return allLoans.filter(loan => loan?.isFullyPaid)
      default:
        return allLoans
    }
  }

  // Apply search filter
  const filteredLoans = getFilteredLoans().filter(loan => {
    if (!searchTerm) return true
    const searchLower = searchTerm.toLowerCase()
    return (
      loan?.client?.user?.fullName?.toLowerCase().includes(searchLower) ||
      loan?.client?.alias?.toLowerCase().includes(searchLower) ||
      loan?.client?.neighborhood?.toLowerCase().includes(searchLower)
    )
  })

  // Calculate stats
  const stats = {
    total: allLoans.length,
    overdue: allLoans.filter(l => l?.isOverdue && !l?.isFullyPaid).length,
    active: allLoans.filter(l => !l?.isFullyPaid && !l?.isOverdue).length,
    paid: allLoans.filter(l => l?.isFullyPaid).length,
  }

  if (allLoading && !allData) {
    return (
      <div className="flex justify-center items-center py-16">
        <Spinner size="xl" />
      </div>
    )
  }

  if (allError) {
    return (
      <div className="text-center text-red-600 py-16">
        <p className="text-lg font-medium">Error al cargar los préstamos</p>
        <p className="text-sm mt-2">{allError.message}</p>
        <button
          onClick={() => refetch()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Reintentar
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          onClick={() => setFilter('all')}
          className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-all ${
            filter === 'all' ? 'ring-2 ring-blue-500' : 'hover:shadow-md'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Préstamos</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
            </div>
            <HiOutlineCollection className="text-3xl text-blue-500" />
          </div>
        </button>

        <button
          onClick={() => setFilter('active')}
          className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-all ${
            filter === 'active' ? 'ring-2 ring-green-500' : 'hover:shadow-md'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Activos</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.active}</p>
            </div>
            <HiOutlineCheckCircle className="text-3xl text-green-500" />
          </div>
        </button>

        <button
          onClick={() => setFilter('overdue')}
          className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-all ${
            filter === 'overdue' ? 'ring-2 ring-red-500' : 'hover:shadow-md'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Vencidos</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.overdue}</p>
            </div>
            <HiOutlineExclamationCircle className="text-3xl text-red-500" />
          </div>
        </button>

        <button
          onClick={() => setFilter('paid')}
          className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-all ${
            filter === 'paid' ? 'ring-2 ring-gray-500' : 'hover:shadow-md'
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pagados</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.paid}</p>
            </div>
            <HiOutlineCurrencyDollar className="text-3xl text-gray-500" />
          </div>
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar por nombre, alias o barrio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:text-white"
              />
            </div>
          </div>

          {/* Refresh Button */}
          <Button
            color="light"
            onClick={() => refetch()}
            disabled={allLoading}
            className="shrink-0"
          >
            <HiOutlineRefresh className={`mr-2 ${allLoading ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('overdue')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'overdue'
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Vencidos
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'active'
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Activos
          </button>
          <button
            onClick={() => setFilter('paid')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === 'paid'
                ? 'bg-gray-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            Pagados
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Mostrando {filteredLoans.length} de {allLoans.length} préstamos
        </p>
      </div>

      {/* Loans List */}
      {filteredLoans.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
          <div className="text-center">
            <PiEmpty className="mx-auto text-6xl text-gray-400 mb-4" />
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              {searchTerm ? 'No se encontraron préstamos' : 'No hay préstamos en esta categoría'}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              {searchTerm ? 'Intenta con otros términos de búsqueda' : 'Selecciona otra categoría o actualiza la página'}
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredLoans.map((loan) => (
            <Link
              key={loan?.id}
              to={`/loans/${loan?.id}`}
              className={`block bg-white dark:bg-gray-800 rounded-lg shadow p-3 sm:p-4 hover:shadow-md transition-all border-l-4 ${
                loan?.isOverdue && !loan?.isFullyPaid
                  ? 'border-red-500'
                  : loan?.isFullyPaid
                  ? 'border-gray-300 dark:border-gray-600'
                  : 'border-green-500'
              }`}
            >
              <div className="flex justify-between items-start gap-2">
                <div className="flex-1 min-w-0">
                  {/* Client Info */}
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                    <p className="text-sm sm:text-base font-semibold truncate">
                      {loan?.client?.user?.fullName}
                    </p>
                    {loan?.client?.alias && (
                      <Badge color="gray" size="xs" className="hidden sm:inline-block">{loan?.client?.alias}</Badge>
                    )}
                    {loan?.isOverdue && !loan?.isFullyPaid && (
                      <Badge color="red" size="xs">Vencido {loan?.daysOverdue}d</Badge>
                    )}
                    {loan?.isFullyPaid && (
                      <Badge color="success" size="xs">Pagado</Badge>
                    )}
                    {!loan?.isFullyPaid && !loan?.isOverdue && (
                      <Badge color="green" size="xs">Activo</Badge>
                    )}
                  </div>

                  {/* Address */}
                  <div className="hidden sm:flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <HiOutlineLocationMarker className="text-sm" />
                    {loan?.client?.addressLine1}, {loan?.client?.neighborhood}
                  </div>

                  {/* Route Info */}
                  <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <HiOutlineCollection className="text-sm" />
                    <span className="truncate">{loan?.route?.name}</span>
                    <span className="hidden sm:inline">· {loan?.route?.city?.name}</span>
                  </div>

                  {/* Amounts */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Monto</p>
                      <p className="text-xs sm:text-sm font-medium">
                        <CurrencyCell value={loan?.amount || 0} />
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Pagado</p>
                      <p className="text-xs sm:text-sm font-medium text-green-600 dark:text-green-400">
                        <CurrencyCell value={loan?.totalPaid || 0} />
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Pendiente</p>
                      <p className={`text-xs sm:text-sm font-semibold ${loan?.pendingBalance > 0 ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'}`}>
                        <CurrencyCell value={loan?.pendingBalance || 0} />
                      </p>
                    </div>
                  </div>

                  {/* Due Date */}
                  {!loan?.isFullyPaid && loan?.dueDate && (
                    <div className="mt-2 sm:mt-3 flex items-center gap-1 text-xs">
                      <HiOutlineClock className="text-sm" />
                      <span className="text-gray-500 dark:text-gray-400 hidden sm:inline">Vence: </span>
                      <p className={`text-[10px] sm:text-xs ${loan?.isOverdue ? 'font-semibold text-red-600 dark:text-red-400' : ''}`}>
                        {new Date(loan?.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>

                <HiOutlineChevronRight className="text-gray-400 text-lg sm:text-xl ml-auto flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default LoansCollectorTable

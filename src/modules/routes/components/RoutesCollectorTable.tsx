import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import RoutesByCollectorQuery from '@/modules/routes/queries/RoutesByCollectorQuery'
import { Badge, Spinner } from 'flowbite-react'
import { HiOutlineLocationMarker, HiOutlineCurrencyDollar, HiOutlineCollection, HiOutlineChevronRight } from 'react-icons/hi'
import { Text } from '@/components'
import CurrencyCell from '@/components/tables/CurrencyCell'

const RoutesCollectorTable = () => {
  const { data, loading, error, refetch } = useQuery(RoutesByCollectorQuery, {
    variables: {
      first: 50
    },
    fetchPolicy: 'cache-and-network'
  })

  const routes = data?.routesByCollector?.edges?.map(edge => edge?.node).filter(Boolean) || []

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
        <p className="text-lg font-medium">Error al cargar las rutas</p>
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

  if (routes.length === 0) {
    return (
      <div className="text-center text-gray-500 py-16">
        <HiOutlineCollection className="mx-auto text-6xl mb-4" />
        <p className="text-lg font-medium">No tienes rutas asignadas</p>
        <p className="text-sm mt-2">Contacta a tu administrador para que te asigne rutas.</p>
      </div>
    )
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Total de Rutas</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{routes.length}</p>
            </div>
            <HiOutlineCollection className="text-3xl text-blue-500" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Balance Total</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                <CurrencyCell
                  value={routes.reduce((sum, route) => sum + (route?.currentBalance || 0), 0)}
                />
              </p>
            </div>
            <HiOutlineCurrencyDollar className="text-3xl text-green-500" />
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Préstamos Pendientes</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {routes.reduce((sum, route) => sum + (route?.pendingLoansCount || 0), 0)}
              </p>
            </div>
            <HiOutlineCollection className="text-3xl text-orange-500" />
          </div>
        </div>
      </div>

      {/* Routes list */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          {/* Mobile card view */}
          <div className="md:hidden space-y-3 p-3">
            {routes.map((route) => (
              <div key={route?.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1 min-w-0">
                    <Text size="sm" weight="semibold">
                      {route?.name}
                    </Text>
                    <Text size="xs" color="gray">
                      {route?.city?.name}, {route?.city?.region?.name}
                    </Text>
                  </div>
                  {(route?.pendingLoansCount || 0) > 0 ? (
                    <Badge color="warning">
                      {route?.pendingLoansCount} pendientes
                    </Badge>
                  ) : (
                    <Badge color="success">
                      0 pendientes
                    </Badge>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Balance</p>
                    <Text size="sm" weight="semibold" color="success">
                      <CurrencyCell value={route?.currentBalance || 0} />
                    </Text>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Préstamos</p>
                    <p className="text-sm font-semibold">{route?.loansCount || 0}</p>
                  </div>
                </div>
                <Link
                  to={`/routes/${route?.id}`}
                  className="block w-full text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver Detalles
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop table view */}
          <table className="hidden md:table min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Nombre de Ruta
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Ciudad
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Balance Actual
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Préstamos
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Pendientes
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {routes.map((route) => (
                <tr key={route?.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {route?.name}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          ID: {route?.id?.slice(0, 8)}...
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900 dark:text-white">
                      <HiOutlineLocationMarker className="mr-2 text-gray-400" />
                      <div>
                        <div>{route?.city?.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {route?.city?.region?.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Text size="sm" weight="semibold" color="success">
                      <CurrencyCell value={route?.currentBalance || 0} />
                    </Text>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Badge color="info" className="mr-2">
                        {route?.loansCount || 0}
                      </Badge>
                      <span className="text-sm text-gray-500 dark:text-gray-400">total</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {(route?.pendingLoansCount || 0) > 0 ? (
                      <Badge color="warning">
                        {route?.pendingLoansCount}
                      </Badge>
                    ) : (
                      <Badge color="success">
                        0
                      </Badge>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link
                      to={`/routes/${route?.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Ver detalles
                      <HiOutlineChevronRight className="ml-1" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Refresh button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          disabled={loading}
        >
          {loading ? 'Actualizando...' : 'Actualizar'}
        </button>
      </div>
    </div>
  )
}

export default RoutesCollectorTable

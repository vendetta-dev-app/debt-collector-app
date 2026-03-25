import { PiEmpty } from 'react-icons/pi'
import { useQuery } from '@apollo/client'
import { Badge, Spinner } from 'flowbite-react'
import { Link, useParams } from 'react-router-dom'
import {
  HiOutlineCheckCircle,
  HiOutlineChevronRight,
  HiOutlineClock,
  HiOutlineCollection,
  HiOutlineCurrencyDollar,
  HiOutlineExclamationCircle,
  HiOutlineLocationMarker,
  HiOutlineUserCircle,
  HiOutlineUserGroup,
} from 'react-icons/hi'
import { Text } from '@components'
import InfoCard from '@/components/cards/InfoCard'
import CurrencyCell from '@/components/tables/CurrencyCell'
import RouteByIdQuery from '@/modules/routes/queries/RouteByIdQuery'
import LoansByRouteQuery from '@/modules/loans/queries/LoansByRouteQuery'
import TransactionsByRouteSection from '@/modules/routes/components/TransactionsByRouteSection'
import { formatDate } from '@/snippets/dates'

const RoutePage = () => {
  const { routeId = null } = useParams()

  const { data: routeData, loading: routeLoading, error: routeError } = useQuery(RouteByIdQuery, {
    skip: !routeId,
    variables: { id: routeId as string },
  })

  const { data: loansData, loading: loansLoading, error: loansError } = useQuery(LoansByRouteQuery, {
    skip: !routeId,
    variables: { routeId: routeId as string, first: 100 },
  })

  if (routeLoading)
    return (
      <div className="flex justify-center py-16">
        <Spinner size="xl" />
      </div>
    )

  if (routeError)
    return (
      <div className="text-center text-red-600 py-16">
        <p className="text-lg font-medium">Error cargando la ruta</p>
        <p className="text-sm mt-2">{routeError.message}</p>
      </div>
    )

  const route = routeData?.route

  if (!route)
    return (
      <div className="text-center text-gray-500 py-16">
        No existe la ruta solicitada
      </div>
    )

  const loans = loansData?.loansByRoute?.edges?.map(edge => edge?.node).filter(Boolean) || []
  const overdueLoans = loans.filter(loan => loan?.isOverdue && !loan?.isFullyPaid)
  const activeLoans = loans.filter(loan => !loan?.isFullyPaid)

  return (
    <div className="p-4 space-y-4">
      <Text as="h1" size="xl" weight="semibold">
        {route.name}
      </Text>

      <InfoCard title="Información general" titleIcon={HiOutlineCollection}>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="space-y-2">
            <Text className="inline-flex items-center gap-1" color="success" size="sm">
              <HiOutlineCurrencyDollar className="text-base" />
              Saldo inicial
            </Text>
            <Text size="sm" weight="semibold">
              <CurrencyCell value={route.startingBalance ?? 0} />
            </Text>
          </div>

          <div className="space-y-2">
            <Text className="inline-flex items-center gap-1" color="success" size="sm">
              <HiOutlineLocationMarker className="text-base" />
              Ciudad
            </Text>
            <Text size="sm" weight="semibold">
              {route.city?.name}
            </Text>
          </div>

          <div className="space-y-2">
            <Text className="inline-flex items-center gap-1" color="success" size="sm">
              <HiOutlineClock className="text-base" />
              Creada el
            </Text>
            <Text size="sm" weight="semibold">
              {formatDate(route.createdAt)}
            </Text>
          </div>

          <div className="space-y-2">
            <Text className="inline-flex items-center gap-1" color="success" size="sm">
              <HiOutlineClock className="text-base" />
              Actualizada el
            </Text>
            <Text size="sm" weight="semibold">
              {formatDate(route.updatedAt)}
            </Text>
          </div>
        </div>
      </InfoCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard title="Administradores" titleIcon={HiOutlineUserGroup}>
          {
            route.administrators?.edges.length
              ?
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {
                  route.administrators.edges.map((edge) => (
                    <div
                      key={edge?.node?.id}
                      className="flex justify-between items-center py-2"
                    >
                      <Text size="sm" weight="medium">
                        {edge?.node?.user.fullName}
                      </Text>
                      <Badge color={edge?.node?.user.isActive ? 'green' : 'red'}>
                        {edge?.node?.user.isActive ? 'Activo' : 'Inactivo'}
                      </Badge>
                    </div>
                  ))
                }
              </div>
              :
              <Text color="gray" className="flex flex-col items-center gap-4">
                <PiEmpty className="text-3xl" />
                No hay administradores registrados
              </Text>
          }
        </InfoCard>
        <InfoCard title="Recolector" titleIcon={HiOutlineUserCircle}>
          {
            route.collectorProfile
              ?
              <div className="flex justify-between items-center py-2"
              >
                <Text size="sm" weight="medium">
                  {route.collectorProfile.user.fullName}
                </Text>
                <Badge color={route.collectorProfile.user.isActive ? 'green' : 'red'}>
                  {route.collectorProfile.user.isActive ? 'Activo' : 'Inactivo'}
                </Badge>
              </div>
              :
              <Text color="gray" className="flex flex-col items-center gap-4">
                <PiEmpty className="text-3xl" />
                No tiene recolector asignado
              </Text>
          }
        </InfoCard>
      </div>

      {/* Loans Section */}
      <InfoCard title="Préstamos de la Ruta" titleIcon={HiOutlineCollection}>
        {loansLoading ? (
          <div className="flex justify-center py-8">
            <Spinner size="lg" />
          </div>
        ) : loansError ? (
          <div className="text-center text-red-600 py-8">
            <p>Error cargando los préstamos: {loansError.message}</p>
          </div>
        ) : loans.length === 0 ? (
          <Text color="gray" className="flex flex-col items-center gap-4 py-8">
            <PiEmpty className="text-4xl" />
            No hay préstamos en esta ruta
          </Text>
        ) : (
          <div className="space-y-4">
            {/* Summary stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Total Préstamos</p>
                    <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">{loans.length}</p>
                  </div>
                  <HiOutlineCollection className="text-3xl text-blue-500" />
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-600 dark:text-green-400 font-medium">Activos</p>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-100">{activeLoans.length}</p>
                  </div>
                  <HiOutlineCheckCircle className="text-3xl text-green-500" />
                </div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-red-600 dark:text-red-400 font-medium">Vencidos</p>
                    <p className="text-2xl font-bold text-red-900 dark:text-red-100">{overdueLoans.length}</p>
                  </div>
                  <HiOutlineExclamationCircle className="text-3xl text-red-500" />
                </div>
              </div>
            </div>

            {/* Overdue loans - shown prominently */}
            {overdueLoans.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                  <HiOutlineExclamationCircle className="text-xl" />
                  Préstamos Vencidos ({overdueLoans.length})
                </h3>
                <div className="space-y-3">
                  {overdueLoans.map((loan) => (
                    <Link
                      key={loan?.id}
                      to={`/loans/${loan?.id}`}
                      className="block bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Text size="sm" weight="semibold" className="text-red-900 dark:text-red-100">
                              {loan?.client?.user?.fullName}
                            </Text>
                            {loan?.client?.alias && (
                              <Badge color="red" size="xs">{loan?.client?.alias}</Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-red-700 dark:text-red-300 mb-2">
                            <HiOutlineLocationMarker className="text-sm" />
                            {loan?.client?.addressLine1}, {loan?.client?.neighborhood}
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <div>
                              <span className="text-gray-500 dark:text-gray-400">Deuda: </span>
                              <Text size="sm" weight="semibold" color="red">
                                <CurrencyCell value={loan?.pendingBalance || 0} />
                              </Text>
                            </div>
                            <div>
                              <span className="text-gray-500 dark:text-gray-400">Vencido: </span>
                              <Text size="sm" weight="semibold" color="red">
                                {loan?.daysOverdue} días
                              </Text>
                            </div>
                          </div>
                        </div>
                        <HiOutlineChevronRight className="text-red-500 text-xl" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* All loans list */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                Todos los Préstamos
              </h3>
              <div className="space-y-3">
                {loans.map((loan) => (
                  <Link
                    key={loan?.id}
                    to={`/loans/${loan?.id}`}
                    className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Text size="sm" weight="semibold">
                            {loan?.client?.user?.fullName}
                          </Text>
                          {loan?.client?.alias && (
                            <Badge color="gray" size="xs">{loan?.client?.alias}</Badge>
                          )}
                          {loan?.isOverdue && !loan?.isFullyPaid && (
                            <Badge color="red" size="xs">Vencido</Badge>
                          )}
                          {loan?.isFullyPaid && (
                            <Badge color="success" size="xs">Pagado</Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
                          <HiOutlineLocationMarker className="text-sm" />
                          {loan?.client?.addressLine1}, {loan?.client?.neighborhood}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <div>
                            <span className="text-gray-500 dark:text-gray-400">Monto: </span>
                            <Text size="sm" weight="medium">
                              <CurrencyCell value={loan?.amount || 0} />
                            </Text>
                          </div>
                          <div>
                            <span className="text-gray-500 dark:text-gray-400">Pagado: </span>
                            <Text size="sm" weight="medium" color="success">
                              <CurrencyCell value={loan?.totalPaid || 0} />
                            </Text>
                          </div>
                          <div>
                            <span className="text-gray-500 dark:text-gray-400">Pendiente: </span>
                            <Text size="sm" weight="semibold" color={loan?.pendingBalance > 0 ? "red" : "success"}>
                              <CurrencyCell value={loan?.pendingBalance || 0} />
                            </Text>
                          </div>
                        </div>
                      </div>
                      <HiOutlineChevronRight className="text-gray-400 text-xl" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </InfoCard>

      <TransactionsByRouteSection routeId={route.id} />
    </div>
  )
}

export default RoutePage
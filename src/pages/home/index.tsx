import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import {
  HiOutlineCollection,
  HiOutlineCurrencyDollar,
  HiOutlineExclamationCircle,
  HiOutlineLocationMarker,
  HiOutlineLockClosed,
  HiOutlineUserGroup,
} from 'react-icons/hi'
import { TbCoins, TbMoneybag, TbRoute } from 'react-icons/tb'
import { Badge, Spinner } from 'flowbite-react'
import { Text } from '@components'
import CurrencyCell from '@/components/tables/CurrencyCell'
import useMe from '@auth/hooks/useMe'
import LoansByCollectorQuery from '@/modules/loans/queries/LoansByCollectorQuery'

// NoRouteState Component - Updated with better design
const NoRouteState = () => (
    <div className="text-center py-12 sm:py-16">
      <div
          className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 mb-6">
        <HiOutlineLockClosed className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600 dark:text-amber-400"/>
      </div>
      <Text size="xl" weight="bold" className="text-gray-900 dark:text-white mb-2">
        Cuenta sin ruta asignada
      </Text>
      <Text size="sm" color="gray" className="max-w-xs mx-auto mb-6">
        Para acceder a todas las funcionalidades, contacta a tu administrador para que te asigne una ruta.
      </Text>
      <div className="inline-flex flex-col sm:flex-row gap-2 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center justify-center gap-1">
          <HiOutlineUserGroup className="w-4 h-4"/>
          <span>Clientes</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <TbMoneybag className="w-4 h-4"/>
          <span>Préstamos</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <TbCoins className="w-4 h-4"/>
          <span>Transacciones</span>
        </div>
      </div>
    </div>
)

// RouteInfoCard Component
interface RouteInfoCardProps {
  route: {
    id?: string
    name?: string | null
    currentBalance?: number | null
    loansCount?: number | null
    pendingLoansCount?: number | null
    city?: {
      id?: string
      name?: string | null
      region?: {
        id?: string
        name?: string | null
      } | null
    } | null
  } | null
}

const RouteInfoCard = ({ route }: RouteInfoCardProps) => (
    <div
        className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg shadow p-4 sm:p-6">
      <div className="flex items-center gap-3 mb-4">
        <TbRoute className="w-6 h-6 text-primary-600 dark:text-primary-400"/>
        <Text size="lg" weight="bold" color="primary">
          Mi Ruta: {route?.name}
        </Text>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
          <Text color="gray" size="xs">
            Balance
          </Text>
          <Text size="lg" weight="semibold">
            <CurrencyCell value={route?.currentBalance || 0}/>
          </Text>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
          <Text color="gray" size="xs">
            Préstamos
          </Text>
          <Text size="lg" weight="semibold">
            {route?.loansCount || 0}
          </Text>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
          <Text color="gray" size="xs">
            Pendientes
          </Text>
          <Text size="lg" weight="semibold">
            {route?.pendingLoansCount || 0}
          </Text>
        </div>
      </div>

      <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
        <HiOutlineLocationMarker className="text-sm"/>
        {route?.city?.name}, {route?.city?.region?.name}
      </div>
    </div>
)

// PendingLoansSection Component
const PendingLoansSection = ({ loans }: { loans: any[] }) => {
  const overdueLoans = loans
      .filter((l: any) => l?.isOverdue && !l?.isFullyPaid)
      .slice(0, 5)

  if (overdueLoans.length === 0) return null

  return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <HiOutlineExclamationCircle className="w-5 h-5 text-red-600 dark:text-red-400"/>
            <Text size="base" weight="semibold" className="text-red-600 dark:text-red-400">
              Préstamos Vencidos ({overdueLoans.length})
            </Text>
          </div>
          <Link
              to="/loans"
              className="text-sm text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Ver todos →
          </Link>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {overdueLoans.map((loan: any) => (
              <Link
                  key={loan?.id}
                  to={`/loans/${loan?.id}`}
                  className="block border-l-4 border-red-500 bg-red-50 dark:bg-red-900/10 dark:border-red-400 rounded-r-lg p-3 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold truncate">
                        {loan?.client?.user?.fullName}
                      </p>
                      {loan?.client?.alias && (
                          <Badge color="gray" size="xs">{loan?.client?.alias}</Badge>
                      )}
                      <Badge color="red" size="xs">Vencido {loan?.daysOverdue}d</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Pendiente</p>
                        <p className="text-sm font-semibold text-red-600 dark:text-red-400">
                          <CurrencyCell value={loan?.pendingBalance || 0}/>
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Pagado</p>
                        <p className="text-sm font-medium text-green-600 dark:text-green-400">
                          <CurrencyCell value={loan?.totalPaid || 0}/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
          ))}
        </div>
      </div>
  )
}

// RecentLoansSection Component
const RecentLoansSection = ({ loans }: { loans: any[] }) => {
  // Get recent loans (not overdue, not fully paid, sorted by createdAt)
  const recentLoans = loans
      .filter((l: any) => !l?.isOverdue && !l?.isFullyPaid)
      .sort((a: any, b: any) => new Date(b?.createdAt || 0).getTime() - new Date(a?.createdAt || 0).getTime())
      .slice(0, 5)

  if (recentLoans.length === 0) return null

  return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2">
            <HiOutlineCurrencyDollar className="w-5 h-5 text-green-600 dark:text-green-400"/>
            <Text size="base" weight="semibold" className="text-green-600 dark:text-green-400">
              Préstamos Recientes ({recentLoans.length})
            </Text>
          </div>
          <Link
              to="/loans"
              className="text-sm text-primary-600 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Ver todos →
          </Link>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {recentLoans.map((loan: any) => (
              <Link
                  key={loan?.id}
                  to={`/loans/${loan?.id}`}
                  className="block border-l-4 border-green-500 bg-green-50 dark:bg-green-900/10 dark:border-green-400 rounded-r-lg p-3 hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold truncate">
                        {loan?.client?.user?.fullName}
                      </p>
                      {loan?.client?.alias && (
                          <Badge color="gray" size="xs">{loan?.client?.alias}</Badge>
                      )}
                      <Badge color="green" size="xs">Activo</Badge>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mb-2">
                      <HiOutlineCollection className="text-sm"/>
                      <span className="truncate">{loan?.route?.name} · {loan?.route?.city?.name}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Pendiente</p>
                        <p className="text-sm font-semibold">
                          <CurrencyCell value={loan?.pendingBalance || 0}/>
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Pagado</p>
                        <p className="text-sm font-medium text-green-600 dark:text-green-400">
                          <CurrencyCell value={loan?.totalPaid || 0}/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
          ))}
        </div>
      </div>
  )
}

// QuickActions Component
const QuickActions = () => {
  const actions = useMemo(() => [
    {
      label: 'Mis Clientes',
      icon: HiOutlineUserGroup,
      href: '/clients',
      description: 'Gestionar clientes y crear nuevos',
      color: 'blue',
    },
    {
      label: 'Mis Préstamos',
      icon: TbMoneybag,
      href: '/loans',
      description: 'Lista completa de préstamos con filtros',
      color: 'green',
    },
    {
      label: 'Transacciones',
      icon: TbCoins,
      href: '/transactions',
      description: 'Historial de transacciones',
      color: 'purple',
    },
  ], [])

  return (
      <div>
        <Text className="mb-3 sm:mb-4" weight="semibold" size="lg">
          Acciones Rápidas
        </Text>
        <div className="grid gap-2 sm:gap-3">
          {actions.map(({ icon: Icon, label, href, description, color }) => (
              <Link
                  key={label}
                  to={href}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 text-left hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className={`p-2 sm:p-3 rounded-lg bg-${color}-50 dark:bg-${color}-900/20`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${color}-600 dark:text-${color}-400`}/>
                </div>
                <div className="flex-1 min-w-0">
                  <Text size="base" weight="semibold">
                    {label}
                  </Text>
                  <Text size="sm" color="gray" className="hidden sm:block line-clamp-1">
                    {description}
                  </Text>
                </div>
              </Link>
          ))}
        </div>
      </div>
  )
}

// Main HomePage Component
const HomePage = () => {
  const me = useMe()
  const route = me?.collectorProfile?.route || null

  // Fetch all loans
  const { data: loansData, loading: loansLoading, error: loansError, refetch: refetchLoans } = useQuery(
      LoansByCollectorQuery,
      {
        variables: { first: 100 },
        fetchPolicy: 'cache-and-network',
      },
  )

  const loans = loansData?.loansByCollector?.edges?.map((edge: any) => edge?.node).filter(Boolean) || []

  // Loading state
  if (loansLoading && !loansData) {
    return (
        <div className="flex justify-center items-center py-16">
          <Spinner size="xl"/>
        </div>
    )
  }

  // Error state
  if (loansError) {
    return (
        <div className="text-center text-red-600 py-16">
          <p className="text-lg font-medium">Error al cargar la información</p>
          <p className="text-sm mt-2">{loansError.message}</p>
          <button
              onClick={() => refetchLoans()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Reintentar
          </button>
        </div>
    )
  }

  return (
      <div className="p-3 sm:p-4 space-y-4 sm:space-y-6">
        {/* Welcome Card */}
        <div
            className="p-4 sm:p-6 bg-gradient-to-br from-orange-100 to-blue-100 dark:from-orange-900/20 dark:to-blue-900/20 rounded-lg shadow-sm">
          <img src="/coin.svg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4"/>
          <Text color="primary" size="lg" weight="bold" className="sm:text-xl">
            Bienvenido, {me?.fullName?.split(' ')[0]}
          </Text>
          <Text color="gray" size="sm" weight="semibold">
            Gestiona tus cobros y préstamos de manera eficiente
          </Text>
        </div>

        {/* Route Info or No Route State */}
        {route ? (
            <>
              <RouteInfoCard route={route}/>

              {/* Pending/Overdue Loans Section */}
              <PendingLoansSection loans={loans}/>

              {/* Recent Loans Section */}
              <RecentLoansSection loans={loans}/>

              {/* Quick Actions - Only show when route is assigned */}
              <QuickActions/>
            </>
        ) : (
            <NoRouteState/>
        )}
      </div>
  )
}

export default HomePage

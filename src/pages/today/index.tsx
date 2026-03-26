import { useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Badge, Spinner } from 'flowbite-react'
import {
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineMinusCircle,
  HiOutlineArrowCircleUp,
  HiChevronRight,
  HiOutlineCalendar,
} from 'react-icons/hi'
import { Text } from '@components'
import CurrencyCell from '@/components/tables/CurrencyCell'
import TodayVisitsQuery from '@clients/queries/TodayVisitsQuery'

type PaymentStatus = 'AL_DIA' | 'ADELANTADO' | 'PAGO_PARCIAL' | 'ATRASADO' | 'PAID'

const STATUS_CONFIG: Record<PaymentStatus, { label: string; color: 'success' | 'warning' | 'failure' | 'info'; icon: React.ElementType; borderColor: string }> = {
  AL_DIA: {
    label: 'Al día',
    color: 'success',
    icon: HiOutlineCheckCircle,
    borderColor: 'border-green-400',
  },
  ADELANTADO: {
    label: 'Adelantado',
    color: 'info',
    icon: HiOutlineArrowCircleUp,
    borderColor: 'border-blue-400',
  },
  PAGO_PARCIAL: {
    label: 'Pago parcial',
    color: 'warning',
    icon: HiOutlineMinusCircle,
    borderColor: 'border-yellow-400',
  },
  ATRASADO: {
    label: 'Atrasado',
    color: 'failure',
    icon: HiOutlineExclamationCircle,
    borderColor: 'border-red-400',
  },
  PAID: {
    label: 'Pagado',
    color: 'success',
    icon: HiOutlineCheckCircle,
    borderColor: 'border-green-400',
  },
}

const FREQUENCY_LABEL: Record<string, string> = {
  DAILY: 'Diario',
  WEEKLY: 'Semanal',
  MONTHLY: 'Mensual',
}

const ActiveLoanInfo = ({ loan }: { loan: any }) => {
  const status = (loan.paymentStatus ?? 'AL_DIA') as PaymentStatus
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG['AL_DIA']
  const StatusIcon = config.icon

  return (
    <div className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <StatusIcon className="w-4 h-4 flex-shrink-0 text-gray-500 dark:text-gray-400" />
          <Badge color={config.color} size="xs">{config.label}</Badge>
          <Text size="xs" color="gray">
            {FREQUENCY_LABEL[loan.paymentFrequency] ?? loan.paymentFrequency}
          </Text>
        </div>
        <Text size="sm" weight="semibold">
          Cuota: <CurrencyCell value={loan.installmentAmount ?? 0} />
        </Text>
      </div>

      {status === 'ATRASADO' && (
        <Text size="xs" color="red" className="mt-1">
          {loan.installmentsDue - loan.installmentsCompleted} cuota(s) sin pagar ·{' '}
          Pendiente: <CurrencyCell value={loan.pendingBalance ?? 0} />
        </Text>
      )}

      {status === 'ADELANTADO' && (
        <Text size="xs" className="mt-1 text-blue-600 dark:text-blue-400">
          {loan.installmentsCompleted - loan.installmentsDue} cuota(s) de crédito
        </Text>
      )}

      {status === 'PAGO_PARCIAL' && (
        <Text size="xs" color="gray" className="mt-1">
          Abono parcial registrado · Falta completar la cuota
        </Text>
      )}
    </div>
  )
}

const VisitCard = ({ client }: { client: any }) => {
  const navigate = useNavigate()

  const activeLoan = client.loans?.edges
    ?.map((e: any) => e?.node)
    .filter(Boolean)
    .find((loan: any) => loan.shouldVisitToday && !loan.isFullyPaid)

  return (
    <button
      onClick={() => activeLoan && navigate(`/loans/${activeLoan.id}`)}
      className={`w-full text-left bg-white dark:bg-gray-800 rounded-lg border-l-4 ${
        activeLoan ? STATUS_CONFIG[(activeLoan.paymentStatus as PaymentStatus) ?? 'AL_DIA']?.borderColor ?? 'border-gray-300' : 'border-gray-300'
      } shadow-sm p-3 hover:shadow transition-all active:scale-[0.99]`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <Text size="xs" weight="bold" color="gray">
            {client.visitOrder ?? '—'}
          </Text>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <Text size="sm" weight="semibold" className="truncate">
                {client.user?.fullName}
              </Text>
              {client.alias && (
                <Badge color="gray" size="xs">{client.alias}</Badge>
              )}
            </div>
            <HiChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </div>

          <Text size="xs" color="gray" className="truncate">
            {client.addressLine1}{client.neighborhood ? ` · ${client.neighborhood}` : ''}
          </Text>

          {activeLoan && <ActiveLoanInfo loan={activeLoan} />}
        </div>
      </div>
    </button>
  )
}

const TodayPage = () => {
  const { data, loading, error, refetch } = useQuery(TodayVisitsQuery, {
    fetchPolicy: 'cache-and-network',
  })

  const clients = data?.todayVisits ?? []

  const today = new Date().toLocaleDateString('es-CL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  return (
    <div className="p-3 sm:p-4 space-y-4 pb-20">
      <div className="flex items-center gap-2">
        <HiOutlineCalendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
        <div>
          <Text size="lg" weight="bold">Visitas de hoy</Text>
          <Text size="xs" color="gray" className="capitalize">{today}</Text>
        </div>
      </div>

      {loading && !data && (
        <div className="flex justify-center py-12">
          <Spinner size="xl" />
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <Text color="red" className="mb-3">Error al cargar las visitas</Text>
          <button
            onClick={() => refetch()}
            className="text-sm text-primary-600 hover:underline"
          >
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && clients.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <HiOutlineCheckCircle className="w-16 h-16 text-green-400 mb-4" />
          <Text size="lg" weight="semibold" className="mb-1">Sin visitas pendientes</Text>
          <Text size="sm" color="gray">No hay cobros programados para hoy.</Text>
        </div>
      )}

      <div className="space-y-3">
        {clients.map((client: any) => (
          <VisitCard key={client.id} client={client} />
        ))}
      </div>

      {!loading && clients.length > 0 && (
        <Text size="sm" color="gray" className="text-center">
          {clients.length} {clients.length === 1 ? 'visita' : 'visitas'} programadas
        </Text>
      )}
    </div>
  )
}

export default TodayPage

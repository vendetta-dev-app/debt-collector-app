import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Spinner, Badge, Button } from 'flowbite-react'
import {
  HiOutlineUser,
  HiOutlineLocationMarker,
  HiOutlineCollection,
  HiOutlineCurrencyDollar,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineExclamationCircle,
  HiOutlineCheckCircle,
  HiOutlineCreditCard,
  HiOutlinePlus,
} from 'react-icons/hi'
import { PiEmpty } from 'react-icons/pi'
import { Text } from '@/components'
import InfoCard from '@/components/cards/InfoCard'
import CurrencyCell from '@/components/tables/CurrencyCell'
import LoanDetailQuery from '@/modules/loans/queries/LoanDetailQuery'
import PaymentsByLoanQuery from '@/modules/loans/queries/PaymentsByLoanQuery'
import NiceModal from '@ebay/nice-modal-react'
import CreatePaymentModal from '@/modules/loans/components/CreatePaymentModal'

const LoanDetailPage = () => {
  const { loanId } = useParams()

  const { data: loanData, loading: loanLoading, error: loanError, refetch: refetchLoan } = useQuery(
    LoanDetailQuery,
    {
      skip: !loanId,
      variables: { id: loanId as string },
      fetchPolicy: 'cache-and-network'
    }
  )

  const { data: paymentsData, loading: paymentsLoading, refetch: refetchPayments } = useQuery(
    PaymentsByLoanQuery,
    {
      skip: !loanId,
      variables: { loanId: loanId as string },
      fetchPolicy: 'cache-and-network'
    }
  )

  if (loanLoading && !loanData) {
    return (
      <div className="flex justify-center items-center py-16">
        <Spinner size="xl" />
      </div>
    )
  }

  if (loanError) {
    return (
      <div className="text-center text-red-600 py-16">
        <p className="text-lg font-medium">Error cargando el préstamo</p>
        <p className="text-sm mt-2">{loanError.message}</p>
      </div>
    )
  }

  const loan = loanData?.loan

  if (!loan) {
    return (
      <div className="text-center text-gray-500 py-16">
        <p className="text-lg font-medium">No existe el préstamo solicitado</p>
      </div>
    )
  }

  const payments = paymentsData?.paymentsByLoan?.edges?.map(edge => edge?.node).filter(Boolean) || []
  const totalPaid = payments.reduce((sum, payment) => sum + (payment?.amount || 0), 0)

  const getPaymentMethodLabel = (method: string) => {
    const methods: Record<string, string> = {
      CASH: 'Efectivo',
      TRANSFER: 'Transferencia',
      OTHER: 'Otro'
    }
    return methods[method] || method
  }

  const getPaymentMethodColor = (method: string) => {
    const colors: Record<string, string> = {
      CASH: 'success',
      TRANSFER: 'info',
      OTHER: 'gray'
    }
    return colors[method] || 'gray'
  }

  const handlePaymentSuccess = () => {
    refetchLoan()
    refetchPayments()
  }

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <Text as="h1" size="xl" weight="semibold">
            Préstamo #{loanId?.slice(0, 8)}
          </Text>
          <Text color="gray" size="sm" className="mt-1">
            Creado el {new Date(loan.createdAt).toLocaleDateString()}
          </Text>
        </div>
        <div className="flex gap-2">
          {loan.isFullyPaid ? (
            <Badge color="success" className="px-4 py-2">
              <HiOutlineCheckCircle className="mr-1 inline" />
              Pagado
            </Badge>
          ) : loan.isOverdue ? (
            <Badge color="red" className="px-4 py-2">
              <HiOutlineExclamationCircle className="mr-1 inline" />
              Vencido {loan.daysOverdue} días
            </Badge>
          ) : (
            <Badge color="green" className="px-4 py-2">
              Activo
            </Badge>
          )}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">Monto</p>
              <p className="text-xl font-bold text-blue-900 dark:text-blue-100">
                <CurrencyCell value={loan.amount || 0} />
              </p>
            </div>
            <HiOutlineCurrencyDollar className="text-3xl text-blue-500" />
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">Pagado</p>
              <p className="text-xl font-bold text-green-900 dark:text-green-100">
                <CurrencyCell value={loan.totalPaid || 0} />
              </p>
            </div>
            <HiOutlineCheckCircle className="text-3xl text-green-500" />
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600 dark:text-red-400 font-medium">Pendiente</p>
              <p className="text-xl font-bold text-red-900 dark:text-red-100">
                <CurrencyCell value={loan.pendingBalance || 0} />
              </p>
            </div>
            <HiOutlineExclamationCircle className="text-3xl text-red-500" />
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">Tasa</p>
              <p className="text-xl font-bold text-purple-900 dark:text-purple-100">
                20%
              </p>
            </div>
            <HiOutlineCreditCard className="text-3xl text-purple-500" />
          </div>
        </div>
      </div>

      {/* Client Information */}
      <InfoCard title="Información del Cliente" titleIcon={HiOutlineUser}>
        <div className="mt-6 space-y-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Nombre completo</p>
            <Text size="base" weight="semibold">
              {loan.client?.user?.fullName}
            </Text>
            {loan.client?.alias && (
              <Badge color="gray" size="sm" className="ml-2">{loan.client.alias}</Badge>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Teléfono</p>
              <Text size="sm" weight="medium" className="flex items-center gap-2">
                <a href={`tel:${loan.client?.user?.phoneNumber1}`} className="text-blue-600 hover:underline">
                  {loan.client?.user?.phoneNumber1}
                </a>
              </Text>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Teléfono alterno</p>
              <Text size="sm" weight="medium">
                {loan.client?.user?.phoneNumber2 || '-'}
              </Text>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Dirección</p>
            <Text size="sm" weight="medium" className="flex items-start gap-2">
              <HiOutlineLocationMarker className="mt-0.5 text-gray-400" />
              <span>
                {loan.client?.addressLine1}
                {loan.client?.addressLine2 && `, ${loan.client?.addressLine2}`}
                <br />
                {loan.client?.neighborhood}
              </span>
            </Text>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Ruta</p>
            <Text size="sm" weight="medium" className="flex items-center gap-2">
              <HiOutlineCollection className="text-gray-400" />
              {loan.route?.name} · {loan.route?.city?.name}
            </Text>
          </div>
        </div>
      </InfoCard>

      {/* Loan Details */}
      <InfoCard title="Detalles del Préstamo" titleIcon={HiOutlineCurrencyDollar}>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Fecha de vencimiento</p>
            <Text size="base" weight="semibold" className="flex items-center gap-2">
              <HiOutlineCalendar className="text-gray-400" />
              {loan.dueDate ? new Date(loan.dueDate).toLocaleDateString() : 'No definida'}
            </Text>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Cuotas</p>
            <Text size="base" weight="semibold">
              {loan.installments} cuotas
            </Text>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Frecuencia</p>
            <Text size="base" weight="semibold">
              {loan.paymentFrequency === 'DAILY' ? 'Diaria' : loan.paymentFrequency === 'WEEKLY' ? 'Semanal' : 'Mensual'}
            </Text>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Estado</p>
            <div className="flex gap-2 mt-1">
              {loan.isApproved && <Badge color="success">Aprobado</Badge>}
              {loan.isRejected && <Badge color="red">Rechazado</Badge>}
              {loan.isFullyPaid && <Badge color="success">Pagado</Badge>}
              {loan.isOverdue && !loan.isFullyPaid && <Badge color="red">Vencido</Badge>}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total a pagar</p>
            <Text size="base" weight="semibold">
              <CurrencyCell value={loan.totalAmount || 0} />
            </Text>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Días de vencimiento</p>
            <Text size="base" weight="semibold" color={loan.isOverdue ? "red" : "base"}>
              {loan.daysOverdue || 0} días
            </Text>
          </div>
        </div>
      </InfoCard>

      {/* Payment Actions */}
      {!loan.isFullyPaid && (
        <div className="flex justify-end">
          <Button
            color="blue"
            size="lg"
            onClick={() => NiceModal.show(CreatePaymentModal, {
              loanId: loan?.id,
              clientId: loan?.client?.id,
              pendingBalance: loan?.pendingBalance,
              onPaymentSuccess: handlePaymentSuccess
            })}
          >
            <HiOutlinePlus className="mr-2" />
            Registrar Pago
          </Button>
        </div>
      )}

      {/* Payment History */}
      <InfoCard title="Historial de Pagos" titleIcon={HiOutlineCreditCard}>
        {paymentsLoading ? (
          <div className="flex justify-center py-8">
            <Spinner size="lg" />
          </div>
        ) : payments.length === 0 ? (
          <div className="text-center py-8">
            <PiEmpty className="mx-auto text-5xl text-gray-400 mb-3" />
            <Text color="gray">No hay pagos registrados</Text>
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Monto
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Método
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Notas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {payments.map((payment) => (
                  <tr key={payment?.id} className={payment?.isVoided ? 'bg-red-50 dark:bg-red-900/10' : ''}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Text size="sm" weight="medium">
                        {payment?.paymentDate ? new Date(payment.paymentDate).toLocaleDateString() : '-'}
                      </Text>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Text size="sm" weight={payment?.isVoided ? "normal" : "semibold"} color={payment?.isVoided ? "gray" : "success"}>
                        <CurrencyCell value={payment?.amount || 0} />
                      </Text>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge color={getPaymentMethodColor(payment?.paymentMethod || '')} size="sm">
                        {getPaymentMethodLabel(payment?.paymentMethod || '')}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Text size="sm" color="gray">
                        {payment?.notes || '-'}
                      </Text>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {payment?.isVoided ? (
                        <Badge color="red" size="sm">Anulado</Badge>
                      ) : (
                        <Badge color="success" size="sm">Registrado</Badge>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </InfoCard>
    </div>
  )
}

export default LoanDetailPage
